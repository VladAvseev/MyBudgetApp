import { Pressable, StyleSheet, View } from 'react-native';
import { report } from '../models';
import { observer } from 'mobx-react-lite';
import { Title } from './Title';
import { Settings } from './Settings';
import { BackButton } from './BackButton';

export const Header: React.FC = observer(()  => {
	const { 
		id
	} = report;

  return (
			<View style={styles.container}>
				<BackButton />
				<Settings />
			</View>
  );
})

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
});
