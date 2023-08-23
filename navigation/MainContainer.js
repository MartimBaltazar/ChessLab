import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';

// import assets and components
import colors from "../assets/colors/colors";

// import screens and navigators
import OpeningNavigator from './screens/OpeningNavigator';
import TacticsNavigator from './screens/TacticsNavigator';
import ProfileScreen from './screens/ProfileScreen';
import MoreNavigator from './screens/MoreNavigator';

// Screen names
const Openings = 'Opening Navigator';
const Tactics = 'Tactics Navigator';
const Profile = 'Profile';
const More = 'More Navigator';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const getIconName = (routeName, isFocused) => {
    switch (routeName) {
      case Openings:
        return 'book-open';
      case Tactics:
        return 'chess-board';
      case Profile:
        return 'user-circle';
      case More:
        return 'more-horizontal';
      default:
        return isFocused ? 'book-open' : 'book-open';
    }
  };

  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel  || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const labelColor = isFocused ? colors.primary : 'gray';

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabBarButton}
          >
            {route.name === Openings && (
              <Icon
                name={getIconName(route.name, isFocused)}
                size={24}
                color={labelColor}
              />
            )}
            {route.name === Tactics && (
              <Icon
                name={getIconName(route.name, isFocused)}
                size={24}
                color={labelColor}
              />
            )}
            {route.name === Profile && (
              <Icon
                name={getIconName(route.name, isFocused)}
                size={24}
                color={labelColor}
              />
            )}
            {route.name === More && (
              <FeatherIcon
                name={getIconName(route.name, isFocused)}
                size={24}
                color={labelColor}
              />
            )}
            <Text style={{ color: labelColor }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={Openings}
      tabBar={(props) => <CustomTabBar {...props} />} // Use the custom tab bar component
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name={Openings} component={OpeningNavigator} />
      <Tab.Screen name={Tactics} component={TacticsNavigator} />
      <Tab.Screen name={Profile} component={ProfileScreen}  options={{ headerShown: true }}/>
      <Tab.Screen name={More} component={MoreNavigator} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
  },
});

export default MainContainer;
