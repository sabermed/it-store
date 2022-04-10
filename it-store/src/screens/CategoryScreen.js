import {useState} from 'react';
import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import TopNavBar from '../components/TopNavBar';
import CategoryContentPage from '../components/CategoryContentPage';
import { _categoryTabs } from '../data/Data';

export default function CategoryScreen({ navigation }) {

    const [selectedCategory, setSelectCategory] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#e9e9e9', }}>
            <TopNavBar navigation={navigation} />
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: '23%' }}>
                    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >
                        <View style={styles.tabContainer}>
                            {_categoryTabs.map((item, index) => {
                                return (
                                    <Pressable
                                        key={index}
                                        onPress={() => { setSelectCategory(index) }}
                                        style={selectedCategory === index ? styles.tabFocused : styles.tab}
                                    >
                                        <View style={{ flex: 1, }}>
                                            <Text style={{ fontSize: 12, color: 'black', textAlign: "center", }}>
                                                {item}
                                            </Text>
                                        </View>
                                    </Pressable>
                                )
                            })
                            }
                        </View>
                    </ScrollView>
                </View>
                <View style={{ width: '77%' }}>
                    <CategoryContentPage category={_categoryTabs[selectedCategory]} navigation={navigation} />
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: '100%',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
  },
  tabFocused: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    width: '100%',
    backgroundColor: '#e9e9e9',
    borderLeftColor: 'black',
    borderLeftWidth: 5,
    overflow: 'hidden',
    borderBottomColor: '#e9e9e9',
    borderBottomWidth: 2,
  },
  tabContainer: {
    height: '100%',
    backgroundColor: '#ffffff',
  },
});