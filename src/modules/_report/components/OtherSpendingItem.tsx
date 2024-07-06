import { Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { TOtherSpending } from '../../../repository';
import { report } from '../models';
import { useLocalModel } from '../../../utils/useLocalModal';
import { OtherSpendingEditForm } from '../models/OtherSpendingEditForm';
import { useEffect } from 'react';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { CrossButton } from '../../../components/CrossButton';
import { EditButton } from '../../../components/EditButton';

type props = {
	item: TOtherSpending & { isEdit: boolean };
}

export const OtherSpendingItem: React.FC<props> = observer(({ item }) => {
	const { 
		id,
		setIsPending, 
		setEditOtherSpending,
		updatePage,
	} = report;

	const form = useLocalModel(OtherSpendingEditForm, { reportId: id, id: item.id });

	useEffect(() => {
		form.field.onChange(item.value.toString());
		form.title.setValue(item.title);
	}, []);

	const saveHandler = async () => {
		setIsPending(true);
		await form.save();
		setEditOtherSpending(item.id, false);
		updatePage();	
	}

	const deleteHandler = async () => {
		setIsPending(true);
		await form.delete();
		setEditOtherSpending(item.id, false);
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
						<Button title='Отменить' onPress={() => setEditOtherSpending(item.id, false)} />
						
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
				<EditButton onPress={() => setEditOtherSpending(item.id, true)} />
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
