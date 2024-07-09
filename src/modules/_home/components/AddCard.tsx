import { StyleSheet, View, Text } from 'react-native';
import { Pressable } from 'react-native';
import { home } from '../models';

export const AddCard = () => {
	const { addCard } = home;

  return (
		<Pressable onPress={addCard}>
			<View style={styles.card}>
				<Text>Добавить</Text>
			</View>
		</Pressable>
  );
}

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
