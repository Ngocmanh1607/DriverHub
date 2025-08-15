import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';

import Header from '../../components/header';

import DiscountSection from './components/DiscountSection';
import CategorySection from './components/CategorySection';
import PromotionBanner from './components/PromotionBanner';
import FlashSaleSection from './components/FlashSaleSection';
import TopBrandsSection from './components/TopBrandsSection';
import TopSellersSections from './components/TopSellersSections';
import HotDealsSection from './components/HotDealsSection';
import ForYouSections from './components/ForYouSections';
import NewInStockSection from './components/NewInStockSection';
import FeaturedPostsSection from './components/FeaturedPostsSection';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <ScrollView style={styles.scrollView}>
          <DiscountSection />
          <CategorySection />
          <PromotionBanner />
          <FlashSaleSection />
          <TopBrandsSection />
          <TopSellersSections />
          <HotDealsSection />
          <ForYouSections />
          <NewInStockSection />
          <FeaturedPostsSection />
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    top: -20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#F8F9FA',
    zIndex: 10,
    overflow: 'hidden',
  },
  scrollView: {
    flex: 1,
    marginBottom: 100,
  },
});
