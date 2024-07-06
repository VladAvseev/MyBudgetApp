import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';
import { report } from './models';
import { observer } from 'mobx-react-lite';
import { DailySpending } from './components/DailySpending';
import { OtherSpending } from './components/OtherSpending';
import { Income } from './components/Income';
import { SavedForPeriod } from './components/SavedForPeriod';
import { Title } from './components/Title';
import { Header } from '../../components/Header';
import { BackButton } from './components/BackButton';
import { PageContainer } from '../../components/PageContainer';
import { Container } from '../../components/Container';
import { Settings } from './components/Settings';

type props = {
	route: RouteProp<{}>;
	navigation: NavigationProp<{}>;
}

export const Report: React.FC<props> = observer(({ route, navigation }) => {
	const { id }= route.params;
	const {isPending, start} = report;

	useEffect(() => {
		start(id, navigation);
	}, [])

	if (isPending) {
		return (
			<View style={styles.container}>
				<ActivityIndicator />
			</View>
		)
	}

  return (
		<>
			<Header>
				<View style={styles.header}>
					<BackButton />
					<Settings />
				</View>
			</Header>
		<ScrollView>
			<PageContainer>
				<View style={styles.container}>
					<Container>
						<Title />
					</Container>
					<Container>
						<SavedForPeriod />
					</Container>
					<Container>
						<DailySpending />
					</Container>
					<Container>
						<OtherSpending />
					</Container>
					<Income />
				</View>
			</PageContainer>
		</ScrollView>
		</>
  );
})

const styles = StyleSheet.create({
	header: {
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
  container: {
		minHeight: 800,
  },
});
