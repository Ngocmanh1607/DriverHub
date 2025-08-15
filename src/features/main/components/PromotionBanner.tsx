import { StyleSheet, Image, ScrollView, Dimensions, View } from 'react-native';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Banner from '../../../assets/images/Banner.png';
import colors from '../../../theme/color';

const { width } = Dimensions.get('window');
const BANNER_WIDTH = width - 26;

const PromotionBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const banners = [Banner, Banner, Banner];

  const handleScroll = (event: any) => {
    const slideSize = BANNER_WIDTH + 10;
    const offset = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(offset / slideSize);
    setActiveIndex(activeIndex);
  };

  const scrollToNext = useCallback(() => {
    if (scrollViewRef.current) {
      const nextIndex = (activeIndex + 1) % banners.length;
      const slideSize = BANNER_WIDTH + 10;
      scrollViewRef.current.scrollTo({
        x: nextIndex * slideSize,
        animated: true,
      });
    }
  }, [activeIndex, banners.length]);

  useEffect(() => {
    const interval = setInterval(scrollToNext, 3000);
    return () => clearInterval(interval);
  }, [scrollToNext]);

  return (
    <View style={styles.wrapper}>
      <ScrollView
        ref={scrollViewRef}
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToInterval={BANNER_WIDTH + 10}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {banners.map((banner, index) => (
          <Image key={index} source={banner} style={styles.image} />
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeIndex && styles.paginationDotActive,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default PromotionBanner;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  container: {
    marginHorizontal: 12,
  },
  image: {
    width: BANNER_WIDTH,
    marginRight: 10,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  paginationDot: {
    width: 10,
    height: 3,
    borderRadius: 4,
    backgroundColor: colors.disabled,
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: colors.primary,
    width: 20,
  },
});
