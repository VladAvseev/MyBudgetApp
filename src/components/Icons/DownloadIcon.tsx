import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';

export const DownloadIcon: React.FC = observer(()  => {
  return (
		<View style={styles.icon}>
			<View style={styles.line1} />
			<View style={styles.line2} />
			<View style={styles.line3} />
			<View style={styles.line4} />
			<View style={styles.line5} />
		</View>
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
		backgroundColor: '#FFF',
	},
	line2: {
		position: 'absolute',
		top: 8,
		width: 30,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#FFF',
	},
	line3: {
		position: 'absolute',
		top: 16,
		left: 14,
		width: 2,
		height: 12,
		borderRadius: 5,
		backgroundColor: '#FFF',
	},
	line4: {
		position: 'absolute',
		top: 24,
		left: 9,
		width: 8,
		height: 2,
		borderRadius: 5,
		backgroundColor: '#FFF',
		transform: 'rotate(45deg)',
	},
	line5: {
		position: 'absolute',
		top: 24,
		right: 9,
		width: 8,
		height: 2,
		borderRadius: 5,
		backgroundColor: '#FFF',
		transform: 'rotate(-45deg)',
	},
});
