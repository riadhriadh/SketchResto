//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Animated} from 'react-native';
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
const barWidth = 4;
const barMargin = 1;
const {width: wWidth} = Dimensions.get('window');
const offset = wWidth / 16;
type WaveformProps = {
  waveformdata: {width: Number, height: Number, sample: number[]},
  color: String,
};
// create a component
class WaveForm extends Component<WaveformProps> {
  render() {
    const {waveformdata, color} = this.props;
    const width = waveformdata.width * (barWidth + barMargin) + offset;
    const height = waveformdata.height + barMargin + waveformdata.height * 0.61;
    const AnimatedReact = Animated.createAnimatedComponent(Rect);
    const translateX = 5;
    const x = this.props.progress
      ? this.props.progress.interpolate({
          inputRange: [0, width - wWidth - offset, width - wWidth],
          outputRange: [`${-width + offset}`, `${-wWidth}`, '0'],
        })
      : 0;
    return (
      <Svg {...{width, height}}>
        <Defs>
          <ClipPath id="progress">
            <AnimatedReact {...{width, height, x}} />
          </ClipPath>
        </Defs>
        {waveformdata &&
          waveformdata.samples.map((sample, key) => (
            <React.Fragment {...{key}}>
              <Rect
                clipPath="url(#progress)"
                y={waveformdata.height - sample}
                x={key * (barWidth + barMargin) + offset}
                fill={color}
                height={sample}
                width={barWidth}
                {...{key}}
              />

              <Rect
                clipPath="url(#progress)"
                y={waveformdata.height + barMargin}
                x={key * (barWidth + barMargin) + offset}
                fill={color}
                opacity={0.45}
                height={sample}
                width={barWidth}
                {...{key}}
              />
            </React.Fragment>
          ))}
      </Svg>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default WaveForm;
