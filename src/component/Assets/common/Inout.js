import React from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import {
  borderColor,
  wp,
  bluesky_color,
  text_color,
  placeholder_color,
  fontBold,
  hp,
} from '../style/styles';

const Input = ({
  placeholder,
  value,
  onChangeText,
  returnKeyType,
  secureTextEntry,
  keyboardType,
  maxLength,
  editable,
  right,
  left,
  placeholderTextColor,
  multiline,
  numberOfLines,
  onBlur,
  onFocus,
  marginBottom,
  height,
  width,
  colorText,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: wp(0.5),
        borderColor: borderColor,
        marginBottom: marginBottom ? marginBottom : 0,
        height: height ? height : hp(8),
        width: width ? width : wp(92),
        alignSelf: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {right && right}
        <TextInput
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={editable}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          returnKeyType={returnKeyType}
          keyboardType={keyboardType}
          style={{
            flex: 1,
            alignSelf: 'flex-start',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            direction: 'inherit',
            justifyContent: 'flex-start',
            color: colorText ? colorText : text_color,
            fontFamily: fontBold,
            fontSize: wp(3.2),
          }}
          onChangeText={onChangeText}
          value={value}
          selectionColor={bluesky_color}
          placeholderTextColor={
            placeholderTextColor ? placeholderTextColor : placeholder_color
          }
        />
        {left && left}
      </View>
    </View>
  );
};

export { Input };
