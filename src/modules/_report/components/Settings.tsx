import { Pressable, StyleSheet, View } from 'react-native';
import { report } from '../models';
import { observer } from 'mobx-react-lite';

export const Settings: React.FC = observer(()  => {
	const {
		navigation, 
		id
	} = report;

  return (
		<Pressable onPress={() => navigation?.navigate('ReportConfig', { id: id })}>
			<View style={styles.icon}>
				<View style={styles.dot} />
				<View style={styles.dot} />
				<View style={styles.dot} />
			</View>
		</Pressable>
  );
})

const styles = StyleSheet.create({
	icon: {
		width: 30,
		height: 20,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dot: {
		width: 30,
		height: 4,
		borderRadius: 5,
		backgroundColor: '#000',
	},
});
