'use strict';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';

export const wp = widthPercentageToDP;
export const hp = heightPercentageToDP;

// COMMON_COLOR

export const black_color = '#000';
export const white_color = '#fff';
export const gray_color = '#8b8989';
export const light_gray_color = '#cccc';
export const Hover_color = '#efebfa';

// APP_COLOR

export const bluesky_color = 'rgb(54,132,196)';
export const yellow_color = 'rgb(255, 255, 102)';

export const Primary_Purble_color = '#482796';
export const Secondary_color = '#b35f9a';

export const contentColor = '#8b8989';
export const borderColor = '#eaeaff';
export const textInputColor = '#000';
export const vectorIconColor = '#b8b8d2';

export const button_color = 'rgb(54,132,196)';
export const text_color = '#000';
export const placeholder_color = '#8b8989';

//FONTS
export const fontmedum = 'Inter-Medium';
export const fontLight = 'Inter-Light';
export const fontRegular = 'Inter-Regular';
export const fontBold = 'Inter-Bold';

const styles = StyleSheet.create({
  //TEXT STYLES

  light_black_text_4: {
    fontFamily: fontLight,
    color: black_color,
    fontSize: wp(4),
  },
  light_black_text_3: {
    fontFamily: fontLight,
    color: black_color,
    fontSize: wp(3),
  },
  light_black_text_2: {
    fontFamily: fontLight,
    color: black_color,
    fontSize: wp(2.5),
  },
  light_gray_text_4: {
    fontFamily: fontLight,
    color: gray_color,
    fontSize: wp(4),
  },
  light_gray_text_3: {
    fontFamily: fontLight,
    color: gray_color,
    fontSize: wp(3),
  },
  light_gray_text_2: {
    fontFamily: fontLight,
    color: gray_color,
    fontSize: wp(2.5),
  },
  light_white_text_4: {
    fontFamily: fontLight,
    color: white_color,
    fontSize: wp(4),
  },
  light_white_text_3: {
    fontFamily: fontLight,
    color: white_color,
    fontSize: wp(3),
  },
  light_white_text_2: {
    fontFamily: fontLight,
    color: white_color,
    fontSize: wp(2.5),
  },
  regular_black_text_4: {
    fontFamily: fontRegular,
    color: black_color,
    fontSize: wp(4),
  },
  regular_black_text_3: {
    fontFamily: fontRegular,
    color: black_color,
    fontSize: wp(3),
  },
  regular_black_text_2: {
    fontFamily: fontRegular,
    color: black_color,
    fontSize: wp(2.5),
  },
  regular_gray_text_4: {
    fontFamily: fontRegular,
    color: gray_color,
    fontSize: wp(4),
  },
  regular_gray_text_3: {
    fontFamily: fontRegular,
    color: gray_color,
    fontSize: wp(3),
  },
  regular_gray_text_2: {
    fontFamily: fontRegular,
    color: gray_color,
    fontSize: wp(2.5),
  },
  regular_white_text_4: {
    fontFamily: fontRegular,
    color: white_color,
    fontSize: wp(4),
  },
  regular_white_text_3: {
    fontFamily: fontRegular,
    color: white_color,
    fontSize: wp(3),
  },
  regular_white_text_2: {
    fontFamily: fontRegular,
    color: white_color,
    fontSize: wp(2.5),
  },
  medum_black_text_4: {
    fontFamily: fontmedum,
    color: black_color,
    fontSize: wp(4),
  },
  medum_black_text_3: {
    fontFamily: fontmedum,
    color: black_color,
    fontSize: wp(3),
  },
  medum_black_text_2: {
    fontFamily: fontmedum,
    color: black_color,
    fontSize: wp(2.5),
  },
  medum_gray_text_4: {
    fontFamily: fontmedum,
    color: gray_color,
    fontSize: wp(4),
  },
  medum_gray_text_3: {
    fontFamily: fontmedum,
    color: gray_color,
    fontSize: wp(3),
  },
  medum_gray_text_2: {
    fontFamily: fontmedum,
    color: gray_color,
    fontSize: wp(2.5),
  },
  medum_white_text_4: {
    fontFamily: fontmedum,
    color: white_color,
    fontSize: wp(4),
  },
  medum_white_text_3: {
    fontFamily: fontmedum,
    color: white_color,
    fontSize: wp(3),
  },
  medum_white_text_2: {
    fontFamily: fontmedum,
    color: white_color,
    fontSize: wp(2.5),
  },
  bold_black_text_4: {
    fontFamily: fontBold,
    color: black_color,
    fontSize: wp(4),
  },
  bold_black_text_3: {
    fontFamily: fontBold,
    color: black_color,
    fontSize: wp(3.5),
  },
  bold_black_text_2: {
    fontFamily: fontBold,
    color: black_color,
    fontSize: wp(2.5),
  },
  bold_gray_text_4: {
    fontFamily: fontBold,
    color: gray_color,
    fontSize: wp(4),
  },
  bold_gray_text_3: {
    fontFamily: fontBold,
    color: gray_color,
    fontSize: wp(3),
  },
  bold_gray_text_2: {
    fontFamily: fontBold,
    color: gray_color,
    fontSize: wp(2.5),
  },
  bold_white_text_4: {
    fontFamily: fontBold,
    color: white_color,
    fontSize: wp(4),
  },
  bold_white_text_3: {
    fontFamily: fontBold,
    color: white_color,
    fontSize: wp(3),
  },
  bold_white_text_2: {
    fontFamily: fontBold,
    color: white_color,
    fontSize: wp(2.5),
  },
  sec_log_text: {
    fontFamily: fontBold,
    fontSize: wp(5),
    color: black_color,
  },
  view_92:{
    width: wp(92),
    alignSelf: 'center',
  },
 container: {
    flex: 1,
    backgroundColor: white_color,
  },
  ////////////////////////App/////////////
 
  //NEWS
  header_right_view: {
    flexDirection: 'row',
    width: wp(20),
    justifyContent: 'space-around',
  },
  sec_news_card: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: wp(1),
    borderWidth: wp(0.3),
    borderColor: borderColor,
    backgroundColor: white_color,
    elevation: wp(5),
    borderRadius: wp(2),
  },
  image_news: {
    width: wp(35),
    height: wp(23),
    borderRadius: wp(2),
  },
  sec_title: {
    flexDirection: 'column',
    width: wp(58),
    alignContent: 'center',
    justifyContent: 'center',
    marginStart: wp(2),
    padding: wp(1),
  },
  //NEWS DETAILS
  header_detail: {
    width: wp(85),
    alignSelf: 'center',
    padding: wp(1),
  },
  image_detail: {
    width: wp(100),
    height: hp(70),
  },
  sec_detail_view_1: {
    flex: 1,
    backgroundColor: white_color,
    marginTop: hp(-6),
    borderTopRightRadius: hp(5),
    borderTopLeftRadius: hp(5),
  },
  sec_detail_view_2:{
    flexDirection: 'row',
    width: wp(85),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: hp(2),
  },
  sec_detail_date:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sec_detail_editor:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default styles;
