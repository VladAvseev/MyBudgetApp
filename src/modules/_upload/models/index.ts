import { NavigationProp } from "@react-navigation/native";
import { types } from "mobx-state-tree";
import { Repository, TReport } from "../../../repository";
import { VMTextField } from "../../../mvvm/TextField/VMTextField";

export type ICard = {
	id: number;
	title: string;
}

export type INavigation = NavigationProp<{}>

export const upload = types.model('upload')
.volatile(() => ({
	navigation: null as INavigation | null,
	isPending: true,
	field: VMTextField.create({ placeholder: 'Введите данные в JSON формате' })
}))
.views((self) => ({
	get reports(): TReport[] {
		return JSON.parse(self.field.value);
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
	async save() {
		await Repository.uploadReports(self.reports);
		self.navigation?.navigate('Home');
		self.field.setValue('');
	},
	async setReports() {
		await Repository.setReports(self.reports);
		self.navigation?.navigate('Home')
		self.field.setValue('');
	}
}))
.actions((self) => ({
	start(navigation: INavigation) {
		self.setNavigation(navigation);
		self.setIsPending(false);
	},
}))
.create({})