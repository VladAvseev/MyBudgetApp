import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { TextButton } from '../../../components/TextButton';

export const DailySpendingForm: React.FC = observer(() => {
	const { 
		periodStart, 
		periodEnd, 
		dailySpending, 
		addDailySpending, 
		dailySpendingForm: { 
			isPending, 
			field,
			isValid,
		},
	} = report;

	if ((() => {
		const date = new Date(periodStart);
		return periodEnd.getTime() >= date.setDate(periodStart.getDate() + dailySpending.length)
	})()) {
		if (isPending) {
			return (
				<View style={styles.loadContainer}>
					<ActivityIndicator />
				</View>
			)
		} else {
			return (
				<View style={styles.form}>
					<VNumberField model={field}/>
					<TextButton title='Добавить' onPress={addDailySpending} disabled={!isValid} />
				</View>
			)
		}
	}
})

const styles = StyleSheet.create({
	loadContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	form: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	}
});
