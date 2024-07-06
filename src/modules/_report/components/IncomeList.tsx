import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { IncomeItem } from './IncomeItem';
import { Label } from '../../../components/Label';

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
			<Label>{`Итого: ${sum}`}</Label>
    </>
  );
})