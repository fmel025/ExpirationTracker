import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/Home";
import AddProductScreen from '../screens/AddProduct';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS } from '../constants/Screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name={SCREENS.HOME}
                    component={HomeScreen}
                    options={{
                        title: "Productos",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen
                    name={SCREENS.ADDPRODUCT}
                    component={AddProductScreen}
                    options={{
                        title: "Añadir un producto",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen
                    name={SCREENS.EXPIREDPRODUCTS}
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