import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
import Home from './pages/Home';
import Bookings from './pages/Bookings';

function Screens() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Bookings"
                component={Bookings}
            />
        </Tab.Navigator>
    );
}

export default Screens