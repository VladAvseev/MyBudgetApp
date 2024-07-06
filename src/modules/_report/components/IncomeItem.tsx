import { Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { TIncome, TOtherSpending } from '../../../repository';
import { report } from '../models';
import { useLocalModel } from '../../../utils/useLocalModal';
import { useEffect } from 'react';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { IncomeEditForm } from '../models/IncomeEditForm';
import { CrossButton } from '../../../components/CrossButton';
import { EditButton } from '../../../components/EditButton';

type props = {
	item: TIncome & { isEdit: boolean };
}

export const IncomeItem: React.FC<props> = observer(({ item }) => {
	const { 
		id,
		setIsPending, 
		setEditIncome,
		updatePage,
	} = report;

	const form = useLocalModel(IncomeEditForm, { reportId: id, id: item.id });

	useEffect(() => {
		form.field.onChange(item.value.toString());
		form.title.setValue(item.title);
	}, []);

	const saveHandler = async () => {
		setIsPending(true);
		await form.save();
		setEditIncome(item.id, false);
		updatePage();	
	}

	const deleteHandler = async () => {
		setIsPending(true);
		await form.delete();
		setEditIncome(item.id, false);
		updatePage();	
	}
	
	if (item.isEdit) {
		return (
			<View key={item.id} style={styles.container}>
					<VNumberField model={form.field}/>
					<VTextField model={form.title}/>
					{
						item.value.toString() !== form.field.value 
						?
						<Button title='Сохранить' onPress={saveHandler} />
						:
						<Button title='Отменить' onPress={() => setEditIncome(item.id, false)} />
						
					}
			</View>
		)
	}

  return (
		<View key={item.id} style={styles.container}>
			<View style={styles.row}>
				<Text>{item.value}</Text>
				<Text>{` - `}</Text>
				<Text>{item.title}</Text>
			</View>
			<View style={styles.actions}>
				<EditButton onPress={() => setEditIncome(item.id, true)} />
				<CrossButton onPress={deleteHandler}/>
			</View>
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
	actions: {
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,
	}
});
