import { icons } from '@/constants';
import { Stack, Tabs } from 'expo-router';
import { Image, View } from 'react-native';
import 'react-native-reanimated';

const TabIcon = () => {
  return (
    <View>
      <View>
        <Image />
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: 'white',
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon:(focused)=><TabIcon
          focused={focused} source={icons.home}
          />
        }}
      />
    </Tabs>
  );
};

export default Layout;
