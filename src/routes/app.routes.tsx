import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { stackScreenOptions } from '../utils'
import * as P from '../pages'

const { Navigator, Screen } = createStackNavigator()

export const AppRoutes = () => (
  <Navigator headerMode="none" screenOptions={stackScreenOptions}>
    <Screen name="SignIn" component={P.SignIn} />
    {/* <Screen name="Home" component={P.Home} /> */}
  </Navigator>
)
