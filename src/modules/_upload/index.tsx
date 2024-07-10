import { observer } from "mobx-react-lite";
import { StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { upload } from "./models";
import { VTextField } from "../../mvvm/TextField/VTextField";
import { Header } from "../../components/Header";
import { PageContainer } from "../../components/PageContainer";
import { Container } from "../../components/Container";
import { PendingPage } from "../../components/PendingPage";
import { ArrowLeftIcon } from "../../components/Icons/ArrowLeftIcon";
import { UpdatedIcon } from "../../components/Icons/UpdateIcon";
import { IconButton } from "../../components/IconButton";
import { TextButton } from "../../components/TextButton";
import { VNumberField } from "../../mvvm/NumberField/VNumberField";
import { Title } from "../../components/Title";

type props = {
	navigation: NavigationProp<{}>;
}

export const Upload: React.FC<props> = observer(({ navigation }) => {
	const { 
		start,
		saveData, 
		setReports, 
		saveSum, 
		dataField, 
		sumField,
		isPending,
		dataFormIsValid,
		sumFormIsValid,
	} = upload;

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
					<IconButton onPress={() => navigation?.navigate('Home')}>
						<ArrowLeftIcon />
					</IconButton>
					<IconButton onPress={() => start(navigation)}>
						<UpdatedIcon />
					</IconButton>
					<View style={styles.empty} />
				</View>
			</Header>
			<PageContainer>
				<View>
					<Container>
						<Title>Отчёты:</Title>
					</Container>
					<Container>
						<VTextField style={styles.text} model={dataField}/>
					</Container>
					<Container>
						<TextButton title="Сохранить" onPress={saveData} disabled={!dataFormIsValid} />
					</Container>
					<Container>
						<TextButton color="red" title="Перезаписать" onPress={setReports} disabled={!dataFormIsValid} />
					</Container>
					<Container>
						<Title>Начальный баланс:</Title>
					</Container>
					<Container>
						<VNumberField style={styles.text} model={sumField}/>
					</Container>
					<Container>
						<TextButton title="Сохранить" onPress={saveSum} disabled={!sumFormIsValid} />
					</Container>
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
		width: 50,
	},
	text: {
		width: '100%',
	},
});