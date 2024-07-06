import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { OtherSpendingItem } from './OtherSpendingItem';
import { Label } from '../../../components/Label';

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
			<Label>{`Итого: ${sum}`}</Label>
    </>
  );
})
