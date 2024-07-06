import { StyleSheet, Text } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { OtherSpendingItem } from './OtherSpendingItem';

export const OtherSpendingList: React.FC = observer(() => {
	const { 
		otherSpending, 
	} = report;

	let sum = 0;

  return (
    <>
			{otherSpending.map((item) => {
				sum = Number((sum + item.value).toFixed(2))
				return <OtherSpendingItem item={item} />
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
