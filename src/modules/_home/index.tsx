import { observer } from "mobx-react-lite";
import { CardList } from "./components/CardList"; 
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { home } from "./models";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { PageContainer } from "../../components/PageContainer";

type props = {
	navigation: NavigationProp<{}>;
}

export const Home: React.FC<props> = observer(({ navigation }) => {
	const { start } = home;

	useEffect(() => {
		start(navigation);
	}, []);

  return (
		<>
			<Header>
					<View style={styles.header}>
						<Button title='Все данные' onPress={() => navigation?.navigate('Download')} />
						<Button title='Загрузить' onPress={() => navigation?.navigate('Upload')} />
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
		justifyContent: 'flex-end',
		gap: 10,
	},
	main: {
		width: '100%',
		minHeight: 800,
	},
});