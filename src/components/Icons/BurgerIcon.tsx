import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';


export const BurgerIcon: React.FC = observer(()  => {
  return (
		<View style={styles.icon}>
			<View style={styles.line} />
			<View style={styles.line} />
			<View style={styles.line} />
		</View>
	)
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 30,
		paddingVertical: 2,
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
