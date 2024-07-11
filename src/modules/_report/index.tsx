import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
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
import { DailySpending } from './components/DailySpending';
import { OtherSpending } from './components/OtherSpending';
import { Income } from './components/Income';
import PagerView, { PagerViewOnPageSelectedEvent } from 'react-native-pager-view';
import { Label } from '../../components/Label';

type props = {
	route: RouteProp<{}>;
	navigation: NavigationProp<{}>;
}

export const Report: React.FC<props> = observer(({ route, navigation }) => {
	const { id }= route.params;
	const {setIsPending, isPending, start, updatePage, title} = report;
	const [tabIndex, setTabIndex] = useState(0);
	const pagerRef = useRef(null);

	useEffect(() => {
		start(id, navigation);
	}, [])

	const updatePageHandler = async () => {
		setIsPending(true);
		await updatePage();
		setIsPending(false);
	}

	const changePage = (index: number) => {
		pagerRef?.current.setPage(index);
		setTabIndex(index)
	}

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
					<IconButton onPress={updatePageHandler}>
						<UpdatedIcon />
					</IconButton>
					<IconButton onPress={() => navigation?.navigate('ReportConfig', { id: id })}>
						<BurgerIcon />
					</IconButton>
				</View>
			</Header>
			<PageContainer style={{ paddingBottom: 0, backgroundColor: 'rgb(33, 150, 243)'}}>
				<Title style={{ color: '#FFF' }}>{title}</Title>
				<SavedForPeriod />
			</PageContainer>
			<View style={styles.tabBar}>
				<Pressable style={styles.tabItem} onPress={() => changePage(0)}>
					<Label style={styles.tabTitle}>Ежедневные расходы</Label>
				</Pressable>
				<Pressable style={styles.tabItem} onPress={() => changePage(1)}>
					<Label style={styles.tabTitle}>Остальные расходы</Label>
				</Pressable>
				<Pressable style={styles.tabItem} onPress={() => changePage(2)}>
					<Label style={styles.tabTitle}>Доходы</Label>
				</Pressable>
			</View>
			<View style={{ ...styles.tabSelectedIndicator, left: `${tabIndex * 33.33}%` }} />
			<PagerView ref={pagerRef} onPageSelected={(e: PagerViewOnPageSelectedEvent) =>  setTabIndex(e.nativeEvent.position)} style={{ flex: 1 }} initialPage={0} useNext={false}>
				<DailySpending key={0} />
				<OtherSpending key={1} />
				<Income key={2} />
			</PagerView>
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
	tabBar: {
		width: '100%',
		backgroundColor: 'rgb(33, 150, 243)',
		flexDirection: 'row',
		alignItems: 'center',
	},
	tabItem: {
		width: '33.33%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 10,
	},
	tabTitle: {
		color: '#FFF',
	},
	tabSelectedIndicator: {
		width: '33.33%',
		height: 3,
		borderBottomLeftRadius: 3,
		borderBottomRightRadius: 3,
		backgroundColor: '#000',
	}
});
