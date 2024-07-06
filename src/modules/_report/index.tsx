import { NavigationProp, RouteProp } from '@react-navigation/native';
import { useEffect } from 'react';
import { Button, ScrollView, StyleSheet, View } from 'react-native';
import { report } from './models';
import { observer } from 'mobx-react-lite';
import { DailySpending } from './components/DailySpending';
import { OtherSpending } from './components/OtherSpending';
import { Income } from './components/Income';
import { SavedForPeriod } from './components/SavedForPeriod';
import { Header } from '../../components/Header';
import { PageContainer } from '../../components/PageContainer';
import { Container } from '../../components/Container';
import { PendingPage } from '../../components/PendingPage';
import { Title } from '../../components/Title';
import { ArrowLeftButton } from '../../components/ArrowLeftButton';
import { BurgerButton } from '../../components/BurgerButton';
import { UpdatedButton } from '../../components/UpdateButton';

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
					<ArrowLeftButton onPress={() => navigation?.navigate('Home')} />
					<UpdatedButton onPress={updatePage} />
					<BurgerButton onPress={() => navigation?.navigate('ReportConfig', { id: id })} />
				</View>
			</Header>
		<ScrollView>
			<PageContainer>
				<View style={styles.container}>
					<Container>
						<Title>{title}</Title>
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
