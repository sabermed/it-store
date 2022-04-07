import React from 'react';
import { ScrollView, View } from 'react-native';
import { createNavigator, TabRouter } from 'react-navigation';

import SidebarTabs from './SidebarTabs';

const SidebarTabsNavigator = ({ navigation, descriptors }) => {
  const { routes, index } = navigation.state;
  const descriptor = descriptors[routes[index].key];

  const ActiveScreen = descriptor.getComponent();

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <View style={{ width: '25%' }}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
          <SidebarTabs descriptors={descriptors} navigation={navigation} />
        </ScrollView>
      </View>
      <View style={{ width: '75%' }}>
        <ActiveScreen  navigation={descriptor.navigation} />
      </View>
    </View>
  );
};

const createSidebarNavigator = (routeConfigMap, sidebarNavigatorConfig) => {
  const customTabRouter = TabRouter(routeConfigMap, sidebarNavigatorConfig);

  return createNavigator(SidebarTabsNavigator, customTabRouter, {});
};

export default createSidebarNavigator;
