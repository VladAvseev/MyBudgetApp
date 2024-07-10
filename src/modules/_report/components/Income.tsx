import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { Label } from '../../../components/Label';
import { ScrollView, StyleSheet, View } from 'react-native';
import { IncomeForm } from './IncomeForm';
import { IncomeList } from './IncomeList';

export const Income: React.FC = observer(() => {
	const {  
		incomeSum,
	} = report;

  return (
		<View style={styles.container}>	
			<Label>{`Всего: ${incomeSum.toFixed(2)}`}</Label>
			<IncomeForm />
			<ScrollView>
				<IncomeList />
			</ScrollView>
		</View>
  );
});

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 10,
		padding: 10,
	},
});
