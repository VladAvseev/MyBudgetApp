import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VDatePicker } from '../../../mvvm/DatePicker/VDatePicker';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';


export const DailyBudget: React.FC = observer(() => {
	const { dailyBudget } = reportConfig;

  return (
    <View style={styles.container}>
			<Text style={styles.label}>Ежедневный бюджет</Text>
			<VNumberField style={styles.input} model={dailyBudget} />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
    backgroundColor: '#fff',
  },
	label: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	input: {
		width: '100%',
	}
});
