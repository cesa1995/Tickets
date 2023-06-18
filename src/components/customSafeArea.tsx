//context to ensure a safe area where the app components do not overlap with the internal interface of the phone.

import React, {FC} from 'react';
import {
  ColorValue,
  Platform,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
  View,
} from 'react-native';
import colors from 'constanst/colors';

const defaults: {
  barStyle: StatusBarStyle;
  backgroundColor: ColorValue;
} = {
  barStyle: 'dark-content',
  backgroundColor: colors.backgroundColor,
};

const statusBarHeight = Platform.select({
  ios: 0,
  android: StatusBar.currentHeight || 0,
  default: 0,
});

const CustomSafeArea = (
  Component: FC | FC<any>,
  {barStyle, backgroundColor} = defaults,
) => {
  return (props: any) => (
    <SafeAreaView>
      <View style={{marginTop: statusBarHeight}}>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle={barStyle}
          translucent
          animated
        />
        <Component {...props} />
      </View>
    </SafeAreaView>
  );
};

export default CustomSafeArea;
