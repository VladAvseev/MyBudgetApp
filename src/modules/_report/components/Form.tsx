import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { DailySpendingList } from './DailySpendingList';
import { DailySpendingForm } from './DailySpendingForm';
import { Title } from '../../../components/Title';
import { report } from '../models';
import { Label } from '../../../components/Label';
import { OtherSpendingForm } from './OtherSpendingForm';
import { IncomeForm } from './IncomeForm';
import { SavedForPeriod } from './SavedForPeriod';

export const Form: React.FC = observer(() => {
	const {
		title,
		dailySpendingSum,
		dailyBudget,
		dailySpending,
		otherSpendingSum,
		incomeSum,
	} = report;

  return (
    <View style={styles.container}>
			<Title>{title}</Title>
			<SavedForPeriod />
			<View style={styles.block}>
				<Title>Ежедневные расходы:</Title>
				<Label>{`Всего: ${dailySpendingSum.toFixed(2)} | ${(dailyBudget * dailySpending.length - dailySpendingSum).toFixed(2)}`}</Label>
				<DailySpendingForm />
			</View>
			<View style={styles.block}>
				<Title>Остальные расходы:</Title>
				<Label>{`Всего: ${otherSpendingSum.toFixed(2)}`}</Label>
				<OtherSpendingForm />
			</View>
			<View style={styles.block}>
				<Title>Доходы:</Title>
				<Label>{`Всего: ${incomeSum}`}</Label>
				<IncomeForm />
			</View>
    </View>
  );
})

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 15,
		padding: 5,
		borderRadius: 10,
		backgroundColor: 'rgba(255, 255, 255, 1)',
	},
	block: {
		gap: 5,
	}
});
