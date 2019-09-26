//import liraries
import React, {Component} from 'react';
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Animated,
} from 'react-native';
import * as shape from 'd3-shape';
interface TabbarProps {}
const {width} = Dimensions.get('window');
const height = 60;
const tabs = [
  {name: 'grid'},
  {name: 'list'},
  {name: 'refresh-cw'},
  {name: 'box'},
  {name: 'user'},
];
import StaticTabbar from '../staticTabbar/index';
const tabWidth = width / tabs.length;

const heigth = 64;
const left = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([{x: 0, y: 0}, {x: width, y: 0}]);
const tab = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)
  .curve(shape.curveBasis)([
  {
    x: width,
    y: 0,
  },
  {
    x: width + 2,
    y: 2,
  },
  {
    x: width + 5,
    y: 10,
  },
  {
    x: width + 5,
    y: 15,
  },
  {
    x: width + 15,
    y: heigth - 5,
  },

  {
    x: width + tabWidth - 40,
    y: heigth - 5.2,
  },
  {
    x: width + tabWidth - 30,
    y: heigth - 5.2,
  },
  {
    x: width + tabWidth - 25,
    y: heigth - 5,
  },
  {
    x: width + tabWidth - 20,
    y: heigth - 10,
  },
  {
    x: width + tabWidth - 15,
    y: heigth - 17,
  },
  {
    x: width + tabWidth - 12,
    y: heigth - 25,
  },
  {
    x: width + tabWidth - 8,
    y: heigth - 35,
  },

  {
    x: width + tabWidth - 5,
    y: heigth - 60,
  },

  {
    x: width + tabWidth,
    y: 0,
  },
]);
const right = shape
  .line()
  .x(d => d.x)
  .y(d => d.y)([
  {x: width + tabWidth, y: 0},
  {x: width * 2, y: 0},
  {x: width * 2, y: heigth},
  {x: width * 0, y: heigth},
  {x: width * 0, y: 0},
]);
const d = `${left} ${tab} ${right}`;

const AnimatedSvg = Animated.createAnimatedComponent(Svg);

// create a component
class Tabbar extends React.PureComponent<TabbarProps> {
  value = new Animated.Value(-width);
  render() {
    const {value: translateX} = this;
    return (
      <View>
        <View {...{width, height}}>
          <AnimatedSvg
            width={width * 2}
            {...{height}}
            style={{
              transform: [{translateX: translateX}],
            }}>
            <Path {...{d}} fill="white"></Path>
          </AnimatedSvg>
          <View style={StyleSheet.absoluteFill}>
            <StaticTabbar value={translateX} tabs={tabs} />
          </View>
        </View>
        <SafeAreaView style={styles.safeArea} />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    backgroundColor: 'red',
    justifyContent: 'flex-end',
  },
});

//make this component available to the app
export default Tabbar;
