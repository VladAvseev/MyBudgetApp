import { NavigationProp } from "@react-navigation/native";
import { types } from "mobx-state-tree";
import { Repository, TReport } from "../../../repository";
import { VMTextField } from "../../../mvvm/TextField/VMTextField";
import { VMNumberField } from "../../../mvvm/NumberField/VMNumberField";

export type ICard = {
	id: number;
	title: string;
}

export type INavigation = NavigationProp<{}>

export const upload = types.model('upload')
.volatile(() => ({
	navigation: null as INavigation | null,
	isPending: false,
	dataField: VMTextField.create({ placeholder: 'Введите данные в JSON формате' }),
	sumField: VMNumberField.create({ placeholder: 'Введите начальный баланс' }),
}))
.views((self) => ({
	get reports(): TReport[] {
		return JSON.parse(self.dataField.value);
	},
	get dataFormIsValid(): boolean {
		return !!self.dataField.value.length;
	},
	get sumFormIsValid(): boolean {
		return !!self.sumField.value.length;
	},
}))
.actions((self) => ({
	setNavigation(value: INavigation) {
		self.navigation = value;
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
}))
.actions((self) => ({
	async fetch() {
		self.setIsPending(true);
		const sum = await Repository.getStartSum();
		self.sumField.setValue(sum.toString());
		self.setIsPending(false);
	},
}))
.actions((self) => ({
	async saveData() {
		try {
			self.setIsPending(true);
			await Repository.uploadReports(self.reports);
			self.dataField.setValue('');
		} catch {}
		self.setIsPending(false);
	},
	async setReports() {
		try {
			self.setIsPending(true);
			await Repository.setReports(self.reports);
			self.dataField.setValue('');
		} catch {}
		self.setIsPending(false);
	},
	async saveSum() {
		try {
			self.setIsPending(true);
			await Repository.setStartSum(Number(self.sumField.value));
			self.sumField.setValue('');
		} catch {}
		self.setIsPending(false);
	},
}))
.actions((self) => ({
	start(navigation: INavigation) {
		self.setNavigation(navigation);
		self.setIsPending(false);
	},
}))
.create({})