import RNRestart from 'react-native-restart';
import I18n, { getLanguages } from 'react-native-i18n';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

I18n.fallbacks = true;
I18n.translations = {
  en: require('./translations/en.json'),
  ar: require('./translations/ar.json'),
};

export const baseUrl =
  'https://newsapi.org/v2/everything?q=tesla&from=2022-06-27&sortBy=publishedAt&apiKey=bfe3a003c7b64a27936ecc965a2c4471';

export const changeLng = async lang => {
  AsyncStorage.setItem('language', lang);
  if (lang == 'ar') {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    I18n.locale = lang;
    if (!I18nManager.isRTL) {
      RNRestart.Restart();
    }
  } else if (lang == 'en') {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    I18n.locale = lang;
    if (I18nManager.isRTL) {
      RNRestart.Restart();
    }
  }
};

export function L(key, lang) {
  let word = I18n.t(key, { locale: lang ? lang : I18n.locale });
  return word;
}
