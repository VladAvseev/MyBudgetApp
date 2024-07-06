import { types } from "mobx-state-tree";
import { VMTextField } from "../../../mvvm/TextField/VMTextField";
import { VMDatePicker } from "../../../mvvm/DatePicker/VMDatePicker";
import { VMNumberField } from "../../../mvvm/NumberField/VMNumberField";
import { Repository, TReportConfig } from "../../../repository";
import { INavigation, report } from "../../_report/models";
export const reportConfig = types.model('reportConfig')
.volatile(() => ({
	navigation: null as INavigation | null,
	isPending: true,
	id: 0,
	title: VMTextField.create({}),
	periodStart: VMDatePicker.create({}),
	periodEnd: VMDatePicker.create({}),
	dailyBudget: VMNumberField.create({ placeholder: 'Сумма' }),
	prevData: {} as TReportConfig,
	deleteField: VMTextField.create({ placeholder: 'Для удаление отчёта введите его название' })
}))
.views((self) => ({
	get isDeleteButtonDisabled(): boolean {
		return self.deleteField.value !== self.prevData.title;
	},
	get data(): TReportConfig {
		return {
			title: self.title.value,
			periodStart: self.periodStart.value,
			periodEnd: self.periodEnd.value,
			dailyBudget: Number(self.dailyBudget.value)
		};
	}
}))
.views((self) => ({
	get isEdit(): boolean {
		return (
			self.prevData?.title !== self.data.title ||
			self.prevData?.periodStart !== self.data.periodStart ||
			self.prevData?.periodEnd !== self.data.periodEnd ||
			self.prevData?.dailyBudget !== self.data.dailyBudget
		);
	}
}))
.actions((self) => ({
	setNavigation(value: INavigation) {
		self.navigation = value;
	},
	setId(value: number) {
		self.id = value;
	},
	setPrevData(value: TReportConfig) {
		self.prevData = value;
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
}))
.actions((self) => ({
	async onSave() {
		try {
			await Repository.updateReportCofig({ id: self.id, config: self.data });
			self.setPrevData(self.data);
		} catch {}
	},
	async onDelete() {
		try {
			await Repository.deleteReport(self.id);
			self.deleteField.setValue('');
			report.navigation?.navigate('Home');
		} catch {}
	},
	onCancel() {
		self.title.setValue(self.prevData?.title);
		self.periodStart.setValue(self.prevData?.periodStart);
		self.periodEnd.setValue(self.prevData?.periodEnd);
		self.dailyBudget.setValue(self.prevData?.dailyBudget.toString());
	}
}))
.actions((self) => ({
	async start(id: number, navigation: INavigation) {
		self.setNavigation(navigation);
		self.setId(id);
		const reportConfig = await Repository.getReportConfig(id);
		self.setPrevData(reportConfig);
		self.title.setValue(reportConfig.title);
		self.periodStart.setValue(reportConfig.periodStart);
		self.periodEnd.setValue(reportConfig.periodEnd);
		self.dailyBudget.setValue(reportConfig.dailyBudget.toString());
		self.setIsPending(false);
	},
}))
.create({});