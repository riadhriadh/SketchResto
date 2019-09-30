//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Dimensions,
  Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
interface Tab {
  name: string;
}
interface StaticTabbarProps {
  tabs: Tab[];
}

export const tabHeight = 64;
const {width} = Dimensions.get('window');
const spinValue = new Animated.Value(0);

// First set up animation
Animated.timing(spinValue, {
  toValue: 1,
  duration: 3000,
  easing: Easing.linear,
}).start();
const spin = spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
// create a component
class StaticTabbar extends React.PureComponent<StaticTabbarProps> {
  onPress = (index: number) => {
    const {value, tabs} = this.props;
    const tabWidth = width / tabs.length;
    Animated.spring(value, {
      toValue: -width + tabWidth * index,
      userNativeDriver: true,
    }).start();
  };
  render() {
    const {tabs, value} = this.props;
    const tabWidth = width / tabs.length;
    const {onPress} = this;
    return (
      <View style={styles.container}>
        {tabs &&
          tabs.map(({name}, key) => {
            const opacity = value.interpolate({
              inputRange: [
                -width + tabWidth * (key - 1),
                -width + tabWidth * key,
                -width + tabWidth * (key + 1),
              ],
              outputRange: [1, 0, 1],
              extrapolate: 'clamp',
            });
            return (
              <React.Fragment style={styles.container} key={key}>
                <Animated.View key={key} style={[styles.tab, {opacity}]}>
                  <Icon size={30} name={name} color="#64dd17" />
                </Animated.View>
                <TouchableWithoutFeedback
                  key={key}
                  style={{width: tabWidth}}
                  onPress={() => this.onPress(key)}>
                  <View
                    style={{
                      position: 'absolute',
                      // top: -8,
                      width: tabWidth,
                      left: tabWidth * key,
                      height: tabHeight,
                      justifyContent: 'center',
                      alignItems: 'center',

                      // backgroundColor: 'red',
                      // borderRadius: 30,
                    }}>
                    <Animated.View style={styles.circle}>
                      <Icon size={30} name={name} color="#64dd17" />
                    </Animated.View>
                  </View>
                </TouchableWithoutFeedback>
              </React.Fragment>
            );
          })}
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    height: tabHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIcon: {
    flex: 1,
    position: 'absolute',
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default StaticTabbar;
