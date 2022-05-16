import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import styles, {black_color, white_color, wp} from './Assets/style/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CustomHeader} from './Assets/common/CustomHeader';

import {connect} from 'react-redux';
import {_getData} from '../actions';

class News extends Component {
  constructor(props) {
    const {_getData} = props;
    super(props);
    this.state = {
      refreshing: false,
    };
    _getData();
  }

  onRefresh = () => {
    this.setState({refreshing: true});
    _getData.then(() => {
      this.setState({refreshing: false});
    });
  };

  renderNews = ({item, index}) => {
    const ShortDetail = item.description.split('', 40);
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('NewsDetails', item)}>
        <View key={index} style={styles.sec_news_card}>
          <Image
            source={{uri: item?.urlToImage}}
            resizeMode={'cover'}
            style={styles.image_news}
          />
          <View style={styles.sec_title}>
            <Text style={styles.bold_black_text_3}>{item?.title}</Text>
            <Text style={styles.light_black_text_2}>
              {ShortDetail}
              {'...'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    // STATE:
    const {refreshing} = this.state;
    // PROPS:
    const {data} = this.props;
    // OTHER

    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor={white_color}
          barStyle={'dark-content'}
        />
        <CustomHeader
          left={<MaterialIcons name="menu" size={wp(5)} color={black_color} />}
          screen_name={'NEWS'}
          right={
            <View style={styles.header_right_view}>
              <MaterialCommunityIcons
                name="filter"
                size={wp(5)}
                color={black_color}
              />
              <MaterialIcons name="language" size={wp(5)} color={black_color} />
              <MaterialIcons name="search" size={wp(5)} color={black_color} />
            </View>
          }
        />

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderNews}
          keyExtractor={(item, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={this.onRefresh}
        />
      </View>
    );
  }
}

const mapStateToProps = ({auth}) => {
  const {data} = auth;
  return {data};
};

export default connect(mapStateToProps, {
  _getData,
})(News);
