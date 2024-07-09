import { observer } from "mobx-react-lite";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { download } from "./models";
import { Header } from "../../components/Header";
import { Container } from "../../components/Container";
import { PageContainer } from "../../components/PageContainer";
import { PendingPage } from "../../components/PendingPage";
import { VTextField } from "../../mvvm/TextField/VTextField";
import { IconButton } from "../../components/IconButton";
import { ArrowLeftIcon } from "../../components/Icons/ArrowLeftIcon";
import { UpdatedIcon } from "../../components/Icons/UpdateIcon";
import { TextButton } from "../../components/TextButton";

type props = {
	navigation: NavigationProp<{}>;
}

export const Download: React.FC<props> = observer(({ navigation }) => {
	const { 
		start, 
		deleteReports, 
		reports, 
		isPending, 
		deleteField, 
		canDelete 
	} = download;

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
			<ScrollView>
				<PageContainer>
					<Container>
						<Text selectable>{reports}</Text>	
					</Container>
					<Container>
						<Container>
							<VTextField style={styles.deleteField} model={deleteField}/>
						</Container>
						<TextButton disabled={!canDelete} color={'red'} title="Удалить все очёты" onPress={deleteReports} />
					</Container>
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
		width: 50,
	},
	deleteField: {
		width: '100%',
	},
});