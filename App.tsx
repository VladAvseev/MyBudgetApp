import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/modules/_home';
import { Report } from './src/modules/_report';
import { ReportConfig } from './src/modules/_reportConfig';
import { Download } from './src/modules/_download';
import { Upload } from './src/modules/_upload';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
					<Stack.Screen name="Report" component={Report} options={{headerShown: false}} />
					<Stack.Screen name="ReportConfig" component={ReportConfig} options={{headerShown: false}} />
					<Stack.Screen name="Download" component={Download} options={{headerShown: false}} />
					<Stack.Screen name="Upload" component={Upload} options={{headerShown: false}} />
				</Stack.Navigator>
			</NavigationContainer>
  );
}
