import { NavigationProp } from "@react-navigation/native";
import { types } from "mobx-state-tree";
import { Repository } from "../../../repository";

export type ICard = {
	id: number;
	title: string;
}

export type INavigation = NavigationProp<{}>

export const home = types.model('home')
.volatile(() => ({
	navigation: null as INavigation | null,
	isPending: true,
	cards: [] as ICard[],
}))
.actions((self) => ({
	setNavigation(value: INavigation) {
		self.navigation = value;
	},
	setIsPending(value: boolean) {
		self.isPending = value;
	},
	setCards(cards: ICard[]) {
		self.cards = cards;
	}
}))
.actions((self) => ({
	async fetch() {
		const reportCards = await Repository.getReportCards();
		self.setCards(reportCards);
	},
	cleadData() {
		self.setCards([]);
	},
}))
.actions((self) => ({
	async addCard() {
		self.setIsPending(true);
		await Repository.addReport();
		await self.fetch();
		self.setIsPending(false);
	}
}))
.actions((self) => ({
	async start(navigation: INavigation) {
		self.setIsPending(true);
		self.setNavigation(navigation);
		await self.fetch();
		self.setIsPending(false);
	},
	stop() {
		self.cleadData();
	},
}))
.create({})