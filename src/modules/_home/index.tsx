import { observer } from "mobx-react-lite";
import { CardList } from "./components/CardList"; 
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { home } from "./models";
import { Header } from "../../components/Header";
import { PageContainer } from "../../components/PageContainer";
import { PendingPage } from "../../components/PendingPage";

type props = {
	navigation: NavigationProp<{}>;
}

export const Home: React.FC<props> = observer(({ navigation }) => {
	const { start, isPending } = home;

	useEffect(() => {
		start(navigation);
	}, []);

	if (isPending) {
		return <PendingPage />
	}

  return (
		<>
			<Header>
					<View style={styles.header}>
						<Button title='Обновить' onPress={() => start(navigation)} />
						<View style={styles.actions}>
							<Button title='Все данные' onPress={() => navigation?.navigate('Download')} />
							<Button title='Загрузить' onPress={() => navigation?.navigate('Upload')} />
						</View>
					</View>
				</Header>
			<ScrollView>
				<PageContainer>
					<View style={styles.main}>
						<CardList />
					</View>
				</PageContainer>
			</ScrollView>
		</>
  );
});

const styles = StyleSheet.create({
	header: {
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
	main: {
		width: '100%',
		minHeight: 800,
	},
});