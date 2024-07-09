import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { report } from './models';
import { observer } from 'mobx-react-lite';
import { SavedForPeriod } from './components/SavedForPeriod';
import { Header } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer';
import { PendingPage } from '../../components/PendingPage';
import { Title } from '../../components/Title';
import { ArrowLeftIcon } from '../../components/Icons/ArrowLeftIcon';
import { BurgerIcon } from '../../components/Icons/BurgerIcon';
import { UpdatedIcon } from '../../components/Icons/UpdateIcon';
import { IconButton } from '../../components/IconButton';
import { Form } from './components/Form';
import { DailySpendingList } from './components/DailySpendingList';
import { OtherSpendingList } from './components/OtherSpendingList';
import { IncomeList } from './components/IncomeList';

type props = {
	route: RouteProp<{}>;
	navigation: NavigationProp<{}>;
}

export const Report: React.FC<props> = observer(({ route, navigation }) => {
	const { id }= route.params;
	const {isPending, start, updatePage, title} = report;

	useEffect(() => {
		start(id, navigation);
	}, [])

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
					<IconButton onPress={updatePage}>
						<UpdatedIcon />
					</IconButton>
					<IconButton onPress={() => navigation?.navigate('ReportConfig', { id: id })}>
						<BurgerIcon />
					</IconButton>
				</View>
			</Header>
		<ScrollView>
			<PageContainer>
				<View style={styles.container}>
					<Form />
					<Title>Ежедневные расходы:</Title>
					<DailySpendingList />
					<Title>Остальные расходы:</Title>
					<OtherSpendingList />
					<Title>Доходы:</Title>
					<IncomeList />
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
		minHeight: 700,
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 10
  },
});
