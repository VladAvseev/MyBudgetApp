import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { BackButton } from './BackButton';

export const Header: React.FC = observer(()  => {
  return (
			<View style={styles.container}>
				<BackButton />
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
