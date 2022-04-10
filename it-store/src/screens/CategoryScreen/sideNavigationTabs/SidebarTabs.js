import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';


const SidebarTabs = ({ navigation, descriptors }) => {
  const { routes, index } = navigation.state;

  return (
    <View style={styles.tabContainer}>
        {routes.map((route, tabIndex) => {
            const { routeName, params } = route;
            const { tabName } = params || {};
            const tabStyle = tabIndex === index ? styles.tabFocused : styles.tab;

            return (
                <TouchableOpacity
                    onPress={() => navigation.navigate(routeName)}
                    style={tabStyle}
                    key={route.routeName}
                >
                    <View style={{ flex: 1, }}>
                        <Text style={{ color: 'black', textAlign: "center", }}>
                            {tabName}
                        </Text>
                    </View>
                </TouchableOpacity>
            );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { position: 'absolute', top: 0 },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
  },
  tabFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: '100%',
    backgroundColor: '#f2eff0',
    borderLeftColor: 'black',
    borderLeftWidth: 5,
    overflow: 'hidden',
    paddingHorizontal: 15,
  },
  tabContainer: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
});

export default SidebarTabs;

