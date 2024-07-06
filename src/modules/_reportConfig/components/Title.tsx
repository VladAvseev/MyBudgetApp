import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VTextField } from '../../../mvvm/TextField/VTextField';


export const Title: React.FC = observer(() => {
	const { title } = reportConfig;

  return (
    <View style={styles.container}>
			<Text style={styles.label}>Название</Text>
			<VTextField style={styles.input} model={title} />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
    backgroundColor: '#fff',
  },
	label: {
		fontSize: 16,
		fontWeight: 'bold',
	},
	input: {
		width: '100%',
	},
});
