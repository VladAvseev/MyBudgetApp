import { Instance, types } from "mobx-state-tree";

export type VMDatePickerInstance = Instance<typeof VMDatePicker>;

export const VMDatePicker = types.model('VMDatePicker', {
	placeholder: types.optional(types.string, 'DD.MM.YYYY'),
})
.volatile(() => ({
	value: new Date(),
	isOpen: false,
}))
.views((self) => ({
	get label(): string {
		return self.value.toLocaleDateString();
	},
}))
.actions((self) => ({
	setValue(value: Date) {
		value.setHours(3);
		value.setMinutes(0);
		value.setSeconds(0);
		value.setMilliseconds(0);
		self.value = value;
	},
	setIsOpen(value: boolean) {
		self.isOpen = value;
	},
}));