import { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';

type props = {
	children: ReactNode;
	style?: any;
}

export const Title: React.FC<props> = ({ children, style }) => {
	return (
		<Text style={{ ...styles.main, ...style }}>
			{children}
		</Text>
	)
}

const styles = StyleSheet.create({
	main: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
