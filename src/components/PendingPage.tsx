import { ActivityIndicator, StyleSheet, View } from 'react-native';

export const PendingPage: React.FC = () => {
	return (
		<View style={styles.pending}>
			<ActivityIndicator />
		</View>
	)
}

const styles = StyleSheet.create({
	pending: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFF',
	},
});
