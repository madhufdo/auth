import React from 'react';
import { View } from 'react-native';


const CardItem = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
);


const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    position: 'relative',
    flexDirection: 'row'
  }
};
export { CardItem };
