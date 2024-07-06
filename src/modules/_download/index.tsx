import { observer } from "mobx-react-lite";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { download } from "./models";
import { ReportsView } from "./components/ReportsView";
import { Header } from "../../components/Header";
import { BackButton } from "./components/BackButton";
import { Container } from "../../components/Container";
import { PageContainer } from "../../components/PageContainer";
import { PendingPage } from "../../components/PendingPage";

type props = {
	navigation: NavigationProp<{}>;
}

export const Download: React.FC<props> = observer(({ navigation }) => {
	const { start, deleteReports, reports, isPending } = download;

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
					<BackButton />
					<Button title='Обновить' onPress={() => start(navigation)} />
					<View style={styles.empty} />
				</View>
			</Header>
			<ScrollView>
				<PageContainer>
					<Container>
						<Text selectable>{reports}</Text>	
					</Container>
					<Button color={'red'} title="Удалить все очёты" onPress={deleteReports} />
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
	empty: {
		width: 30,
	}
});