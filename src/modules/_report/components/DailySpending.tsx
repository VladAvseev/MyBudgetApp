import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { DailySpendingList } from './DailySpendingList';
import { DailySpendingForm } from './DailySpendingForm';

export const DailySpending: React.FC = observer(() => {
  return (
    <View style={styles.container}>
			<Text style={styles.title}>Ежедневные расходы:</Text>
			<DailySpendingList />
			<DailySpendingForm />
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
	spaceBeetwen: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
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
