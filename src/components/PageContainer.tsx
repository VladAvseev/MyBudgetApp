import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ReactNode } from 'react';

type props = {
	children?: ReactNode,
	style?: any,
}

export const PageContainer: React.FC<props> = observer(({ children, style })  => {
  return (
			<View style={{ ...styles.container, ...style }}>
				{children}
			</View>
  );
})

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 20,
		paddingTop: 40,
		paddingBottom: 100,
		backgroundColor: 'rgb(230, 230, 230)',
	},
});
