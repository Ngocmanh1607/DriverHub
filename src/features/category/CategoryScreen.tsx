import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  AirFilter,
  AirFilter2,
  CabinFilter,
  FuelFilter,
} from '../../assets/images';
import { IArrowRight } from '../../assets/svg';
import colors from '../../theme/color';
import Header from '../../components/header';
import Title from '../../components/Title';

const CategoryScreen = () => {
  const insets = useSafeAreaInsets();
  const [selectedCategory, setSelectedCategory] = useState(0);

  const renderCategoryItem = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => (
    <View
      style={[
        styles.categoryItemWrapper,
        selectedCategory === index && styles.selectedCategoryItem,
      ]}
    >
      <TouchableOpacity
        style={[
          styles.categoryItem,
          selectedCategory === index && styles.selectedCategoryItem,
          selectedCategory === index - 1 && styles.itemAboveSelected,
          selectedCategory === index + 1 && styles.itemBelowSelected,
        ]}
        onPress={() => setSelectedCategory(index)}
      >
        <Image source={item.image} style={styles.categoryImage} />

        <Text
          style={[
            styles.categoryTitle,
            selectedCategory === index && styles.selectedCategoryTitle,
          ]}
        >
          {item.title}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const categories = [
    {
      id: 0,
      title: 'Bộ Lọc Dầu',
      image: AirFilter,
    },
    {
      id: 1,
      title: 'Bộ Lọc Không Khí',
      image: CabinFilter,
    },
    {
      id: 2,
      title: 'Bộ Lọc Nhiên Liệu',
      image: FuelFilter,
    },
    {
      id: 3,
      title: 'Bộ Lọc Dầu',
      image: AirFilter,
    },
    {
      id: 4,
      title: 'Bộ Lọc Dầu',
      image: AirFilter2,
    },
  ];

  const subCategories = [
    {
      title: 'Sub Category 1',
      products: [
        {
          name: 'Bộ lọc gió',
          image: AirFilter2,
        },
        {
          name: 'Bộ lọc trong cabin',
          image: CabinFilter,
        },
        {
          name: 'Bộ lọc nhiên liệu',
          image: FuelFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter2,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
      ],
    },
    {
      title: 'Sub Category 2',
      products: [
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc trong cabin',
          image: CabinFilter,
        },
        {
          name: 'Bộ lọc nhiên liệu',
          image: FuelFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
        {
          name: 'Bộ lọc gió',
          image: AirFilter,
        },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Header isBack />
      <View style={styles.content}>
        <View style={styles.mainContainer}>
          <View style={styles.sidebar}>
            <FlatList
              data={categories}
              keyExtractor={item => item.id.toString()}
              renderItem={renderCategoryItem}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View style={styles.rightContent}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: insets.bottom + 50 }}
            >
              <View style={styles.mainCategoryHeader}>
                <Text style={styles.mainCategoryTitle}>
                  {categories[selectedCategory].title}
                </Text>
                <IArrowRight />
              </View>

              {subCategories.map((subCategory, subIndex) => (
                <View key={subIndex} style={styles.subCategorySection}>
                  <Title
                    title={subCategory.title}
                    showViewAll
                    titleStyle={styles.subCategoryTitle}
                  />

                  <View style={styles.productsGrid}>
                    {subCategory.products.map((product, productIndex) => (
                      <TouchableOpacity
                        key={productIndex}
                        style={styles.productItem}
                      >
                        <Image
                          source={product.image}
                          style={styles.productImage}
                        />
                        <Text style={styles.productName}>{product.name}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2',
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
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },

  sidebar: {
    width: 90,
    backgroundColor: colors.blue50,
  },
  categoryItemWrapper: {
    backgroundColor: colors.white,
  },
  categoryItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: colors.blue50,
  },
  selectedCategoryItem: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: colors.white,
  },
  itemAboveSelected: {
    borderTopRightRadius: 15,
  },
  itemBelowSelected: {
    borderBottomRightRadius: 15,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 6,
  },
  categoryTitle: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '600',
    lineHeight: 16,
  },
  selectedCategoryTitle: {
    color: colors.text,
    fontWeight: 'bold',
  },

  rightContent: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  mainCategoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  mainCategoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 32,
    flex: 1,
    marginLeft: 12,
  },
  subCategorySection: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: colors.disabled,
    paddingBottom: 12,
    marginHorizontal: 12,
  },
  subCategoryTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.text,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 6,
  },
  productItem: {
    width: '30%',
    marginBottom: 12,
    alignItems: 'center',
  },
  productImage: {
    width: 70,
    height: 70,
    marginBottom: 6,
  },
  productName: {
    fontSize: 12,
    color: colors.text,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 16,
  },
});
