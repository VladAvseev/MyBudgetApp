import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { IncomeList } from './IncomeList';
import { IncomeForm } from './IncomeForm';
import { Title } from '../../../components/Title';

export const Income: React.FC = observer(() => {
  return (
    <View style={styles.container}>
			<Title>Доходы:</Title>
			<IncomeList />
			<IncomeForm />
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
