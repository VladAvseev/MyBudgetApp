import { Pressable, StyleSheet, View } from 'react-native';
import { reportConfig } from '../models';
import { observer } from 'mobx-react-lite';

export const BackButton: React.FC = observer(()  => {
	const {
		id,
		navigation, 
	} = reportConfig;

  return (
		<Pressable onPress={() => navigation?.navigate('Report', { id: id })}>
			<View style={styles.icon}>
				<View style={styles.line1} />
				<View style={styles.line2} />
			</View>
		</Pressable>
  );
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 14,
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
