import { observer } from "mobx-react-lite";
import { Button, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { upload } from "./models";
import { VTextField } from "../../mvvm/TextField/VTextField";
import { Header } from "../../components/Header";
import { BackButton } from "./components/BackButton";
import { PageContainer } from "../../components/PageContainer";
import { Container } from "../../components/Container";
import { PendingPage } from "../../components/PendingPage";

type props = {
	navigation: NavigationProp<{}>;
}

export const Upload: React.FC<props> = observer(({ navigation }) => {
	const { start, save, setReports, field, isPending } = upload;

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
			<PageContainer>
				<View style={styles.main}>
					<Container>
						<VTextField style={styles.text} model={field}/>
					</Container>
					<Container>
						<Button title="Сохранить" onPress={save} />
					</Container>
					<Button title="Перезаписать" onPress={setReports} />
				</View>
			</PageContainer>
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
	},
	main: {
		minHeight: 800,
	},
	text: {
		width: '100%',
	},
});