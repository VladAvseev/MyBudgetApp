import { Pressable, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

type props = {
	onPress: () => void;
	color?: string;
	disabled?: boolean;
}

export const CrossButton: React.FC<props> = observer(({ onPress, color, disabled })  => {
  return (
		<Pressable style={styles.container} onPress={onPress} disabled={disabled}>
			<View style={styles.line1} />
			<View style={styles.line2} />
		</Pressable>
	)
})

const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,
		overflow: 'hidden',
		position: 'relative',
	},
	line1: {
		position: 'absolute',
		left: '50%',
		top: '0%',
		width: 4,
		height: 30,
		backgroundColor: 'red',
		borderRadius: 2,
		transform: 'rotate(45deg)'
	},
	line2: {
		position: 'absolute',
		left: '50%',
		top: '0%',
		width: 4,
		height: 30,
		borderRadius: 2,
		backgroundColor: 'red',
		transform: 'rotate(-45deg)'
	},
});
