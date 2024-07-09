import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

export const ArrowLeftIcon: React.FC = observer(()  => {
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
		paddingVertical: 8,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	line1: {
		width: 20,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#FFF',
		transform: 'rotate(-30deg)',
	},
	line2: {
		width: 20,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#FFF',
		transform: 'rotate(30deg)',
	},
});
