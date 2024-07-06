import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

type props = {
	children?: ReactNode,
}

export const PageContainer: React.FC<props> = observer(({ children })  => {
  return (
			<View style={styles.container}>
				{children}
			</View>
  );
})

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 20,
		backgroundColor: '#FFF',
	},
});
