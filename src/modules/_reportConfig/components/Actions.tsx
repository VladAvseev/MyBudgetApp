import { Button, StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VTextField } from '../../../mvvm/TextField/VTextField';

export const Actions: React.FC = observer(() => {
	const { isEdit, onSave, onCancel, onDelete, deleteField, isDeleteButtonDisabled } = reportConfig;

  return (
    <View>
			{
				isEdit 
					? 
						<View style={styles.row}>
							<Button title='Сохранить' onPress={onSave} />
							<Button title='Отменить' onPress={onCancel} />
						</View>
					: <View style={styles.column}>
							<VTextField style={styles.delete} model={deleteField}/>
							<View style={styles.delete}>
								<Button 
									title='Удалить отчёт' 
									onPress={onDelete} color={'red'} 
									disabled={isDeleteButtonDisabled} 
								/>
							</View>
					 	</View>
			}
    </View>
  );
})

const styles = StyleSheet.create({
  row: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-around',
		gap: 10,
		backgroundColor: '#fff',
  },
  column: {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10,
		backgroundColor: '#fff',
  },
	delete: {
		width: '100%',
	}
});
