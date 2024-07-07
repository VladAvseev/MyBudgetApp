import { Pressable, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

type props = {
	onPress: () => void;
	color?: string;
	disabled?: boolean;
}

export const EditButton: React.FC<props> = observer(({ onPress, color, disabled })  => {
  return (
		<Pressable style={styles.container} onPress={onPress} disabled={disabled}>
			<View style={styles.line1} />
			<View style={styles.line2} />
			<View style={styles.line3} />
		</Pressable>
	)
})

const styles = StyleSheet.create({
	container: {
		width: 30,
		height: 30,

		position: 'relative',
		overflow: 'hidden',

		borderColor: 'rgb(33, 150, 243)',
		borderWidth: 2,
		borderRadius: 5,
	},
	line1: {
		position: 'absolute',
		left: 8,
		top: 3,

		width: 6,
		height: 24,
		backgroundColor: 'rgb(33, 150, 243)',
		borderEndEndRadius: 3,
		borderEndStartRadius: 3,
		transform: 'rotate(45deg)'
	},
	line2: {
		position: 'absolute',
		left: '0%',

		width: 5,
		height: 30,
		backgroundColor: '#FFF',
	},
	line3: {
		position: 'absolute',
		bottom: '0%',

		width: 30,
		height: 5,
		backgroundColor: '#FFF',
	},
});
