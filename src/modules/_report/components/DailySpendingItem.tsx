import { Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { TDailySpending } from '../../../repository';
import { useLocalModel } from '../../../utils/useLocalModal';
import { useEffect } from 'react';
import { DailySpendingEditForm } from '../models/DailySpendingEditForm';
import { EditButton } from '../../../components/EditButton';

type props = {
	index: number;
	item: TDailySpending & { isEdit: boolean };
	sum: number;
	date: Date;
}

export const DailySpendingItem: React.FC<props> = observer(({ index, item, sum, date }) => {
	const { 
		id,
		setIsPending,
		dailyBudget, 
		setEditDailySpending,
	} = report;

	const form = useLocalModel(DailySpendingEditForm, { reportId: id, id: item.id });

	useEffect(() => {
		form.field.onChange(item.value.toString());
	}, []);

	const saveHandler = async () => {
		setIsPending(true);
		await form.save();
		setEditDailySpending(item.id, false);
		setIsPending(true);
	}
	
	if (item.isEdit) {
		return (
			<View key={item.id} style={styles.container}>
					<Text>{date.toLocaleDateString()}</Text>
					<VTextField model={form.field}/>
					{
						item.value.toString() !== form.field.value 
						?
						<Button title='Сохранить' onPress={saveHandler} />
						:
						<Button title='Отменить' onPress={() => setEditDailySpending(item.id, false)} />
						
					}
			</View>
		)
	}

	return (
		<View key={item.id} style={styles.container}>
			<View style={styles.row}>
				<Text>{date.toLocaleDateString()}</Text>
				<Text>{` | `}</Text>
				<Text>{item.value}</Text>
				<Text>{` | `}</Text>
				<Text>{sum}/{dailyBudget * (index + 1)}</Text>
				<Text>{` | `}</Text>
				<Text>{(dailyBudget * (index + 1) - sum).toFixed(2)}</Text>
			</View>
			<EditButton onPress={() => setEditDailySpending(item.id, true)} />
		</View>
	)
})

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
	},
});
