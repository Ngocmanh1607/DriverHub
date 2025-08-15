import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  TextStyle,
} from 'react-native';
import colors from '../theme/color';
import { IDArrowRight } from '../assets/svg';

type TitleProps = {
  icon?: React.ReactNode;
  title: string;
  showViewAll?: boolean;
  onViewAllPress?: () => void;
  viewAllText?: string;
  titleStyle?: StyleProp<TextStyle>;
  viewAllTextStyle?: StyleProp<TextStyle>;
  arrowIconColor?: string;
};

const Title: React.FC<TitleProps> = ({
  icon,
  title,
  showViewAll = false,
  onViewAllPress,
  viewAllText = 'Xem tất cả',
  titleStyle,
  viewAllTextStyle,
  arrowIconColor = colors.primary,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </View>

      {showViewAll && (
        <TouchableOpacity style={styles.viewAllButton} onPress={onViewAllPress}>
          <Text style={[styles.viewAllText, viewAllTextStyle]}>
            {viewAllText}
          </Text>
          <IDArrowRight width={12} height={12} fill={arrowIconColor} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    lineHeight: 24,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 8,
    fontWeight: '600',
    color: colors.primary,
    marginRight: 4,
  },
});

export default Title;
