import { FlatList, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import Title from '../../../components/Title';
import { IStar } from '../../../assets/svg';
import { AdsBanner, EngineAirFilter } from '../../../assets/images';
import CardProduct from '../../../components/CardProduct';

const ForYouSections = () => {
  const data = [
    {
      id: 'banner',
      type: 'banner',
      image: AdsBanner,
    },
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
    if (item.type === 'banner') {
      return <Image source={item.image} style={styles.banner} />;
    }

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
        title="Dành cho bạn"
        icon={<IStar width={24} height={24} />}
        showViewAll
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

export default ForYouSections;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  banner: {},
  productList: {
    paddingHorizontal: 12,
    gap: 12,
  },
});
