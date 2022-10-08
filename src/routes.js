import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './pages/feed';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="feed"
                    component={Feed}
                    options={{
                        title: 'Instagram',
                        headerTitleAlign: 'center',
                        headerStyle: {
                            backgroundColor: '#f5f5f5',
                        },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
