import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

import styles from './style';

class IconTabBadage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPages: 7,
      refreshing: false,
      size: 5,
    };
  }
  render() {
    const {iconPath, tintColor, badage} = this.props;
    return (
      /// const TabIcon = ({ iconPath, tintColor, badage }) => (
      <View>
        <Image
          resizeMode={'contain'}
          source={iconPath}
          color={tintColor}
          style={{
            width: 30,
            height: 30,
            tintColor: tintColor,
            padding: 0,
          }}
        />
        {/* {badage == true ( */}
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>9</Text>
        </View>
        {/* ) : null} */}
      </View>
    );
  }
}

export default IconTabBadage;
