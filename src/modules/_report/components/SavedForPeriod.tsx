import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { report } from '../models';
import { Title } from '../../../components/Title';

export const SavedForPeriod: React.FC = observer(() => {
	const { 
		savedForPeriod
	} = report;

  return (
    <View style={styles.container}>
			<Title style={{ color: '#FFF', }}>{`Отложено за период: ${savedForPeriod}`}</Title>
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
		width: '100%',
  },
});
