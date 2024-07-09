import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { DailySpendingForm } from './DailySpendingForm';
import { DailySpendingList } from './DailySpendingList';
import { Label } from '../../../components/Label';
import { ScrollView, StyleSheet, View } from 'react-native';

export const DailySpending: React.FC = observer(() => {
	const {  
		dailySpending, 
		dailySpendingSum,
		dailyBudget,
	} = report;

  return (
		<View style={styles.container}>	
			<Label>{`Всего: ${dailySpendingSum.toFixed(2)} | ${(dailyBudget * dailySpending.length - dailySpendingSum).toFixed(2)}`}</Label>
			<DailySpendingForm />
			<ScrollView>
				<DailySpendingList />
			</ScrollView>
		</View>
  );
});

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 10,
		padding: 10,
	},
});
