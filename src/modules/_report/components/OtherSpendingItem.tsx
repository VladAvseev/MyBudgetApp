import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { TOtherSpending } from '../../../repository';
import { report } from '../models';
import { useLocalModel } from '../../../utils/useLocalModal';
import { OtherSpendingEditForm } from '../models/OtherSpendingEditForm';
import { useEffect } from 'react';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { CrossIcon } from '../../../components/Icons/CrossIcon';
import { EditIcon } from '../../../components/Icons/EditIcon';
import { IconButton } from '../../../components/IconButton';
import { TextButton } from '../../../components/TextButton';
import { Label } from '../../../components/Label';

type props = {
	item: TOtherSpending & { isEdit: boolean };
}

export const OtherSpendingItem: React.FC<props> = observer(({ item }) => {
	const { 
		id,
		setEditOtherSpending,
		updatePage,
	} = report;

	const form = useLocalModel(OtherSpendingEditForm, { reportId: id, id: item.id });

	useEffect(() => {
		form.field.onChange(item.value.toString());
		form.title.setValue(item.title);
	}, []);

	const saveHandler = async () => {
		await form.save();
		setEditOtherSpending(item.id, false);
		updatePage();	
	}

	const deleteHandler = async () => {
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
						item.value.toString() !== form.field.value || item.title !== form.title.value
						?
						<TextButton title='Сохранить' onPress={saveHandler} />
						:
						<TextButton title='Отменить' onPress={() => setEditOtherSpending(item.id, false)} />
						
					}
			</View>
		)
	}

  return (
		<View key={item.id} style={styles.container}>
			<View >
				<Label>{item.value}</Label>
				<Text>{item.title}</Text>
			</View>
			<View style={styles.actions}>
				<IconButton onPress={() => setEditOtherSpending(item.id, true)} width={30} height={30}>
					<EditIcon />
				</IconButton>
				<IconButton onPress={deleteHandler} width={30} height={30}>
					<CrossIcon />
				</IconButton>
			</View>
		</View>
	)
})

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 5,
		borderRadius: 10,
		backgroundColor: 'rgba(255, 255, 255, 1)',
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
