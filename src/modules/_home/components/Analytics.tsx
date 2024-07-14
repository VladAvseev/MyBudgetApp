import { StyleSheet, View, Text, Pressable, Animated } from 'react-native';
import { home } from '../models';
import { PageContainer } from '../../../components/PageContainer';
import { Title } from '../../../components/Title';
import { Label } from '../../../components/Label';
import { useEffect, useRef, useState } from 'react';
import { ArrowTopIcon } from '../../../components/Icons/ArrowTopIcon';
import { ArrowBottomIcon } from '../../../components/Icons/ArrowBottomIcon';
import { observer } from 'mobx-react-lite';

export const Analytics = observer(() => {
	const { analytics, analyticsIsOpen, toggleAnalyticsIsOpen } = home;
	const [open, setOpen] = useState(false);

	const animate_state = {
    start: 0,
    end: 100
  };
  const value = useRef(new Animated.Value(animate_state.start)).current;

	const openAnimation = async () => {
    Animated.timing(value, { toValue: animate_state.end, useNativeDriver: false, duration: 500 }).start();
  };
	const closeAnimation = () => {
    Animated.timing(value, { toValue: animate_state.start, useNativeDriver: false, duration: 500 }).start()
  };

	const inputRange = Object.values(animate_state);
	const height = value.interpolate({ inputRange, outputRange: [0, 210] });
	const opacity = value.interpolate({ inputRange, outputRange: [0, 1] });


	useEffect(() => {
		if (analyticsIsOpen) { 
			openAnimation();
		} else {
			closeAnimation();
		}
	}, [analyticsIsOpen])

	const Modal = () => {
		return (
			<Pressable style={styles.modalBack} onPress={() => setOpen(false)}>
				<View style={styles.modal}>
					{analytics.startSum === 0 ? <Text>- Укажите начальный баланс</Text> : null}
					<Text>- Средние значения рассчитываются без учёта последнего отчёта.</Text>
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
				<Animated.View style={{ height }}>
					<Animated.View style={{ opacity }}>
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
					</Animated.View>
				</Animated.View>
		</PageContainer>
			<Pressable style={styles.analyticsButton} onPress={toggleAnalyticsIsOpen}>
				{ analyticsIsOpen ? <ArrowTopIcon /> : <ArrowBottomIcon /> }
			</Pressable>
		</>
  );
})

const styles = StyleSheet.create({
	container: {
		width: '100%',
		backgroundColor: 'rgb(33, 150, 243)',
		flexDirection: 'column',
		alignItems: 'center',
		gap: 5,
		paddingBottom: 10,
		paddingTop: 10,
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
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'center',
		zIndex: 1002,
	},
	analyticsButton: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgb(33, 150, 243)',
	}
});
