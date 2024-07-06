import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { DailySpendingList } from './DailySpendingList';
import { DailySpendingForm } from './DailySpendingForm';
import { Title } from '../../../components/Title';

export const DailySpending: React.FC = observer(() => {
  return (
    <View style={styles.container}>
			<Title>Ежедневные расходы:</Title>
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
});
