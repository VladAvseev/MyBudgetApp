import { StyleSheet, View } from 'react-native';
import { home } from '../models';
import { Card } from './Card';
import { AddCard } from './AddCard';
import { observer } from 'mobx-react-lite';

export const CardList: React.FC = observer(() => {
	const { cards } = home;
  return (
    <View style={styles.list}>
			{cards.map((card) => <Card key={card.id} card={card} />)}
			<AddCard />
    </View>
  );
})

const styles = StyleSheet.create({
	list: {
		width: '100%',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-around',
		rowGap: 10,
		backgroundColor: '#fff',
	},
});
