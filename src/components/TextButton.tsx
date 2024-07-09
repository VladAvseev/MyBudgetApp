import { Button, Pressable, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ArrowRightIcon } from './Icons/ArrowRightIcon';
import { ReactNode } from 'react';

type props = {
	title: string;
	onPress: () => void;
	disabled?: boolean;
	color?: string;
}

export const TextButton: React.FC<props> = observer(({ title, onPress, disabled, color })  => {
  return (
		<View style={styles.container}>
			<Button title={title} onPress={onPress} disabled={disabled} color={color} />
		</View>
	)
})

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
		overflow: 'hidden',
	}
});
