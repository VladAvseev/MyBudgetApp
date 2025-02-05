import { StyleSheet, View, Text } from 'react-native';
import { Pressable } from 'react-native';
import { home, ICard } from '../models';
import { observer } from 'mobx-react-lite';

type props = {
	card: ICard;
}

export const Card: React.FC<props> = observer(({ card }) => {
	const { navigation } = home;
  return (
		<Pressable accessibilityHint="Navigates to the previous screen" onPress={() => navigation?.navigate('Report', { id: card.id })}>
			<View style={styles.card}>
				<Text>{card.title}</Text>
			</View>
		</Pressable>
  );
})

const styles = StyleSheet.create({
	card: {
		width: 150,
		height: 150,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF',
	}
});
