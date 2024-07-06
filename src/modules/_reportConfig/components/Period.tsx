import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VDatePicker } from '../../../mvvm/DatePicker/VDatePicker';


export const Period: React.FC = observer(() => {
	const { periodStart, periodEnd } = reportConfig;

  return (
    <View style={styles.container}>
			<Text style={styles.label}>Начало периода</Text>
			<VDatePicker model={periodStart} />
			<Text style={styles.label}>Конец периода</Text>
			<VDatePicker model={periodEnd} />
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
	}
});
