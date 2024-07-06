import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { OtherSpendingList } from './OtherSpendingList';
import { OtherSpendingForm } from './OtherSpendingForm';
import { Title } from '../../../components/Title';

export const OtherSpending: React.FC = observer(() => {
  return (
    <View style={styles.container}>
			<Title>Остальные расходы:</Title>
			<OtherSpendingList />
			<OtherSpendingForm />
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
