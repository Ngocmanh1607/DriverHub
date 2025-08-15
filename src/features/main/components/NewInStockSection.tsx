import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import { IPackage } from '../../../assets/svg';
import { EngineAirFilter } from '../../../assets/images';
import colors from '../../../theme/color';
import Title from '../../../components/Title';
import CardProduct from '../../../components/CardProduct';

const NewInStockSection = () => {
  const data = [
    {
      id: 1,
      type: 'product',
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
    },
    {
      id: 2,
      type: 'product',
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
    },
    {
      id: 3,
      type: 'product',
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
    },
    {
      id: 4,
      type: 'product',
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
    },
  ];

  const renderItem = ({ item }: { item: any }) => {
    return (
      <CardProduct
        image={item.image}
        title={item.title}
        price={item.price}
        originalPrice={item.originalPrice}
        showActionButton={true}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Title
        title="Hàng mới về"
        icon={<IPackage width={24} height={24} />}
        showViewAll
        titleStyle={{ color: colors.white }}
        arrowIconColor={colors.white}
        viewAllTextStyle={{ color: colors.white }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

export default NewInStockSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingBottom: 12,
    backgroundColor: colors.primaryDark,
  },
  productList: {
    paddingHorizontal: 12,
    gap: 12,
  },
});
