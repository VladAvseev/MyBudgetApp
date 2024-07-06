import { types } from "mobx-state-tree";
import { VMNumberField } from "../../../mvvm/NumberField/VMNumberField";
import { VMTextField } from "../../../mvvm/TextField/VMTextField";

export const IncomeForm = types.model('IncomeForm')
.volatile(() => ({
	isPending: false,
	field: VMNumberField.create({ placeholder: 'Сумма' }),
	title: VMTextField.create({ placeholder: 'Название' }),
}))
.views((self) => ({
	get data() {
		return {
			value: Number(self.field.value),
			title: self.title.value,
		}
	}
}))
.actions((self) => ({
	setIsPending(value: boolean) {
		self.isPending = value;
	},
}));