import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import { ISearch, ICamera, IBell, IArrowLeft } from '../assets/svg';
import colors from '../theme/color';

type HeaderProps = {
  onSearch?: () => void;
  onCamera?: () => void;
  onBell?: () => void;
  onBack?: () => void;
  isBack?: boolean;
};

const Header = ({
  onSearch,
  onCamera,
  onBell,
  isBack,
  onBack,
}: HeaderProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.searchContainer}>
        {isBack && (
          <TouchableOpacity onPress={onBack} style={styles.backIcon}>
            <IArrowLeft
              width={32}
              height={32}
              color={colors.background}
              onPress={onBack}
            />
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
          <View style={styles.searchInputContainer}>
            <View style={styles.searchIconContainer}>
              <ISearch width={20} height={20} color={colors.textDisabled} />
            </View>
            <Text style={styles.searchText}>Tìm kiếm sản phẩm</Text>
          </View>
          <ICamera width={20} height={20} onPress={onCamera} />
        </TouchableOpacity>
        <View style={styles.bellIconContainer}>
          <View style={styles.dot} />
          <IBell
            width={20}
            height={20}
            style={styles.bellIcon}
            color={colors.background}
            onPress={onBell}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.primaryDark,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    marginHorizontal: 12,
    marginBottom: 20,
  },
  searchButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.background,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchIconContainer: {
    marginRight: 8,
  },
  searchText: {
    fontSize: 16,
    color: colors.textDisabled,
    flex: 1,
  },
  bellIcon: {
    marginLeft: 22,
    marginRight: 12,
  },
  backIcon: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  dot: {
    width: 8,
    height: 8,
    backgroundColor: colors.red,
    borderRadius: 4,
    position: 'absolute',
    top: 0,
    right: 11,
    zIndex: 1,
  },
});
