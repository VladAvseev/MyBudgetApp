import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
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
import { SceneMap, TabView } from 'react-native-tab-view';
import { DailySpending } from './components/DailySpending';
import { OtherSpending } from './components/OtherSpending';
import { Income } from './components/Income';

const renderScene = SceneMap({
  first: DailySpending,
  second: OtherSpending,
  third: Income,
});

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

	const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Ежедневные расходы' },
    { key: 'second', title: 'Остальные расходы' },
    { key: 'third', title: 'Доходы' },
  ]);

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
			<PageContainer style={{ paddingBottom: 20, backgroundColor: 'rgb(33, 150, 243)'}}>
				<Title style={{ color: '#FFF' }}>{title}</Title>
				<SavedForPeriod />
			</PageContainer>
			{/* <TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/> */}
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
