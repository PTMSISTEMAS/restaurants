import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TopRestaurant from '../screens/TopRestaurants'

const Stack = createStackNavigator()

export default function TopRestaurantStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="TopRestaurant" component={TopRestaurant} options={{title:"Top 5"}}/>
        </Stack.Navigator>
    )
}
