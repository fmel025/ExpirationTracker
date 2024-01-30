import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/Home";
import AddProductScreen from '../screens/AddProduct';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        title: "Productos",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen
                    name='AddProduct'
                    component={AddProductScreen}
                    options={{
                        title: "Añadir un producto",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen
                    name='ExpiredProducts'
                    component={HomeScreen}
                    options={{
                        title: "Productos vencidos",
                        headerTitleAlign: "center",
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

// export const TabNavigation = () => {
//     return (
//         <Tab.Navigator>
//             <Tab.Screen name=''/>
//         </Tab.Navigator>
//     );
// }