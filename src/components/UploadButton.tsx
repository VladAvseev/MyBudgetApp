import { Pressable, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

type props = {
	onPress: () => void;
	color?: string;
	disabled?: boolean;
}

export const UploadButton: React.FC<props> = observer(({ onPress, disabled })  => {
  return (
		<Pressable style={styles.icon} onPress={onPress} disabled={disabled}>
			<View style={styles.line1} />
			<View style={styles.line2} />
			<View style={styles.line3} />
			<View style={styles.line4} />
			<View style={styles.line5} />
		</Pressable>
	)
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		position: 'relative',
	},
	line1: {
		position: 'absolute',
		top: 0,
		width: 30,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#000',
	},
	line2: {
		position: 'absolute',
		top: 8,
		width: 30,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#000',
	},
	line3: {
		position: 'absolute',
		top: 18,
		left: 14,
		width: 2,
		height: 10,
		borderRadius: 5,
		backgroundColor: '#000',
	},
	line4: {
		position: 'absolute',
		top: 18,
		left: 9,
		width: 8,
		height: 2,
		borderRadius: 5,
		backgroundColor: '#000',
		transform: 'rotate(-45deg)',
	},
	line5: {
		position: 'absolute',
		top: 18,
		right: 9,
		width: 8,
		height: 2,
		borderRadius: 5,
		backgroundColor: '#000',
		transform: 'rotate(45deg)',
	},
});
