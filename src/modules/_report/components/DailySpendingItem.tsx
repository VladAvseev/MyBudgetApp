import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { TDailySpending } from '../../../repository';
import { useLocalModel } from '../../../utils/useLocalModal';
import { useEffect } from 'react';
import { DailySpendingEditForm } from '../models/DailySpendingEditForm';
import { EditIcon } from '../../../components/Icons/EditIcon';
import { IconButton } from '../../../components/IconButton';
import { Label } from '../../../components/Label';
import { TextButton } from '../../../components/TextButton';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { CrossIcon } from '../../../components/Icons/CrossIcon';

type props = {
	index: number;
	item: TDailySpending & { isEdit: boolean };
	sum: number;
	date: Date;
}

export const DailySpendingItem: React.FC<props> = observer(({ index, item, sum, date }) => {
	const { 
		id,
		dailyBudget, 
		setEditDailySpending,
		updatePage,
	} = report;

	const form = useLocalModel(DailySpendingEditForm, { reportId: id, id: item.id });

	useEffect(() => {
		form.field.onChange(item.value.toString());

	}, []);

	const saveHandler = async () => {
		await form.save();
		setEditDailySpending(item.id, false);
		updatePage();
	}
	
	if (item.isEdit) {
		return (
			<View key={item.id} style={{ ...styles.container, ...styles.editBack }}>
				<Text>{date.toLocaleDateString()}</Text>
				<VNumberField model={form.field}/>
				{
					item.value.toString() !== form.field.value 
					?
					<TextButton title='Сохранить' onPress={saveHandler} />
					:
					<TextButton title='Отменить' onPress={() => setEditDailySpending(item.id, false)} />
				}
			</View>
		)
	}

	return (
		<View 
			key={item.id} 
			style={{ ...styles.container, ...(item.value <= dailyBudget ? styles.green : styles.red) }}
		>
			<View style={styles.info}>
				<View style={styles.cashInfo}>
					<Label>{item.value}</Label>
					<Label>{`(${sum}/${dailyBudget * (index + 1)})`}</Label>
					<View style={styles.flexRow}>
						{
							Number((dailyBudget * (index + 1) - sum).toFixed(2)) !== 0 
							? 
								<View style={Number((dailyBudget * (index + 1) - sum).toFixed(2)) > 0 ? styles.arrowTop : styles.arrowBotom } /> 
							: 
								null
						}
						<Label>{(Math.abs(dailyBudget * (index + 1) - sum)).toFixed(2)}</Label>
					</View>
				</View>
				<Text>{date.toLocaleDateString()}</Text>
			</View>
			<IconButton onPress={() => setEditDailySpending(item.id, true)} width={30} height={30}>
				<EditIcon />
			</IconButton>
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
	},
	editBack: {
		backgroundColor: 'rgba(255, 255, 255, 1)',
	},
	red: {
		backgroundColor: 'rgba(255, 0, 0, 0.15)',
	},
	green:{
		backgroundColor: 'rgba(0, 255, 0, 0.15)',
	},
	info: {
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	cashInfo: {
		height: 24,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 10,

	},
	flexRow: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	arrowBotom: {
		marginTop: 8,
		width: 8,
		height: 8,
		borderTopWidth: 8,
		borderRightWidth: 8,
		borderBottomWidth: 8,
		borderLeftWidth: 8,
		borderTopColor: 'red',
		borderRightColor: 'transparent',
		borderBottomColor: 'transparent',
		borderLeftColor: 'transparent',
	},
	arrowTop: {
		marginBottom: 8,
		width: 8,
		height: 8,
		borderTopWidth: 8,
		borderRightWidth: 6,
		borderBottomWidth: 8,
		borderLeftWidth: 6,
		borderTopColor: 'transparent',
		borderRightColor: 'transparent',
		borderBottomColor: 'green',
		borderLeftColor: 'transparent',
	}
});
