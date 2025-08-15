import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from 'react-native-reanimated';

import { IFlashSale, IDArrowRight } from '../../../assets/svg';
import TimerBox from '../../../components/TimerBox';
import colors from '../../../theme/color';
import CardProduct from '../../../components/CardProduct';
import { EngineAirFilter } from '../../../assets/images';

const FlashSaleSection = () => {
  const timerScale = useSharedValue(1);

  useEffect(() => {
    timerScale.value = withRepeat(
      withTiming(1.1, { duration: 1000, easing: Easing.ease }),
      -1,
      true,
    );
  }, [timerScale]);

  const timerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: timerScale.value }],
  }));

  const flashSaleProducts = [
    {
      id: 1,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      soldCount: 88,
      progressPercentage: 75,
    },
    {
      id: 2,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      soldCount: 88,
      progressPercentage: 75,
    },
    {
      id: 3,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      soldCount: 88,
      progressPercentage: 75,
    },
    {
      id: 4,
      image: EngineAirFilter,
      title: 'Lọc gió động cơ Air Filter - Chevrolet',
      price: 299000,
      originalPrice: 329000,
      soldCount: 88,
      progressPercentage: 75,
    },
  ];

  const renderProduct = ({ item }: { item: any }) => (
    <CardProduct
      image={item.image}
      title={item.title}
      price={item.price}
      originalPrice={item.originalPrice}
      soldCount={item.soldCount}
      progressPercentage={item.progressPercentage}
      showProgressBar={true}
      showActionButton={true}
      actionButtonText="Mua ngay"
      onPress={() => console.log('Product pressed:', item.id)}
      onActionPress={() => console.log('Buy now:', item.id)}
      style={styles.productCard}
    />
  );

  return (
    <LinearGradient
      colors={['#FFE4B5', '#FFF8F0', '#FFE4B5']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      locations={[0, 0.5, 1]}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.leftSection}>
            <Animated.View style={[styles.iconContainer, timerAnimatedStyle]}>
              <IFlashSale width={24} height={24} />
            </Animated.View>
            <Text style={styles.title}>FLASH SALE</Text>
            <Animated.View style={[styles.timerContainer, timerAnimatedStyle]}>
              <TimerBox text="19" />
              <Text style={styles.colon}>:</Text>
              <TimerBox text="25" />
              <Text style={styles.colon}>:</Text>
              <TimerBox text="00" />
            </Animated.View>
          </View>

          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>Xem tất cả</Text>
            <IDArrowRight width={12} height={12} fill={colors.red} />
          </TouchableOpacity>
        </View>

        <FlatList
          data={flashSaleProducts}
          renderItem={renderProduct}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.productsContainer}
        />
      </View>
    </LinearGradient>
  );
};

export default FlashSaleSection;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  iconContainer: {
    marginRight: 6,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 12,
  },
  viewAllText: {
    fontSize: 8,
    fontWeight: '500',
    color: colors.red,
    marginRight: 4,
  },
  colon: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.red700,
    marginHorizontal: 4,
  },
  productsContainer: {
    paddingHorizontal: 4,
    paddingBottom: 12,
  },
  productCard: {
    marginRight: 8,
  },
});
