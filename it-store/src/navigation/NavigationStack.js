import { createAppContainer } from 'react-navigation';
import { createSidebarNavigator } from '../tabs';
import CategoryItem from '../components/CategoryItem';

const _navigationTabs = {
    CategoryItem: {
      screen: CategoryItem,
      params: {
        tabName: 'Home',
      },
    },
    CategoryItem : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    sddddddf: {
      screen: CategoryItem,
      params: {
        tabName: 'Home',
      },
    },
    DetadddddilsScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    HomeSfbdfcreen: {
      screen: CategoryItem,
      params: {
        tabName: 'Home',
      },
    },
    DetailsdfScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    HomeScrdgdeen: {
      screen: CategoryItem,
      params: {
        tabName: 'Home',
      },
    },
    DetailsdrgScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    DetailqssdfScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    HomeSsqcrdgdeen: {
      screen: CategoryItem,
      params: {
        tabName: 'Home',
      },
    },
    DetailssqdrgScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    DetaqsilsdfScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
    HomqseScrdgdeen: {
      screen: CategoryItem,
      params: {
        tabName: 'Home',
      },
    },
    DetqsailsdrgScreen : {
      screen: CategoryItem,
      params: {
        tabName: 'Details Screen',
      },
    },
  }
const sidebarNavigator = createSidebarNavigator(
  _navigationTabs,
  {
    initialRouteName: 'CategoryItem',
  },
);

export default createAppContainer(sidebarNavigator);
