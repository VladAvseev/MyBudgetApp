import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { DailySpendingForm } from './DailySpendingForm';
import { DailySpendingList } from './DailySpendingList';
import { Label } from '../../../components/Label';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Title } from '../../../components/Title';

export const DailySpending: React.FC = observer(() => {
	const {  
		dailySpending, 
		dailySpendingSum,
		dailyBudget,
	} = report;

  return (
		<>
			<View style={styles.container}>
				<Label>{`Всего: ${dailySpendingSum.toFixed(2)} | ${(dailyBudget * dailySpending.length - dailySpendingSum).toFixed(2)}`}</Label>
				<DailySpendingForm />
			</View>
			<ScrollView>
				<View style={styles.container}>
					<DailySpendingList />
				</View>
			</ScrollView>
		</>
  );
});

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 10,
		padding: 10,
	},
	tab: {
		width: '100%',
		backgroundColor: 'rgb(33, 150, 243)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
	},
	tabTitle: {
		color: '#FFF',
	}
});
