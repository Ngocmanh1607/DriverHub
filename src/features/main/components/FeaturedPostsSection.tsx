import { Image, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import Title from '../../../components/Title';
import { IMenu } from '../../../assets/svg';
import { Article, Article2, Article3 } from '../../../assets/images';
import colors from '../../../theme/color';

interface ArticleItem {
  id: number;
  image: any;
  title: string;
  date: string;
}

const FeaturedPostsSection = () => {
  const data = [
    {
      id: 1,
      image: Article,
      title:
        'Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động',
      date: '13/02/2025',
    },
    {
      id: 2,
      image: Article2,
      title:
        'Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động',
      date: '13/02/2025',
    },
    {
      id: 3,
      image: Article3,
      title:
        'Đầu phun sprinkler là gì? Cấu tạo, ứng dụng và nguyên lý hoạt động',
      date: '13/02/2025',
    },
  ];

  const renderItem = (item: ArticleItem) => {
    return (
      <View key={item.id} style={styles.card}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Title
        title="Bài viết nổi bật"
        icon={<IMenu width={24} height={24} />}
        showViewAll
      />
      <View style={styles.listContainer}>{data.map(renderItem)}</View>
    </View>
  );
};

export default FeaturedPostsSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  listContainer: {
    paddingHorizontal: 12,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 4,
  },
  image: {
    width: 120,
    height: 80,
    borderRadius: 6,
    marginRight: 12,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 24,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  date: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
});
