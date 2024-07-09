import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { IncomeItem } from './IncomeItem';
import { Text } from 'react-native';

export const IncomeList: React.FC = observer(() => {
	const { 
		income, 
	} = report;

	let sum = 0;

	if (!income.length) {
		return <Text>Список пуст</Text>
	}

  return (
    <>
			{income.map((item) => {
				sum = Number((sum + item.value).toFixed(2))
				return <IncomeItem item={item} />
			})}
    </>
  );
})