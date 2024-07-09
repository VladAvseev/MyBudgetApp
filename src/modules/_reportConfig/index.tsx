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
import { ArrowLeftIcon } from '../../components/Icons/ArrowLeftIcon';
import { UpdatedIcon } from '../../components/Icons/UpdateIcon';
import { IconButton } from '../../components/IconButton';

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
					<IconButton onPress={() => navigation?.navigate('Report', { id: id })}>
						<ArrowLeftIcon />
					</IconButton>
					<IconButton onPress={() => start(id, navigation)}>
						<UpdatedIcon />
					</IconButton>
						<View style={styles.empty} />
					</View>
			</Header>
			<ScrollView>
				<PageContainer style={styles.pageCotainer}>
					<Container>
						<Title />
					</Container>
					<Container>
						<Period />
					</Container>
					<Container>
						<DailyBudget />
					</Container>
					<Actions />
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
	pageCotainer: {
		paddingBottom: 0,
	},
	empty: {
		width: 50,
	},
  container: {
    flex: 1,
		gap: 10,
  },
});
