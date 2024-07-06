import { Instance, types } from "mobx-state-tree";

export type VMNumberFieldInstance = Instance<typeof VMNumberField>;

export const VMNumberField = types.model('VMNumberField', {
	placeholder: types.optional(types.string, ''),
})
.volatile(() => ({
	value: '',
}))
.actions((self) => ({
	setValue(value: string) {
		self.value = value;
	},
}))
.actions((self) => ({
	onChange(value: string) {
		if (!Number.isNaN(Number(value))) {
			if (value.split('.')[1]?.length > 2) {
				self.setValue(Number(value).toFixed(2).toString());
			} else {
				self.setValue(value);
			}
		}
	}
}))