import { StyleSheet, View, Text, Pressable } from 'react-native';
import { home } from '../models';
import { PageContainer } from '../../../components/PageContainer';
import { Title } from '../../../components/Title';
import { Label } from '../../../components/Label';
import { useState } from 'react';

export const Analytics = () => {
	const { analytics } = home;
	const [open, setOpen] = useState(false);

	const Modal = () => {
		return (
			<Pressable style={styles.modalBack} onPress={() => setOpen(false)}>
				<View style={styles.modal}>
					<Text>Средние значения рассчитываются без учёта последнего отчёта.</Text>
				</View>
			</Pressable>
		)
	}

  return (
		<>
		{open ? <Modal/> : null}
		<PageContainer style={styles.container}>
			<View style={styles.row}>
				<Title style={styles.text}>Баланс: {analytics.savedSum.toFixed(2)}</Title>
				<Pressable style={styles.askIcon} onPress={() => setOpen(true)}><Text>?</Text></Pressable>
			</View>
			<View style={styles.rowWrapper}>
				<Title style={styles.text}>Ежедневные расходы:</Title>
				<View style={styles.row}>
					<View>
						<Label style={styles.text}>Всего:</Label>
						<Text style={styles.text}>{analytics.dailySpending.sum.toFixed(2)}</Text>
					</View>
					<View>
						<Label style={styles.text}>В среднем:</Label>
						<Text style={styles.text}>~{analytics.dailySpending.avarage.toFixed(2)}</Text>
					</View>
					<View>
						<Label style={styles.text}>За последний период:</Label>
						<Text style={styles.text}>{analytics.dailySpending.last.toFixed(2)}</Text>
					</View>
				</View>
			</View>
			<View style={styles.rowWrapper}>
				<Title style={styles.text}>Остальные расходы:</Title>
				<View style={styles.row}>
					<View>
						<Label style={styles.text}>Всего:</Label>
						<Text style={styles.text}>{analytics.otherSpending.sum.toFixed(2)}</Text>
					</View>
					<View>
						<Label style={styles.text}>В среднем:</Label>
						<Text style={styles.text}>~{analytics.otherSpending.avarage.toFixed(2)}</Text>
					</View>
					<View>
						<Label style={styles.text}>За последний период:</Label>
						<Text style={styles.text}>{analytics.otherSpending.last.toFixed(2)}</Text>
					</View>
				</View>
			</View>
			<View style={styles.rowWrapper}>
				<Title style={styles.text}>Доходы:</Title>
				<View style={styles.row}>
					<View>
						<Label style={styles.text}>Всего:</Label>
						<Text style={styles.text}>{analytics.income.sum.toFixed(2)}</Text>
					</View>
					<View>
						<Label style={styles.text}>В среднем:</Label>
						<Text style={styles.text}>~{analytics.income.avarage.toFixed(2)}</Text>
					</View>
					<View>
						<Label style={styles.text}>За последний период:</Label>
						<Text style={styles.text}>{analytics.income.last.toFixed(2)}</Text>
					</View>
				</View>
			</View>
		</PageContainer>
		</>
  );
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: 'rgb(33, 150, 243)',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 10,
		paddingBottom: 10,
	},
	rowWrapper: {
		width: '100%',
		flexDirection: 'column',
		alignItems: 'flex-start',
		gap: 5,
	},
	row: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	text: {
		color: '#FFF',
	},
	askIcon: {
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modalBack: {
		position: 'absolute',
		left: 0,
		top: 0,
		zIndex: 1001,
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	modal: {
		padding: 20,
		borderRadius: 10,
		backgroundColor: '#FFF',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 1002,
	}
});
