import { Pressable, StyleSheet } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ArrowRightIcon } from './Icons/ArrowRightIcon';
import { ReactNode } from 'react';

type props = {
	children: ReactNode;
	onPress: () => void;
	disabled?: boolean;
	width?: number;
	height?: number;
}

export const IconButton: React.FC<props> = observer(({ children, onPress, disabled, width, height })  => {
  return (
		<Pressable style={{ ...styles.container, width: width || 50, height: height || 50 }} onPress={onPress} disabled={disabled}>
			{children}
		</Pressable>
	)
})

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
});
