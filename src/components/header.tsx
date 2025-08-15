import {
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ISearch from '../assets/svg/ISearch.svg';
import colors from '../theme/color';
import ICamera from '../assets/svg/ICamera.svg';
import IBell from '../assets/svg/IBell.svg';
import IArrowLeft from '../assets/svg/IArrowLeft.svg';

type HeaderProps = {
  onSearch?: (text: string) => void;
  onCamera?: () => void;
  onBell?: () => void;
  onBack?: () => void;
  isBack?: boolean;
  searchValue?: string;
  onSearchChange?: (text: string) => void;
};

const Header = ({
  onSearch,
  onCamera,
  onBell,
  isBack,
  onBack,
  searchValue = '',
  onSearchChange,
}: HeaderProps) => {
  const insets = useSafeAreaInsets();
  const [searchText, setSearchText] = useState(searchValue);

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    onSearchChange?.(text);
  };

  const handleSearch = () => {
    onSearch?.(searchText);
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
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
        <View style={styles.searchButton}>
          <View style={styles.searchInputContainer}>
            <TouchableOpacity
              style={styles.searchIconContainer}
              onPress={handleSearch}
              activeOpacity={0.8}
            >
              <ISearch width={20} height={20} color={colors.textDisabled} />
            </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              placeholder="Tìm kiếm sản phẩm"
              placeholderTextColor={colors.textDisabled}
              value={searchText}
              onChangeText={handleSearchChange}
              onSubmitEditing={handleSearch}
              returnKeyType="search"
            />
          </View>
          <TouchableOpacity onPress={onCamera}>
            <ICamera width={20} height={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={onBell}>
          <View style={styles.dot} />
          <IBell
            width={24}
            height={24}
            style={styles.bellIcon}
            color={colors.background}
          />
        </TouchableOpacity>
      </View>
    </View>
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
    marginBottom: 40,
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
  searchInput: {
    fontSize: 16,
    color: colors.text,
    flex: 1,
    padding: 0,
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
