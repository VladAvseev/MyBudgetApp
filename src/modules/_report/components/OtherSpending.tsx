import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { OtherSpendingList } from './OtherSpendingList';
import { OtherSpendingForm } from './OtherSpendingForm';

export const OtherSpending: React.FC = observer(() => {
  return (
    <View style={styles.container}>
			<Text style={styles.title}>Остальные расходы:</Text>
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
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},

});
