//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import PropTypes from 'prop-types';
// create a component
class Card extends Component {
  static propTypes = {
    height: PropTypes.number,
  };
  static defaultProps = {
    height: 40,
  };
  render() {
    return (
      <View style={{backgroundColor: 'white', marginHorizontal: 5}}>
        <ImageBackground
          imageStyle={{
            borderRadius: 10,
            backgroundColor: 'white',
          }}
          resizeMode="cover"
          blurRadius={0.1}
          style={styles.container}
          source={require('../../assets/img/rec1.jpg')}>
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              flex: 1,
              borderRadius: 10,
              paddingHorizontal: 10,
            }}>
            <View
              style={{
                height: '15%',
                justifyContent: 'flex-end',
              }}>
              <Text style={{color: '#b5c1b8', fontSize: 15}}>
                {' '}
                START YOUR DAY RIGHT
              </Text>
            </View>
            <View style={{height: '20%'}}>
              <Text style={{color: 'white', fontSize: 25, fontFamily: 'bolde'}}>
                Breakfast
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '100%',

    height: 290,
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default Card;
