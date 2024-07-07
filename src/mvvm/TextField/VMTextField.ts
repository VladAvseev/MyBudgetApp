import { Instance, types } from "mobx-state-tree";

export type VMTextFieldInstance = Instance<typeof VMTextField>;

export const VMTextField = types.model('VMTextField', {
	placeholder: types.optional(types.string, ''),
})
.volatile(() => ({
	inputValue: '',
}))
.views((self) => ({
	get value(): string {
		return self.inputValue.trim();
	}
}))
.actions((self) => ({
	setValue(value: string) {
		self.inputValue = value;
	},
}));