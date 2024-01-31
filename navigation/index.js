import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from "../screens/Home";
import AddProductScreen from '../screens/AddProduct';

// Constants
import { SCREENS, TITLE } from '../constants/Screens';

// Icons
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const StackNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={SCREENS.BOTTOMTAB}>
            <Stack.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    title: TITLE,
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
            <Stack.Screen
                name={SCREENS.BOTTOMTAB}
                component={TabNavigation}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: {
                height: 60,
                position: 'absolute',
                bottom: 16,
                right: 16,
                left: 16,
                borderRadius: 10
            }
        }}>
            <Tab.Screen
                name={SCREENS.HOME}
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (<FontAwesome5 name="home" size={24} color={focused ? 'purple' : 'black'} />),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name={SCREENS.ADDPRODUCT}
                component={AddProductScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<Ionicons name="add-circle-sharp" size={40} color={focused ? 'purple' : 'black'} />),
                    tabBarShowLabel: false,
                }}
            />
            <Tab.Screen
                name={SCREENS.EXPIREDPRODUCTS}
                component={AddProductScreen}
                options={{
                    tabBarIcon: ({ focused }) => (<FontAwesome5 name="trash" size={25} color={focused ? 'purple' : 'black'} />),

                    tabBarShowLabel: false,
                }}
            />
        </Tab.Navigator>
    );
}