import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { OtherSpendingItem } from './OtherSpendingItem';
import { Text } from 'react-native';

export const OtherSpendingList: React.FC = observer(() => {
	const { 
		otherSpending,
	} = report;

	let sum = 0;

	if (!otherSpending.length) {
		return <Text>Список пуст</Text>
	}

  return (
    <>
			{otherSpending.map((item) => {
				sum = Number((sum + item.value).toFixed(2))
				return <OtherSpendingItem item={item} />
			})}
    </>
  );
})
