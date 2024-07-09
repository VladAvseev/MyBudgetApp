import { observer } from "mobx-react-lite";
import { CardList } from "./components/CardList"; 
import { Button, ScrollView, StyleSheet, View } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { home } from "./models";
import { Header } from "../../components/Header";
import { PageContainer } from "../../components/PageContainer";
import { PendingPage } from "../../components/PendingPage";
import { DownloadIcon } from "../../components/Icons/DownloadIcon";
import { UploadIcon } from "../../components/Icons/UploadIcon";
import { UpdatedIcon } from "../../components/Icons/UpdateIcon";
import { IconButton } from "../../components/IconButton";

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
					<IconButton onPress={() => navigation?.navigate('Download')}>
						<DownloadIcon />
					</IconButton>
					<IconButton onPress={() => start(navigation)}>
						<UpdatedIcon />
					</IconButton>
					<IconButton onPress={() => navigation?.navigate('Upload')}>
						<UploadIcon />
					</IconButton>
				</View>
			</Header>
			<ScrollView>
				<PageContainer>
					<CardList />
				</PageContainer>
			</ScrollView>
		</>
  );
});

const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	},
});