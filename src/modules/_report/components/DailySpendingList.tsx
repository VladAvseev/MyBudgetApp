import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { DailySpendingItem } from './DailySpendingItem';
import { StyleSheet, Text, View } from 'react-native';

export const DailySpendingList: React.FC = observer(() => {
	const { 
		periodStart, 
		dailySpending, 
	} = report;
	
	let sum = 0;

	if (!dailySpending.length) {
		return <Text>Список пуст</Text>
	}

  return (
    <View style={styles.container}>
			{dailySpending.map((item, index) => {
				const date = new Date(periodStart.getTime());
				date.setDate(periodStart.getDate() + index);
				const currentSumm = Number((sum + item.value).toFixed(2));
				sum = currentSumm;
				
				return <DailySpendingItem index={index} item={item} sum={currentSumm} date={date} />;
			})}
		</View>
  );
});

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 5,
		paddingBottom: 100,
	},
});