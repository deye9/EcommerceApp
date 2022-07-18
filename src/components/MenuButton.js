import React from 'react';
import {Pressable, Image, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {styles} from '../assets/AppStyles';

export default function MenuButton(props) {
  const {title, onPress, source} = props;

  return (
    <Pressable
      onPress={onPress}
      style={styles.btnClickContain}
      underlayColor="rgba(128, 128, 128, 0.1)">
      <View style={styles.btnContainer}>
        <Image source={source} style={styles.btnIcon} />
        <Text style={styles.btnText}>{title}</Text>
      </View>
    </Pressable>
  );
}

MenuButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.object,
  title: PropTypes.string,
};
