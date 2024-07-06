import { StyleSheet, Text } from 'react-native';
import { report } from '../models';
import { observer } from 'mobx-react-lite';

export const Title: React.FC = observer(() => {
	const { 
		title
	} = report;

  return (
		<Text style={styles.titleText}>{title}</Text>
  );
})

const styles = StyleSheet.create({
	titleText: {
		width: '100%',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
