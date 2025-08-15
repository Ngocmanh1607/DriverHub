import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

import { Discount } from '../../../assets/images';

const DiscountSection = () => {
  return (
    <View style={styles.container}>
      <Image source={Discount} style={styles.image} />
    </View>
  );
};

export default DiscountSection;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginTop: 24,
    marginBottom: 12,
  },
  image: {
    width: '100%',
  },
});
