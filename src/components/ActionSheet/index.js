//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Animated,
  ScrollView,
  Easing,
} from 'react-native';

// create a component
class ActionSheet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      sheetAnim: new Animated.Value(300),
    };
  }

  show = () => {
    this.setState({visible: true}, () => {});
  };
  _showSheet = () => {
    Animated.timing(this.state.sheetAnim, {
      toValue: 0,
      duration: 750,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  render() {
    const {visible} = this.state;
    return (
      <Modal
        visible={visible}
        animationType="none"
        transparent
        style={{flex: 1}}
        onRequestClose={this._cancel}>
        <View
          onPress={() =>
            this.setState({
              visible: false,
            })
          }
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',

            flex: 1,
          }}>
          <TouchableOpacity
            onPress={() =>
              this.setState({
                visible: false,
              })
            }
            style={{flex: 1}}></TouchableOpacity>
          <View
            style={{
              height: '60%',
              backgroundColor: 'white',
              justifyContent: 'flex-end',
            }}>
            {this.props.children}
          </View>
        </View>
      </Modal>
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
export default ActionSheet;
