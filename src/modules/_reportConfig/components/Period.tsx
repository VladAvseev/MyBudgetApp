import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VDatePicker } from '../../../mvvm/DatePicker/VDatePicker';
import { Label } from '../../../components/Label';


export const Period: React.FC = observer(() => {
	const { periodStart, periodEnd } = reportConfig;

  return (
    <View style={styles.container}>
			<Label>Начало периода</Label>
			<VDatePicker model={periodStart} />
			<Label>Конец периода</Label>
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
});
