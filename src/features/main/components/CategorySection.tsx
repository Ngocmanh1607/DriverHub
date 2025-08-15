import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import {
  AirFilter,
  OilFilter,
  FuelFilter,
  CabinFilter,
} from '../../../assets/images';
import colors from '../../../theme/color';
import Title from '../../../components/Title';

interface Category {
  id: string;
  name: string;
  image: any;
}

const categories: Category[] = [
  {
    id: '1',
    name: 'Bộ Lọc Không Khí',
    image: AirFilter,
  },
  {
    id: '2',
    name: 'Bộ Lọc Dầu',
    image: OilFilter,
  },
  {
    id: '3',
    name: 'Bộ Lọc Nhiên Liệu',
    image: FuelFilter,
  },
  {
    id: '4',
    name: 'Bộ Lọc Cabin',
    image: CabinFilter,
  },
  {
    id: '5',
    name: 'Bộ Lọc Không Khí',
    image: AirFilter,
  },
];

const CategorySection: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const percentage =
      (contentOffset.x / (contentSize.width - layoutMeasurement.width)) * 100;
    setScrollPercentage(Math.min(percentage, 100));
  };

  const handleCategoryPress = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  return (
    <View style={styles.container}>
      <Title title="Danh mục tiêu biểu" titleStyle={styles.title} />
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            style={[
              styles.categoryCard,
              selectedCategory === category.id && styles.selectedCard,
            ]}
            onPress={() => handleCategoryPress(category.id)}
          >
            <View style={styles.imageContainer}>
              <Image source={category.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryName}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.progressContainer}>
        <View style={styles.progressTrack}>
          <View
            style={[
              styles.progressBar,
              {
                width: `${scrollPercentage}%`,
              },
            ]}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textSecondary,
  },
  scrollContainer: {
    paddingHorizontal: 12,
  },
  categoryCard: {
    width: 80,
    height: 100,
    marginRight: 4,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 5,
  },
  selectedCard: {
    borderColor: colors.primary,
    borderWidth: 1,
  },
  imageContainer: {
    width: 45,
    height: 45,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
  },
  categoryName: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.text,
    textAlign: 'center',
    marginTop: 8,
  },
  progressContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  progressTrack: {
    width: 60,
    height: 6,
    backgroundColor: colors.disabled,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
});

export default CategorySection;
