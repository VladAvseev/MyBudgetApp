import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

export const ArrowBottomIcon: React.FC = observer(()  => {
  return (
		<View style={styles.icon}>
			<View style={styles.line1} />
			<View style={styles.line2} />
		</View>
	)
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		paddingHorizontal: 6,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line1: {
		width: 4,
		height: 20,
		borderRadius: 5,
		backgroundColor: '#FFF',
		transform: 'rotate(-60deg)',
	},
	line2: {
		width: 4,
		height: 20,
		borderRadius: 5,
		backgroundColor: '#FFF',
		transform: 'rotate(60deg)',
	},
});
