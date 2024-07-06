import { NavigationProp } from "@react-navigation/native";
import { types } from "mobx-state-tree";
import { Repository } from "../../../repository";

export type ICard = {
	id: number;
	title: string;
}

export type INavigation = NavigationProp<{}>

export const download = types.model('download')
.volatile(() => ({
	navigation: null as INavigation | null,
	isPending: true,
	reports: '',
}))
.views((self) => ({
	get path() {
		return 'data.json';
	}
}))
.actions((self) => ({
	setNavigation(value: INavigation) {
		self.navigation = value;
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
	setReports(value: string) {
		self.reports = value;
	}
}))
.actions((self) => ({
	async fetch() {
		const reports = await Repository.getReports();
		self.setReports(JSON.stringify(reports));
	},
	async deleteReports() {
		await Repository.setReports([]);
		self.navigation?.navigate('Home');
	},
}))
.actions((self) => ({
	async start(navigation: INavigation) {
		self.setNavigation(navigation);
		await self.fetch();
		self.setIsPending(false);
	},
}))
.create({})