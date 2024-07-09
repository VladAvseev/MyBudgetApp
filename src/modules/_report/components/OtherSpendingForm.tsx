import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { TextButton } from '../../../components/TextButton';

export const OtherSpendingForm: React.FC = observer(() => {
	const { 
		addOtherSpending, 
		otherSpendingForm: { 
			isPending, 
			field,
			title,
			isValid,
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
			<TextButton title='Добавить' onPress={addOtherSpending} disabled={!isValid} />
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
