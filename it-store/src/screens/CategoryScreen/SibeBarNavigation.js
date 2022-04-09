import { createAppContainer } from 'react-navigation';
import { createSidebarNavigator } from './sideNavigationTabs';
import CategoryContentPage from '../../components/CategoryContentPage';
let navigation;
const _navigationTabs = {
  CategoryContentPage: {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Home',
    },
  },
  CategoryContentPage : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  sddddddf: {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Home',
    },
  },
  DetadddddilsScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  HomeSfbdfcreen: {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Home',
    },
  },
  DetailsdfScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  HomeScrdgdeen: {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Home',
    },
  },
  DetailsdrgScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  DetailqssdfScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  HomeSsqcrdgdeen: {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Home',
    },
  },
  DetailssqdrgScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  DetaqsilsdfScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
  HomqseScrdgdeen: {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Home',
    },
  },
  DetqsailsdrgScreen : {
    screen: CategoryContentPage,
    params: {
      navigation:{navigation},
      tabName: 'Details Screen',
    },
  },
}
const sidebarNavigator = createSidebarNavigator(
  _navigationTabs,
  {
    initialRouteName: 'CategoryContentPage',
  },
);

export default createAppContainer(sidebarNavigator);
