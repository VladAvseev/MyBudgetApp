import { StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { DailySpendingItem } from './DailySpendingItem';

export const DailySpendingList: React.FC = observer(() => {
	const { 
		periodStart, 
		dailyBudget,
		dailySpending, 
	} = report;

	let sum = 0;

  return (
    <>
			{dailySpending.map((item, index) => {
				const date = new Date(periodStart.getTime());
				date.setDate(periodStart.getDate() + index);
				const currentSumm = Number((sum + item.value).toFixed(2));
				sum = currentSumm;
				
				return <DailySpendingItem index={index} item={item} sum={currentSumm} date={date} />;
			})}
			<Text style={styles.label}>{`Итого: ${sum} | ${(dailyBudget * dailySpending.length - sum).toFixed(2)}`}</Text>
		</>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
  },
	label: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
