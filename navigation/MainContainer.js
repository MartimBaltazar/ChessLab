import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import colors from "../assets/colors/colors";

// Screens
import HomeScreen from './screens/HomeScreen';
import TacticsScreen from './screens/TacticsScreen';
import MoreScreen from './screens/MoreScreen';

// Screen names
const Openings = 'Openings';
const TacticsName = 'Tactics';
const MoreName = 'More';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const getIconName = (routeName, isFocused) => {
    switch (routeName) {
      case Openings:
        return 'book-open';
      case TacticsName:
        return 'chess-board';
      case MoreName:
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
            {route.name === TacticsName && (
              <Icon
                name={getIconName(route.name, isFocused)}
                size={24}
                color={labelColor}
              />
            )}
            {route.name === MoreName && (
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
    >
      <Tab.Screen name={Openings} component={HomeScreen} />
      <Tab.Screen name={TacticsName} component={TacticsScreen} />
      <Tab.Screen name={MoreName} component={MoreScreen} />
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