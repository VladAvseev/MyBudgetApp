import { Pressable, StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

type props = {
	onPress: () => void;
	color?: string;
	disabled?: boolean;
}

export const BurgerButton: React.FC<props> = observer(({ onPress, disabled })  => {
  return (
		<Pressable style={styles.icon} onPress={onPress} disabled={disabled}>
			<View style={styles.line} />
				<View style={styles.line} />
				<View style={styles.line} />
		</Pressable>
	)
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		paddingVertical: 3,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line: {
		width: 30,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#000',
	},
});
