import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import {styles} from '../assets/AppStyles';
import Loader from '../components/Loader';

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Loader loading={loading} />

        <Text>Welcome Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
