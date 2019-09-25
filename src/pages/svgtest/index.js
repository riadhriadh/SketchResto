//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, Animated} from 'react-native';
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
import waveformdata from './waveformdata.json';
import WaveForm from '../../components/waveform/index';
// create a component
class SvgTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: new Animated.Value(0),
    };
  }
  render() {
    const {x} = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Animated.ScrollView
            bounces={false}
            horizontal
            scrollEventThrottle={16}
            showHorizontalScrollIndicator={false}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {x},
                },
              },
            ])}>
            <WaveForm {...{waveformdata}} color={'#ff6d00'} progress={x} />
            <View>
              <WaveForm {...{waveformdata}} color={'#ff6d00'} progress={x} />
            </View>
          </Animated.ScrollView>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'flex-end'},
});

//make this component available to the app
export default SvgTest;
