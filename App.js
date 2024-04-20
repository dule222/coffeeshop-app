import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './App/Screens/LoginScreen/login'; // Adjust based on your file structure
import HomeScreen from './App/Screens/HomeScreen/Home'; // Adjust based on your file structure
import Profile from './App/Screens/ProfileScreen/Profile';
import Edit from './App/Screens/EditProfileScreen/Edit';
import Order from './App/Order/Order';
import Front from './App/Screens/FrontScreen/Front';
import Sign from './App/Screens/Signin/Sign';
import Settings from './App/Screens/Settings/Settings';
import Location from './App/Screens/Location/Location';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Front">
        <Stack.Screen name="Front" component={Front} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Edit" component={Edit} />
        <Stack.Screen name="Sign" component={Sign} />
        <Stack.Screen name="Settings" component={Settings} />

        <Stack.Screen name="Location" component={Location} />        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
