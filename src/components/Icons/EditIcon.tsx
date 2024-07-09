import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

export const EditIcon: React.FC = observer(()  => {
  return (
		<View style={styles.container}>
			<View style={styles.line1} />
			<View style={styles.line2} />
		</View>
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
		left: 10,
		top: 3,

		width: 6,
		height: 20,
		backgroundColor: 'rgb(33, 150, 243)',
		borderEndEndRadius: 3,
		borderEndStartRadius: 3,
		transform: 'rotate(45deg)'
	},
	line2: {
		position: 'absolute',
		left: 3,
		bottom: 3,
		width: 2.5,
		height: 2.5,

		borderTopColor: 'transparent',
		borderTopWidth: 2.5,
		borderRightColor: 'transparent',
		borderRightWidth: 2.5,
		borderBottomColor: 'rgb(33, 150, 243)',
		borderBottomWidth: 2.5,
		borderLeftColor: 'rgb(33, 150, 243)',
		borderLeftWidth: 2.5,
	},
});
