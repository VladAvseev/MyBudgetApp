import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { VTextField } from '../../../mvvm/TextField/VTextField';

export const OtherSpending: React.FC = observer(() => {
	const { 
		otherSpending, 
		addOtherSpending, 
		otherSpendingForm: { 
			isPending, 
			field,
			title,
		} 
	} = report;

	let sum = 0;

  return (
    <View style={styles.container}>
			<Text style={styles.title}>Остальные расходы:</Text>
			{otherSpending.map((item) => {
				sum = Number((sum + item.value).toFixed(2))
				return (
				<View key={item.id} style={styles.row}>
					<Text>{item.value}</Text>
					<Text>{` - `}</Text>
					<Text>{item.title}</Text>
				</View>
			)})}
			<Text style={styles.label}>{`Итого: ${sum}`}</Text>
			{
				isPending
					? (
						<View style={styles.loadContainer}>
						<ActivityIndicator />
					</View>
					)
					: (
						<View style={styles.form}>
							<VNumberField model={field}/>
							<VTextField model={title} />
							<Button title='Добавить' onPress={addOtherSpending}/>
						</View>
					)
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
