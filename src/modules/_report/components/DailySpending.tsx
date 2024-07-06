import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { VMNumberField } from '../../../mvvm/NumberField/VMNumberField';

export const DailySpending: React.FC = observer(() => {
	const { 
		periodStart, 
		periodEnd, 
		dailyBudget,
		dailySpending, 
		addDailySpending, 
		dailySpendingForm: { 
			isPending, 
			field 
		},
		setEditDailySpending,
	} = report;

	let sum = 0;

  return (
    <View style={styles.container}>
			<Text style={styles.title}>Ежедневные расходы:</Text>
			{dailySpending.map((item, index) => {
				const date = new Date(periodStart.getTime());
				date.setDate(periodStart.getDate() + index);
				const currentSumm = Number((sum + item.value).toFixed(2));
				sum = currentSumm;

				if (item.isEdit) {
					const fieldVM = VMNumberField.create({ placeholder: 'Сумма' });
					return (
						<View key={item.id} style={styles.spaceBeetwen}>
								<Text>{date.toLocaleDateString()}</Text>
								<VTextField model={fieldVM}/>
								{
									item.value.toString() !== fieldVM.value 
									?
									<Button title='Сохранить' onPress={() => setEditDailySpending(item.id, false)} />
									:
									<Button title='Отменить' onPress={() => setEditDailySpending(item.id, false)} />
									
								}
						</View>
					)
				}

				return (
					<View key={item.id} style={styles.spaceBeetwen}>
						<View style={styles.row}>
							<Text>{date.toLocaleDateString()}</Text>
							<Text>{` | `}</Text>
							<Text>{item.value}</Text>
							<Text>{` | `}</Text>
							<Text>{currentSumm}/{dailyBudget * (index + 1)}</Text>
							<Text>{` | `}</Text>
							<Text>{(dailyBudget * (index + 1) - currentSumm).toFixed(2)}</Text>
						</View>
						<Button title='Изм' onPress={() => setEditDailySpending(item.id, true)} />
					</View>
			)})}
			<Text style={styles.label}>{`Итого: ${sum} | ${(dailyBudget * dailySpending.length - sum).toFixed(2)}`}</Text>
			{
				(() => {
					const date = new Date(periodStart);
					return periodEnd.getTime() >= date.setDate(periodStart.getDate() + dailySpending.length)
				})()
					? 
						isPending
							? (
								<View style={styles.loadContainer}>
								<ActivityIndicator />
							</View>
							)
							: (
								<View style={styles.form}>
									<VNumberField model={field}/>
									<Button title='Добавить' onPress={addDailySpending}/>
								</View>
							)
					:
						null
			}
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
    backgroundColor: '#fff',
  },
	loadContainer: {
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	spaceBeetwen: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	label: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	form: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	}
});
