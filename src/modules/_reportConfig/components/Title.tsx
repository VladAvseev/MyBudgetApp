import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { Label } from '../../../components/Label';


export const Title: React.FC = observer(() => {
	const { title } = reportConfig;

  return (
    <View style={styles.container}>
			<Label>Название</Label>
			<VTextField style={styles.input} model={title} />
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
		gap: 10,
    backgroundColor: 'transparent',
  },
	input: {
		width: '100%',
	},
});
