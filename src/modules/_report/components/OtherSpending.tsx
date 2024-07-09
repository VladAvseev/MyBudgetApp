import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { Label } from '../../../components/Label';
import { ScrollView, StyleSheet, View } from 'react-native';
import { OtherSpendingForm } from './OtherSpendingForm';
import { OtherSpendingList } from './OtherSpendingList';
import { PageContainer } from '../../../components/PageContainer';

export const OtherSpending: React.FC = observer(() => {
	const {  
		otherSpendingSum,
	} = report;

  return (
		<View style={styles.container}>	
			<Label>{`Всего: ${otherSpendingSum.toFixed(2)}`}</Label>
			<OtherSpendingForm />
			<ScrollView>
				<OtherSpendingList />
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
