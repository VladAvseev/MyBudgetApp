import { types } from "mobx-state-tree";
import { VMNumberField } from "../../../mvvm/NumberField/VMNumberField";
import { Repository } from "../../../repository";

export const DailySpendingEditForm = types.model('DailySpendingEditForm', {
	reportId: types.number,
	id: types.number,
})
.volatile(() => ({
	field: VMNumberField.create({ placeholder: 'Сумма' }),
}))
.views((self) => ({
	get data() {
		return {
			reportId: Number(self.reportId),
			data: {
				id: Number(self.id),
				value: Number(self.field.value),
			},
		};
	}
}))
.actions((self) => ({
	async save() {
	 await Repository.editDailySpending(self.data)
	}
}))