//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {isTSTypeElement} from '@babel/types';
import ActionSheet from 'ActionSheet';
import Tabbar from '../../components/Tabbar/index';
// create a component
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ouil the waffle maker',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Site the dry ingredients together in a large bowl',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'In separate bwol, seprate egg white and beat until stiff',
  },
];
class Detaile extends Component {
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          imageStyle={{
            backgroundColor: 'white',
          }}
          resizeMode="cover"
          blurRadius={0.1}
          style={{height: 200}}
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
            <TouchableOpacity
              onPress={this.showActionSheet}
              style={{height: '20%'}}>
              <Text style={{color: 'white', fontSize: 25, fontFamily: 'bolde'}}>
                Breakfast
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View
          style={{
            height: 70,
            backgroundColor: 'red',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="utensils" color="#64dd17" size={25} />
            <Text style={{color: '#64dd17'}}>6 people</Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="clock" color="#64dd17" size={25} />
            <Text style={{color: '#64dd17'}}>45 minute</Text>
          </View>
        </View>
        <View
          style={{
            height: 80,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              marginHorizontal: 20,
              marginVertical: 20,
              backgroundColor: '#64dd17',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 15}}>See ingredients</Text>
          </View>
        </View>
        <View
          style={{
            borderRadius: 10,
            // borderColor: 'gray',
            // borderWidth: 0.25,
            marginHorizontal: 20,
            backgroundColor: 'white',
          }}>
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <View
                style={{
                  // backgroundColor: '#f9c2ff',

                  // marginVertical: 8,

                  borderBottomColor: 'gray',
                  borderBottomWidth: 0.25,
                  flexDirection: 'row',
                }}>
                <Text style={{marginHorizontal: 10, marginVertical: 10}}>
                  {index + 1}
                </Text>
                <Text
                  allowFontScaling={false}
                  style={{
                    flexShrink: 1,
                    marginHorizontal: 10,
                    marginVertical: 10,
                    flexWrap: 'wrap',
                  }}
                  numberOfLines={3}>
                  {item.title}
                </Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <ActionSheet ref={o => (this.ActionSheet = o)} />
        <Tabbar style={{justifyContent: 'flex-end'}}></Tabbar>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
});

//make this component available to the app
export default Detaile;
