import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../features/main/HomeScreen';
import CategoryScreen from '../features/category/CategoryScreen';
import CartScreen from '../features/cart/CartScreen';
import NewsScreen from '../features/news/NewsScreen';
import AccountScreen from '../features/account/AccountScreen';

import { IHome, ICategory, ICart, IBill, IAccount } from '../assets/svg';
import colors from '../theme/color';

type TabIconProps = {
  size: number;
  focused: boolean;
  IconComponent: React.ComponentType<any>;
  badgeCount?: number;
};

const TabIcon: React.FC<TabIconProps> = ({
  size,
  focused,
  IconComponent,
  badgeCount,
}) => (
  <View style={styles.tabContainer}>
    {focused && (
      <>
        <View style={styles.indicator} />
        <View style={styles.gradientBackground} />
      </>
    )}
    <View style={styles.iconContainer}>
      <IconComponent
        width={size}
        height={size}
        color={focused ? colors.primary : colors.secondary}
      />
      {badgeCount && badgeCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>
            {badgeCount > 99 ? '99+' : badgeCount.toString()}
          </Text>
        </View>
      )}
    </View>
  </View>
);

const TAB_CONFIGS = [
  {
    name: 'Home',
    component: HomeScreen,
    label: 'Trang chủ',
    icon: IHome,
  },
  {
    name: 'Cart',
    component: CartScreen,
    label: 'Giỏ hàng',
    icon: ICart,
  },
  {
    name: 'Category',
    component: CategoryScreen,
    label: 'Danh mục',
    icon: ICategory,
  },
  {
    name: 'News',
    component: NewsScreen,
    label: 'Tin tức',
    icon: IBill,
  },
  {
    name: 'Account',
    component: AccountScreen,
    label: 'Tài khoản',
    icon: IAccount,
  },
] as const;

const getScreenOptions = () => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.secondary,
  tabBarStyle: styles.tabBarStyle,
  tabBarIconStyle: { marginBottom: 8 },
});

const createTabOptions = (
  label: string,
  IconComponent: React.ComponentType<any>,
  badgeCount?: number,
) => ({
  tabBarLabel: label,
  tabBarIcon: ({ size, focused }: { size: number; focused: boolean }) => (
    <TabIcon
      size={size}
      focused={focused}
      IconComponent={IconComponent}
      badgeCount={badgeCount}
    />
  ),
});

const Tab = createBottomTabNavigator();
const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions()}>
      {TAB_CONFIGS.map(({ name, component, label, icon }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={createTabOptions(
            label,
            icon,
            name === 'Cart' ? 12 : undefined,
          )}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    alignItems: 'center',
    position: 'relative',
    paddingTop: 8,
  },
  iconContainer: {
    position: 'relative',
  },
  indicator: {
    position: 'absolute',
    top: -5,
    width: 50,
    height: 5,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  gradientBackground: {
    position: 'absolute',
    top: -4,
    width: 50,
    height: 10,
    backgroundColor: colors.primary,
    opacity: 0.05,
    borderRadius: 4,
  },
  badge: {
    position: 'absolute',
    top: -6,
    right: -8,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 8,
    fontWeight: '500',
  },
  tabBarStyle: {
    backgroundColor: colors.background,
    borderRadius: 20,
    overflow: 'hidden',
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 20,
    right: 20,
  },
});

export default MainTabNavigator;
