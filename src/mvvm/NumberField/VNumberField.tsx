import { StyleSheet, Text, TextInput, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { VMNumberFieldInstance } from './VMNumberField';

type props = {
	model: VMNumberFieldInstance;
	style?: any;
}

export const VNumberField: React.FC<props> = observer(({ model, style }) => {
	const {
		value,
		onChange,
		placeholder,
	} = model;

  return (
		<TextInput
			style={{...styles.main, ...style}}
			placeholder={placeholder}
			value={value}
			onChangeText={onChange}
			/>
  );
})

const styles = StyleSheet.create({
  main: {
		width: 120,
		padding: 5,
    borderWidth: 1,
		borderRadius: 5,
  },
});
