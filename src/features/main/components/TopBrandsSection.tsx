import { FlatList, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Title from '../../../components/Title';
import { IDecoration } from '../../../assets/svg';
import colors from '../../../theme/color';
import {
  Audi,
  BMW,
  Chevrolet,
  Ford,
  Honda,
  Kia,
  Lexus,
  Nissan,
  Volkswagen,
  Volvo,
} from '../../../assets/images';

const TopBrandsSection = () => {
  const brands = [
    { id: 1, image: Honda },
    { id: 2, image: Chevrolet },
    { id: 3, image: Ford },
    { id: 4, image: BMW },
    { id: 5, image: Kia },
    { id: 6, image: Nissan },
    { id: 7, image: Volkswagen },
    { id: 8, image: Volvo },
    { id: 9, image: Audi },
    { id: 10, image: Lexus },
  ];

  const renderBrandItem = ({ item }: { item: any }) => (
    <View style={styles.box}>
      <Image source={item.image} resizeMode="contain" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Title
        title="Thương hiệu nổi bật"
        titleStyle={styles.title}
        icon={<IDecoration width={24} height={24} />}
      />

      <FlatList
        data={brands}
        renderItem={renderBrandItem}
        keyExtractor={item => item.id.toString()}
        numColumns={5}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default TopBrandsSection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  title: {
    lineHeight: 24,
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  box: {
    width: 68,
    height: 54,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  contentContainer: {
    paddingHorizontal: 12,
  },
});
