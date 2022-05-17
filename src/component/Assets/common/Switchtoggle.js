import React, {useState} from 'react';
import {View, Switch, StyleSheet} from 'react-native';

const Switchtoggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#b35f9a'}}
        thumbColor={isEnabled ? '#f4f3f4' : '#482796'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Switchtoggle;
