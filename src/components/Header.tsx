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
		width: '100%',
		height: 70,
		padding: 10,
		paddingHorizontal: 20,
		backgroundColor: 'rgb(223, 223, 223)',
	},
	header: {
		width: '100%',
		height: 50,
	},
});
