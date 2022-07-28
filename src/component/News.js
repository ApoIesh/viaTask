import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Appearance,
  Platform,
} from 'react-native';
import styles, {
  white_color,
  black_color,
  wp,
  Secondary_color,
  hp,
} from './Assets/style/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CustomHeader } from './Assets/common/CustomHeader';
import { Input } from './Assets/common/Inout';
import { connect } from 'react-redux';
import { _getData } from '../actions';
import { L } from '../Config';

const colorScheme = Appearance.getColorScheme();
const colorSchemeView = colorScheme == 'light' ? white_color : black_color;
const colorSchemeText = colorScheme == 'light' ? black_color : white_color;

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      search: false,
      TextSearch: null,
      NewsData: [],
      refreshing: false,
      resolve: null,
    };
    this.props._getData();
  }

  renderNews = ({ item, index }) => {
    const ShortDetail = item?.description?.split('', 40);
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => this.props.navigation.navigate('NewsDetails', item)}>
        <View
          key={index}
          style={[styles.sec_news_card, { backgroundColor: colorSchemeView }]}>
          <Image
            source={{ uri: item?.urlToImage }}
            resizeMode={'cover'}
            style={styles.image_news}
          />
          <View style={styles.sec_title}>
            <Text style={{ ...styles.bold_black_text_3, color: colorSchemeText }}>
              {item?.title}
            </Text>
            <Text style={[styles.light_black_text_2, { color: colorSchemeText }]}>
              {ShortDetail}
              {'...'}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  Refresh = () => {
    const { refreshing } = this.state;
    const wait = timeout => {
      return new Promise(resolve => setTimeout(resolve, timeout));
    };
    const onRefresh = () => {
      this.setState({ refreshing: true });
      this.props._getData();
      wait(1000).then(() => this.setState({ refreshing: false }));
    };
    return (
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh.bind(this)}
      />
    );
  };

  render() {
    // STATE:
    const { refreshing, search, TextSearch, NewsData } = this.state;
    // PROPS:
    const { data } = this.props;
    // OTHER
    // console.log(NewsData);

    return (
      <View style={{ flex: 1, backgroundColor: colorSchemeView }}>
        <StatusBar
          animated={true}
          backgroundColor={colorSchemeView}
          barStyle={colorScheme === 'light' ? 'dark-content' : 'light-content'}
        />
<View style={{
  marginTop:Platform.OS==="ios"?hp(3):0
}}>
  {search == false ? (
          <CustomHeader
            screen_name={L('news')}
            color={colorSchemeText}
            right={
              <TouchableOpacity
                onPress={() => this.setState({ search: !search })}>
                <MaterialIcons
                  name="search"
                  size={wp(5)}
                  color={Secondary_color}
                />
              </TouchableOpacity>
            }
          />
        ) : (
          <Input
            left={
              <TouchableOpacity
                onPress={() => this.setState({ search: !search, TextSearch: null })}>
                <MaterialIcons
                  name="close"
                  size={wp(5)}
                  color={Secondary_color}
                />
              </TouchableOpacity>
            }
            onChangeText={TextSearch => this.searchFilterFunction({ TextSearch })}
            value={TextSearch}
            placeholder={L('search')}
            keyboardType="numeric"
            placeholderTextColor={colorSchemeText}
            colorText={colorSchemeText}
          />
        )}
</View>
        

        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderNews}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={this.Refresh()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { data } = auth;

  return { data };
};

export default connect(mapStateToProps, {
  _getData,
})(News);
