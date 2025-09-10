/**
 * Instagram Clone - React Native Application
 * 
 * This code has been written by Aman Chaturvedi
 * Profile stack navigation configuration
 * 
 * Author: Aman Chaturvedi
 * Email: aman.allacc@gmail.com
 */

import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// importing screens
import ProfileScreen from '../../screens/ProfileScreen';

// importing icons
import LockIcon from 'react-native-vector-icons/Feather';
import PlusIconSquare from 'react-native-vector-icons/Feather';
import ThreeLineIcon from 'react-native-vector-icons/Ionicons';

// importing styles
import styles from './style';

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile Stack"
        component={ProfileScreen}
        options={{
          headerTitle: () => {
            return (
              <View style={styles.container}>
                <LockIcon name="lock" size={15} color="black" />
                <Text style={styles.textStyle}>aman_chaturvedi_</Text>
              </View>
            );
          },

          headerRight: () => {
            return (
              <View style={styles.rightIcons}>
                <PlusIconSquare name="plus-square" size={25} color="black" />
                <ThreeLineIcon
                  name="md-reorder-three-outline"
                  size={35}
                  color="black"
                />
              </View>
            );
          },
        }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
