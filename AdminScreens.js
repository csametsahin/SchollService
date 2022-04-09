import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
import AdminHome from './pages/AdminHome';

function AdminScreens() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Admin Home"
                component={AdminHome}
            />
        </Tab.Navigator>
    );
}

export default AdminScreens