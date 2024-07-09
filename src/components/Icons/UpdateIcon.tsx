import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

export const UpdatedIcon: React.FC = observer(()  => {
  return (
		<View style={styles.icon}>
			<View style={styles.circle} />
			<View style={styles.line1} />
			<View style={styles.line2} />
			<View style={styles.line3} />
		</View>
	)
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		position: 'relative',
	},
	circle: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 3,
		borderColor: '#000',
		backgroundColor: 'rgb(230, 230, 230)',
	},
	line1: {
		position: 'absolute',
		top: 12,
		right: -1,
		width: 10,
		height: 3,
		borderRadius: 5,
		backgroundColor: '#000',
		transform: 'rotate(55deg)',
	},
	line2: {
		position: 'absolute',
		top: 12,
		right: -5,
		width: 10,
		height: 3,
		borderRadius: 5,
		backgroundColor: '#000',
		transform: 'rotate(-55deg)',
	},
	line3: {
		position: 'absolute',
		top: 18,
		right: -1,
		width: 6,
		height: 4,
		backgroundColor: 'rgb(230, 230, 230)',
		// transform: 'rotate(-45deg)',
	},
});
