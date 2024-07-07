import { StyleSheet, TextInput, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { VMTextFieldInstance } from './VMTextField';

type props = {
	model: VMTextFieldInstance;
	style?: any,
}

export const VTextField: React.FC<props> = observer(({ model, style }) => {
	const {
		inputValue,
		setValue,
		placeholder,
	} = model;

  return (
		<TextInput
			style={{...styles.main, ...style}}
			placeholder={placeholder}
			value={inputValue}
			onChangeText={setValue}
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
