//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// create a component
class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#64dd17" barStyle="light-content" />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            flex: 1,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="chevron-left" color="white" size={30} />
            <Text
              style={{
                color: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                alignContent: 'center',
                fontSize: 15,
              }}>
              Recipes
            </Text>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 15}}>
              {' '}
              {this.props.titre}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              marginHorizontal: 10,
            }}>
            <Icon name="search" color="white" size={25} />
          </View>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#64dd17',
  },
});

//make this component available to the app
export default Search;
