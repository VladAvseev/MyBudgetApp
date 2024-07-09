import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { reportConfig } from '../models';
import { VTextField } from '../../../mvvm/TextField/VTextField';
import { TextButton } from '../../../components/TextButton';
import { Label } from '../../../components/Label';

export const Actions: React.FC = observer(() => {
	const { isEdit, onSave, onCancel, onDelete, deleteField, isDeleteButtonDisabled } = reportConfig;

  return (
    <View>
			{
				isEdit 
					? 
						<View style={styles.row}>
							<View style={{width: '49%'}}>
								<TextButton title='Сохранить' onPress={onSave} />
							</View>
							<View style={{width: '49%'}}>
								<TextButton title='Отменить' onPress={onCancel} />
							</View>
						</View>
					: 
						<View style={styles.column}>
							<Label>Удаление отчёта:</Label>
							<VTextField style={styles.delete} model={deleteField}/>
							<View style={styles.delete}>
								<TextButton 
									title='Удалить' 
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
  },
  column: {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 10,
  },
	delete: {
		width: '100%',
	}
});
