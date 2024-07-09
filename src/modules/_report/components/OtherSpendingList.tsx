import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { OtherSpendingItem } from './OtherSpendingItem';
import { StyleSheet, Text, View } from 'react-native';

export const OtherSpendingList: React.FC = observer(() => {
	const { 
		otherSpending,
	} = report;

	let sum = 0;

	if (!otherSpending.length) {
		return <Text>Список пуст</Text>
	}

  return (
		<View style={styles.container}>
			{otherSpending.map((item) => {
				sum = Number((sum + item.value).toFixed(2))
				return <OtherSpendingItem item={item} />
			})}
    </View>
  );
})

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 5,
		paddingBottom: 150,
	},
});