import React, {Component} from 'react';
import {
  View,
  Text,
  Switch,
  Appearance,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Switchtoggle from './Assets/common/Switchtoggle';
import styles, {
  black_color,
  hp,
  Secondary_color,
  white_color,
  wp,
} from './Assets/style/styles';
import {changeLng, L} from '../Config';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: false,
      Language: true,
    };
  }

  checkLang(lang) {
    changeLng(lang, 1);
    if (L('lang') == lang) {
      this.props.navigation.navigate('TabComponent');
    }
  }

  render() {
    const {isEnabled, Language} = this.state;

    const colorScheme = Appearance.getColorScheme();

    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? hp(7) : 0,
          backgroundColor: colorScheme == 'light' ? white_color : black_color,
        }}>
        <View style={styles.view_92}>
          <Switch
            trackColor={{false: '#767577', true: '#b35f9a'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#482796'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.setState({isEnabled: !isEnabled})}
            value={isEnabled}
          />

          <View style={styles.sec_lang_View_1}>
            <Text
              style={[
                styles.bold_gray_text_4,
                {
                  color: colorScheme == 'light' ? black_color : white_color,
                },
              ]}>
              {L('language')}
            </Text>
            <View style={styles.sec_lang_View_2}>
              <View style={styles.sec_lang_View_3}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    this.checkLang('en'), this.setState({Language: true});
                  }}>
                  <View
                    style={{
                      ...styles.sec_lang_View_4,
                      backgroundColor:
                        Language == true ? Secondary_color : white_color,
                    }}>
                    <Text
                      style={{
                        ...styles.bold_black_text_4,
                        color: Language == true ? white_color : black_color,
                      }}>
                      en
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => {
                    this.checkLang('ar'), this.setState({Language: false});
                  }}>
                  <View
                    style={{
                      ...styles.sec_lang_View_5,
                      backgroundColor:
                        Language == false ? Secondary_color : white_color,
                    }}>
                    <Text
                      style={{
                        ...styles.bold_black_text_4,
                        color: Language == false ? white_color : black_color,
                      }}>
                      ع
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Settings;
