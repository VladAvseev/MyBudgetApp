import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

type props = {
	children?: ReactNode,
}

export const Header: React.FC<props> = observer(({ children })  => {
  return (
			<View style={styles.container}>
				<View style={styles.header}>
					{children}
				</View>
			</View>
  );
})

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		zIndex: 1000,
		left: 0,
		bottom: 0,
		width: '100%',
		height: 70,
		padding: 10,
		paddingHorizontal: 20,
		backgroundColor: 'rgb(230, 230, 230)',
		borderTopWidth: 1,
	},
	header: {
		width: '100%',
		height: 50,
	},
});
