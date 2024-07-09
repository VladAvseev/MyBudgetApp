import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VNumberField } from '../../../mvvm/NumberField/VNumberField';
import { Label } from '../../../components/Label';


export const DailyBudget: React.FC = observer(() => {
	const { dailyBudget } = reportConfig;

  return (
    <View style={styles.container}>
			<Label>Ежедневный бюджет</Label>
			<VNumberField style={styles.input} model={dailyBudget} />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
    backgroundColor: 'transparent',
  },
	input: {
		width: '100%',
	}
});
