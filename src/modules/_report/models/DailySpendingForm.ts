import { types } from "mobx-state-tree";
import { VMNumberField } from "../../../mvvm/NumberField/VMNumberField";

export const DailySpendingForm = types.model('DailySpendingForm')
.volatile(() => ({
	isPending: false,
	field: VMNumberField.create({ placeholder: 'Сумма' }),
}))
.views((self) => ({
	get data() {
		return {
			value: Number(self.field.value),
		}
	},
	get isValid(): boolean {
		return !!self.field.value.length;
	}
}))
.actions((self) => ({
	setIsPending(value: boolean) {
		self.isPending = value;
	},
}));