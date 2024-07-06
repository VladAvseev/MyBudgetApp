import { Instance, types } from "mobx-state-tree";

export type VMTextFieldInstance = Instance<typeof VMTextField>;

export const VMTextField = types.model('VMTextField', {
	placeholder: types.optional(types.string, ''),
})
.volatile(() => ({
	value: '',
}))
.actions((self) => ({
	setValue(value: string) {
		self.value = value;
	},
}));