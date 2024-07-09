import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

export const CrossIcon: React.FC = observer(()  => {
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
