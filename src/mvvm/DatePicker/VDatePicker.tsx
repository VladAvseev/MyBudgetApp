import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { VMDatePickerInstance } from './VMDatePicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextButton } from '../../components/TextButton';

type props = {
	model: VMDatePickerInstance;
}

export const VDatePicker: React.FC<props> = observer(({ model }) => {
	const {
		setValue,
		isOpen,
		setIsOpen,
		label
	} = model;

  return (
		<View>
			<TextButton 
				title={label}
				onPress={() => setIsOpen(true)}
			/>	
			<DateTimePickerModal
				isVisible={isOpen}
				mode='date'
				onConfirm={(value) => {
					setIsOpen(false)
					setValue(value)
				}}
				onCancel={() => {
					setIsOpen(false)
				}}
			/>
		</View>
  );
})

const styles = StyleSheet.create({
  main: {
		padding: 5,
    borderWidth: 1,
		borderRadius: 5,
  },
  error: {
		padding: 5,
    borderWidth: 1,
		borderRadius: 5,
		borderColor: 'red',
  },
});
