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
		width: 180,
		height: 180,
		borderRadius: 20,
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
