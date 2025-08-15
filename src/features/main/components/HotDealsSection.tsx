import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Highlight, Highlight1, Highlight2 } from '../../../assets/images';

const HotDealsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={Highlight} style={styles.image} />
        <Image source={Highlight1} style={styles.image} />
      </View>
      <View style={styles.rightContainer}>
        <Image source={Highlight2} style={styles.image} />
      </View>
    </View>
  );
};

export default HotDealsSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  leftContainer: {
    gap: 12,
    width: '48%',
    marginRight: 12,
  },
  rightContainer: {
    width: '48%',
  },
  image: {
    width: '100%',
    resizeMode: 'stretch',
  },
});
