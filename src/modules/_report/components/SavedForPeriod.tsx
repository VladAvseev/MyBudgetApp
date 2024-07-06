import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';

export const SavedForPeriod: React.FC = observer(() => {
	const { 
		savedForPeriod
	} = report;

  return (
    <View style={styles.container}>
			<Text style={styles.title}>{`Отложено за период: ${savedForPeriod}`}</Text>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
    backgroundColor: '#fff',
  },
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
