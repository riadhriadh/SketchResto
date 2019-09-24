//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import CardDetaile from 'CardDetaile';
import Search from 'search';
// create a component
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
class RecipesDtaile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 40}}>
          <Search titre={'Breakfasr'} />
        </View>

        <ScrollView contentInsetAdjustmentBehavior="automatic" style={{}}>
          <View style={{}}>
            <FlatList
              data={DATA}
              renderItem={({item}) => <CardDetaile />}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default RecipesDtaile;
