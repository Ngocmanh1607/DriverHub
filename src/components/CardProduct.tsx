import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import ActionButton from './ActionButton';

import colors from '../theme/color';
import { IFire, IFireCircle } from '../assets/svg';

interface CardProductProps {
  image: any;
  title: string;
  price: number;
  originalPrice?: number;
  remaining?: number;
  soldCount?: number;
  progressPercentage?: number;
  showProgressBar?: boolean;
  showActionButton?: boolean;
  actionButtonText?: string;
  onPress?: () => void;
  onActionPress?: () => void;
  style?: any;
  imageStyle?: any;
}

const CardProduct: React.FC<CardProductProps> = ({
  image,
  title,
  price,
  originalPrice,
  remaining,
  soldCount,
  progressPercentage = 0,
  showProgressBar = false,
  showActionButton = false,
  actionButtonText = 'Mua ngay',
  onPress,
  onActionPress,
  style,
  imageStyle,
}) => {
  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const formatPrice = (amount: number) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' ₫';
  };

  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Image source={image} style={[styles.image, imageStyle]} />

      <View style={styles.content}>
        {remaining && (
          <LinearGradient
            colors={['#ffd666', '#ffab00']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.remainingWrapper}
          >
            <View style={styles.remainingContainer}>
              <IFireCircle width={12} height={12} />
              <Text style={styles.remainingText}>
                Chỉ còn {remaining} sản phẩm
              </Text>
            </View>
          </LinearGradient>
        )}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View>
          <Text style={styles.price}>{formatPrice(price)}</Text>
          {originalPrice && (
            <View style={styles.originalPriceContainer}>
              <Text style={styles.originalPrice}>
                {formatPrice(originalPrice)}
              </Text>
              {discountPercentage > 0 && (
                <Text style={styles.discount}>-{discountPercentage}%</Text>
              )}
            </View>
          )}
        </View>

        {showProgressBar && (
          <View style={styles.progressContainer}>
            <View style={styles.progressBarWrapper}>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={['#DC2626', '#EA580C', '#FECACA']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.progressBar}
                >
                  <View
                    style={[
                      styles.progressFill,
                      { width: `${Math.min(progressPercentage, 100)}%` },
                    ]}
                  />
                  <View
                    style={[
                      styles.progressHandle,
                      { left: `${Math.min(progressPercentage, 100)}%` },
                    ]}
                  >
                    <View style={styles.handleHighlight} />
                  </View>
                </LinearGradient>
              </View>
              <IFire
                width={18}
                height={18}
                style={[
                  styles.fireIcon,
                  { left: `${Math.min(progressPercentage, 100)}%` },
                ]}
              />
            </View>
            {soldCount && (
              <Text style={styles.soldCount}>
                Đã bán {formatNumber(soldCount)} sản phẩm
              </Text>
            )}
          </View>
        )}

        {showActionButton && (
          <ActionButton
            title={actionButtonText}
            onPress={onActionPress}
            style={styles.actionButton}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    width: 148,
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 12,
  },
  image: {},
  content: {
    marginTop: 8,
    gap: 12,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.errorDark,
    marginBottom: 8,
  },
  originalPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  originalPrice: {
    fontSize: 12,
    color: colors.textDisabled,
    textDecorationLine: 'line-through',
  },
  discount: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.red700,
  },
  progressContainer: {
    height: 40,
    justifyContent: 'center',
  },
  progressBarWrapper: {
    position: 'relative',
    height: 6,
    marginBottom: 6,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.blue200,
    borderRadius: 3,
    position: 'relative',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.red700,
    borderRadius: 3,
  },
  progressHandle: {
    position: 'absolute',
    top: -2,
    width: 10,
    height: 10,
    backgroundColor: colors.blue500,
    borderRadius: 5,
    marginLeft: -5,
  },
  soldCount: {
    fontSize: 11,
    color: colors.textDisabled,
  },
  actionButton: {},
  fireIcon: {
    position: 'absolute',
    top: -5,
    marginLeft: -5,
    zIndex: 2,
  },
  handleHighlight: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    opacity: 0.8,
  },
  remainingWrapper: {
    height: 16,
    borderRadius: 25,
  },
  remainingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  remainingText: {
    fontSize: 8,
    color: colors.errorDark,
    fontWeight: '400',
    textAlign: 'center',
  },
});
