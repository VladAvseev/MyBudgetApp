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

type props = {
	navigation: NavigationProp<{}>;
}

export const Upload: React.FC<props> = observer(({ navigation }) => {
	const { 
		start,
		save, 
		setReports, 
		field, 
		isPending,
		formIsValid,
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
				<View style={styles.main}>
					<Container>
						<VTextField style={styles.text} model={field}/>
					</Container>
					<Container>
						<TextButton title="Сохранить" onPress={save} disabled={!formIsValid} />
					</Container>
					<TextButton title="Перезаписать" onPress={setReports} disabled={!formIsValid} />
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
	main: {
		minHeight: 700,
	},
	text: {
		width: '100%',
	},
});