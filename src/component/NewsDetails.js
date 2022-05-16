import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {_getData} from '../actions';
import {connect} from 'react-redux';
import styles, {black_color, hp, white_color, wp} from './Assets/style/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomHeader} from './Assets/common/CustomHeader';


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
      <View style={styles.container}>
        <Ionicons
          name="chevron-back"
          onPress={() => this.props.navigation.goBack()}
          size={wp(5)}
          color={black_color}
          style={{padding: wp(3)}}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={[styles.bold_black_text_4, styles.header_detail]}>
            {data?.title}
          </Text>

          <ImageBackground
            source={{uri: data?.urlToImage}}
            resizeMode={'stretch'}
            style={styles.image_detail}
          />

          <View style={styles.sec_detail_view_1}>
            <View style={styles.view_92}>
              <View style={styles.sec_detail_view_2}>
                <View style={styles.sec_detail_date}>
                  <Ionicons
                    name="time-outline"
                    style={{marginEnd: wp(1)}}
                    size={wp(4)}
                    color={black_color}
                  />
                  <Text style={styles.bold_black_text_2}>
                    {data?.publishedAt}
                  </Text>
                </View>

                <Text style={styles.regular_black_text_2}>{'||'}</Text>

                <View style={styles.sec_detail_editor}>
                  <MaterialCommunityIcons
                    name="account-edit"
                    size={wp(4)}
                    color={black_color}
                    style={{marginEnd: wp(1)}}
                  />
                  <Text style={styles.bold_black_text_2}>{data?.author}</Text>
                </View>
              </View>

              <Text style={styles.bold_black_text_4}>{data?.description}</Text>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.light_gray_text_3}>{'To see more :'}</Text>
                <Text
                  style={{...styles.bold_gray_text_2, color: 'blue'}}
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
