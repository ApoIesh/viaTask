import React, {Component} from 'react';
import {View, Text, Appearance} from 'react-native';
import styles, {
  black_color,
  borderColor,
  fontBold,
  fontmedum,
  hp,
  white_color,
  wp,
} from '../style/styles';

const colorScheme = Appearance.getColorScheme();

const CustomHeader = ({
  width,
  height,
  left,
  right,
  screen_name,
  color,
  backgroundColor,
}) => {
  return (
    <View>
      <View
        style={{
          width: width ? width : wp(100),
          height: height ? height : hp(8),
          // marginVertical:hp(2),
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(3),
          position: 'relative',
          backgroundColor: {
            backgroundColor:
              colorScheme === 'light' ? black_color : white_color,
          },
          borderBottomWidth: wp(0.2),
          borderColor: borderColor,
        }}>
        {left ? (
          left
        ) : (
          <View
            style={{
              width: wp(20),
              height: hp(10),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}

        {right ? (
          right
        ) : (
          <View
            style={{
              width: wp(20),
              height: hp(10),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </View>
      <View
        style={{
          width: wp(100),
          height: hp(8),
          // marginVertical:hp(2),
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          position: 'absolute',
        }}>
        {screen_name ? (
          <Text
            style={{
              fontSize: wp(4.5),
              fontFamily: fontmedum,
              color: color ? color : black_color,
            }}>
            {screen_name}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export {CustomHeader};
