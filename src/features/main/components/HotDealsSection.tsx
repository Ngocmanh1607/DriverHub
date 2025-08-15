import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Highlight, Highlight1, Highlight2 } from '../../../assets/images';

const HotDealsSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={Highlight} />
        <Image source={Highlight1} />
      </View>
      <Image source={Highlight2} />
    </View>
  );
};

export default HotDealsSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  leftContainer: {
    flex: 1,
    gap: 12,
  },
});
