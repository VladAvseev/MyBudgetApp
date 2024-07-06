import { types } from "mobx-state-tree";
import { VMNumberField } from "../../../mvvm/NumberField/VMNumberField";
import { Repository } from "../../../repository";
import { VMTextField } from "../../../mvvm/TextField/VMTextField";

export const IncomeEditForm = types.model('IncomeEditForm', {
	reportId: types.number,
	id: types.number,
})
.volatile(() => ({
	field: VMNumberField.create({ placeholder: 'Сумма' }),
	title: VMTextField.create({ placeholder: 'Название' }),
}))
.views((self) => ({
	get data() {
		return {
			reportId: Number(self.reportId),
			data: {
				id: Number(self.id),
				value: Number(self.field.value),
				title: self.title.value
			},
		};
	}
}))
.actions((self) => ({
	async save() {
	 await Repository.editIncome(self.data)
	},
	async delete() {
		await Repository.deleteIncome({ reportId: self.reportId, id: self.id });
	}
}))