import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  Linking,
  ScrollView,
  Appearance,
} from 'react-native';
import {_getData} from '../actions';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {L} from '../Config';

const colorScheme = Appearance.getColorScheme();
const colorSchemeView = colorScheme == 'light' ? white_color : black_color;
const colorSchemeText = colorScheme == 'light' ? black_color : white_color;

class NewsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props?.route?.params,
    };
  }

  render() {
    // STATE:
    const {data} = this.state;
    // PROPS:
    // const {} = this.props;
    // OTHER
    return (
      <View
        style={{
          ...styles.container,
          backgroundColor: colorSchemeView,
        }}>
        <StatusBar
          animated={true}
          backgroundColor={colorSchemeView}
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        />
        <Ionicons
          name={L('icon_back')}
          onPress={() => this.props.navigation.goBack()}
          size={wp(5)}
          color={colorSchemeText}
          style={{padding: wp(3), alignSelf: 'flex-start'}}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={[
              styles.bold_black_text_4,
              styles.header_detail,
              {color: colorSchemeText},
            ]}>
            {data?.title}
          </Text>

          <ImageBackground
            source={{uri: data?.urlToImage}}
            resizeMode={'stretch'}
            borderTopLeftRadius={hp(5)}
            borderTopRightRadius={hp(5)}
            style={styles.image_detail}
          />

          <View
            style={[
              styles.sec_detail_view_1,
              {
                backgroundColor: colorSchemeView,
              },
            ]}>
            <View
              style={{
                ...styles.sec_detail_view_3,
                backgroundColor: colorSchemeView,
              }}>
              <View style={styles.sec_detail_view_2}>
                <View style={styles.sec_detail_date}>
                  <Ionicons
                    name="time-outline"
                    style={{marginEnd: wp(1)}}
                    size={wp(4)}
                    color={colorSchemeText}
                  />
                  <Text
                    style={[
                      styles.bold_black_text_2,
                      {
                        color: colorSchemeText,
                      },
                    ]}>
                    {data?.publishedAt}
                  </Text>
                </View>

                <Text
                  style={[
                    styles.regular_black_text_2,
                    {
                      color: colorSchemeText,
                    },
                  ]}>
                  {'||'}
                </Text>

                <View style={styles.sec_detail_editor}>
                  <MaterialCommunityIcons
                    name="account-edit"
                    size={wp(4)}
                    color={colorSchemeText}
                    style={{marginEnd: wp(1)}}
                  />
                  <Text
                    style={[
                      styles.bold_black_text_2,
                      {
                        color: colorSchemeText,
                      },
                    ]}>
                    {data?.author?.split('', 15)}
                  </Text>
                </View>
              </View>

              <Text
                style={[
                  styles.bold_black_text_4,
                  {
                    color: colorSchemeText,
                  },
                ]}>
                {data?.description}
              </Text>
              <View style={{flexDirection: 'column'}}>
                <Text
                  style={[
                    styles.light_gray_text_3,
                    {
                      color: colorSchemeText,
                    },
                  ]}>
                  {'To see more :'}
                </Text>
                <Text
                  style={{...styles.bold_gray_text_3, color: 'blue'}}
                  onPress={() => Linking.openURL(data?.url)}>
                  {data?.url}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
    s;
  }
}

export default NewsDetails;
