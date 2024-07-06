import { Pressable, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

type props = {
	onPress: () => void;
	color?: string;
	disabled?: boolean;
}

export const ArrowLeftButton: React.FC<props> = observer(({ onPress, disabled })  => {
  return (
		<Pressable style={styles.icon} onPress={onPress} disabled={disabled}>
			<View style={styles.line1} />
			<View style={styles.line2} />
		</Pressable>
	)
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 12,
		paddingLeft: 4,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line1: {
		width: 20,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#000',
		transform: 'rotate(-30deg)',
	},
	line2: {
		width: 20,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#000',
		transform: 'rotate(30deg)',
	},
});
