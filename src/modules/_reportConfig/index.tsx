import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { ActivityIndicator, Button, ScrollView, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from './models';
import { Title } from './components/Title';
import { Period } from './components/Period';
import { DailyBudget } from './components/DailyBudget';
import { Actions } from './components/Actions';
import { Header } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer';
import { Container } from '../../components/Container';
import { ArrowLeftButton } from '../../components/ArrowLeftButton';
import { UpdatedButton } from '../../components/UpdateButton';

type props = {
	route: RouteProp<{}>;
	navigation: NavigationProp<{}>
}

export const ReportConfig: React.FC<props> = observer(({ route, navigation }) => {
	const { id }= route.params;
	const { start, isPending } = reportConfig;

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
						<ArrowLeftButton onPress={() => navigation?.navigate('Report', { id: id })} />
						<UpdatedButton onPress={() => start(id, navigation)} />
						<View style={styles.empty} />
					</View>
			</Header>
			<ScrollView>
				<PageContainer>
					<View style={styles.main}>
						<View>
							<Container>
								<Title />
							</Container>
							<Container>
								<Period />
							</Container>
							<DailyBudget />
						</View>
						<Actions />
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
	empty: {
		width: 30,
	},
	main: {
		paddingBottom: 80,
		minHeight: 800,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
  container: {
    flex: 1,
		gap: 10,
    backgroundColor: '#fff',
  },
});
