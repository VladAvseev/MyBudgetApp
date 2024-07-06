import { StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { IncomeItem } from './IncomeItem';

export const IncomeList: React.FC = observer(() => {
	const { 
		income, 
	} = report;

	let sum = 0;

  return (
    <>
			{income.map((item) => {
				sum = Number((sum + item.value).toFixed(2))
				return <IncomeItem item={item} />
			})}
			<Text style={styles.label}>{`Итого: ${sum}`}</Text>
    </>
  );
})

const styles = StyleSheet.create({
	label: {
		fontSize: 16,
		fontWeight: 'bold',
	},
});
