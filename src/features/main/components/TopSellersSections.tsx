import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';

import Title from '../../../components/Title';

import { ILike } from '../../../assets/svg';
import { EngineAirFilter } from '../../../assets/images';
import CardProduct from '../../../components/CardProduct';

const TopSellersSections = () => {
  const topSellersProducts = [
    {
      id: 1,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      remaining: 10,
    },
    {
      id: 2,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      remaining: 10,
    },
    {
      id: 3,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      remaining: 10,
    },
    {
      id: 4,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      remaining: 10,
    },
  ];
  const renderProduct = ({ item }: { item: any }) => (
    <CardProduct
      image={item.image}
      title={item.title}
      price={item.price}
      originalPrice={item.originalPrice}
      showActionButton={true}
      remaining={item.remaining}
      actionButtonText="Mua ngay"
      onPress={() => console.log('Product pressed:', item.id)}
      onActionPress={() => console.log('Buy now:', item.id)}
      style={styles.productCard}
    />
  );

  return (
    <View style={styles.container}>
      <Title
        title="Sản phẩm bán chạy"
        icon={<ILike width={24} height={24} />}
        showViewAll
        onViewAllPress={() => {}}
      />
      <FlatList
        data={topSellersProducts}
        renderItem={renderProduct}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productsContainer}
      />
    </View>
  );
};

export default TopSellersSections;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  productsContainer: {
    paddingHorizontal: 12,
    marginVertical: 12,
  },
  productCard: {
    marginRight: 8,
  },
});
