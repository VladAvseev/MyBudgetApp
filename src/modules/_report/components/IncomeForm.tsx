import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { VTextField } from '../../../mvvm/TextField/VTextField';

export const IncomeForm: React.FC = observer(() => {
	const { 
		addIncome, 
		incomeForm: { 
			isPending, 
			field,
			title,
		} 
	} = report;

  if (isPending) {
		return (
			<View style={styles.loadContainer}>
				<ActivityIndicator />
			</View>
		)
	}

	return (
		<View style={styles.form}>
			<VNumberField model={field}/>
			<VTextField model={title} />
			<Button title='Добавить' onPress={addIncome}/>
		</View>
	)
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
