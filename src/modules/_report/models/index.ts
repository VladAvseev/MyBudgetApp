import { NavigationProp } from "@react-navigation/native";
import { types } from "mobx-state-tree";
import { Repository, TDailySpending, TIncome, TOtherSpending } from "../../../repository";
import { DailySpendingForm } from "./DailySpendingForm";
import { OtherSpendingForm } from "./OtherSpendingForm";
import { IncomeForm } from "./IncomeForm";

export type INavigation = NavigationProp<{}>

export const report = types.model('report')
.volatile(() => ({
	navigation: null as INavigation | null,
	isPending: true,
	id: 0,
	title: '',
	periodStart: new Date(),
	periodEnd: new Date(),
	dailyBudget: 0,
	dailySpending: [] as (TDailySpending & { isEdit: boolean })[],
	dailySpendingForm: DailySpendingForm.create({}), 
	otherSpending: [] as (TOtherSpending & { isEdit: boolean })[],
	otherSpendingForm: OtherSpendingForm.create({}), 
	income: [] as (TIncome & { isEdit: boolean })[],
	incomeForm: IncomeForm.create({}), 
}))
.views((self) => ({
	get savedForPeriod(): string {
		const dailySpendingSum = self.dailySpending.reduce(
			(accumulator, item) => accumulator + item.value,
  		0,
		);
		const otherSpendingSum = self.otherSpending.reduce(
			(accumulator, item) => accumulator + item.value,
  		0,
		);
		const incomeSum = self.income.reduce(
			(accumulator, item) => accumulator + item.value,
  		0,
		);
		return (incomeSum - dailySpendingSum - otherSpendingSum).toFixed(2);
	},
	get dailySpendingSum(): number {
		return self.dailySpending.reduce((currentSum, item) => currentSum + item.value, 0);
	},
	get otherSpendingSum(): number {
		return self.otherSpending.reduce((currentSum, item) => currentSum + item.value, 0);
	},
	get incomeSum(): number {
		return self.income.reduce((currentSum, item) => currentSum + item.value, 0);
	},
}))
.actions((self) => ({
	setNavigation(value: INavigation) {
		self.navigation = value;
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
	setId(value: number) {
		self.id = value;
	},
	setTitle(value: string) {
		self.title = value;
	},
	setPeriodStart(value: Date) {
		self.periodStart = value;
	},
	setPeriodEnd(value: Date) {
		self.periodEnd = value;
	},
	setDailyBudget(value: number) {
		self.dailyBudget = value;
	},
	setDailySpending(value: (TDailySpending & { isEdit: boolean })[]) {
		self.dailySpending = value;
	},
	setOtherSpending(value: (TOtherSpending & { isEdit: boolean })[]) {
		self.otherSpending = value;
	},
	setIncome(value: (TIncome & { isEdit: boolean })[]) {
		self.income = value;
	},
}))
.actions((self) => ({
	async fetch() {
		const report = await Repository.getReportById(self.id);
		self.setTitle(report.config.title);
		self.setPeriodStart(report.config.periodStart);
		self.setPeriodEnd(report.config.periodEnd);
		self.setDailyBudget(report.config.dailyBudget);
		self.setDailySpending(report.dailySpending.map((item) => ({ ...item, isEdit: false })));
		self.setOtherSpending(report.otherSpending.map((item) => ({ ...item, isEdit: false })));
		self.setIncome(report.income.map((item) => ({ ...item, isEdit: false })));
	}
}))
.actions((self) => ({
	async addDailySpending() {
		try {
			self.dailySpendingForm.setIsPending(true);
			await Repository.addDailySpending({ 
				id: self.id,
				value: self.dailySpendingForm.data.value
			});
			await self.fetch();
			self.dailySpendingForm.field.setValue('');
			self.dailySpendingForm.setIsPending(false);
		} catch {}
	},
	async addOtherSpending() {
		try {
			self.otherSpendingForm.setIsPending(true);
			await Repository.addOtherSpending({ 
				id: self.id,
				value: self.otherSpendingForm.data.value,
				title: self.otherSpendingForm.data.title
			});
			await self.fetch();
			self.otherSpendingForm.field.setValue('');
			self.otherSpendingForm.title.setValue('');
			self.otherSpendingForm.setIsPending(false);
		} catch {}
	},
	async addIncome() {
		try {
			self.incomeForm.setIsPending(true);
			await Repository.addIncome({ 
				id: self.id,
				value: self.incomeForm.data.value,
				title: self.incomeForm.data.title
			});
			await self.fetch();
			self.incomeForm.field.setValue('');
			self.incomeForm.title.setValue('');
			self.incomeForm.setIsPending(false);
		} catch {}
	},
}))
.actions((self) => ({
	setEditDailySpending(id: number, value: boolean) {
		self.setDailySpending(self.dailySpending.map((item) => {
			if (item.id === id) {
				return {
					...item,
					isEdit: value
				}
			} else {
				return item;
			}
		}))
	},
	setEditOtherSpending(id: number, value: boolean) {
		self.setOtherSpending(self.otherSpending.map((item) => {
			if (item.id === id) {
				return {
					...item,
					isEdit: value
				}
			} else {
				return item;
			}
		}))
	},
	setEditIncome(id: number, value: boolean) {
		self.setIncome(self.income.map((item) => {
			if (item.id === id) {
				return {
					...item,
					isEdit: value
				}
			} else {
				return item;
			}
		}))
	},
}))
.actions((self) => ({
	async start(id: number, navigation: INavigation) {
		self.setIsPending(true);
		self.setNavigation(navigation);
		self.setId(id);
		await self.fetch();
		self.setIsPending(false);
	},
}))
.actions((self) => ({
	async updatePage() {
		await self.fetch();
	}
}))
.create({})