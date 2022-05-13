import { useState } from 'react';
import { View, Text, ScrollView, Pressable, Switch } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleNavBar from '../components/SimpleNavBar';

export default function HelpScreen({ navigation }) {
    const [switchValue,setSwitchValue] = useState(true);

    const toggleSwitch = () => {
        setSwitchValue(!switchValue);
    }
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'transparent',
        }}>
            <SimpleNavBar navigation={navigation} pageName="Help" />
            <ScrollView>
                <View style={{
                    flexDirection: 'column',
                    backgroundColor: "#fff",
                    margin: 16,
                    padding: 10,
                    borderRadius: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 10,
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: "700",  }}>About</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 14,
                            borderBottomColor: "#ccc",
                            borderBottomWidth: 0.5,
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: "400", }}>About our services</Text>
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={22}
                                color={"#ccc"}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 14,
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: "400",  }}>help desk</Text>
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={22}
                                color={"#ccc"}
                            />
                        </View>
                        
                    </View>
                </View>
                
                <View style={{
                    flexDirection: 'column',
                    backgroundColor: "#fff",
                    margin: 16,
                    padding: 10,
                    borderRadius: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 10,
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: "700",  }}>Settings</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 14,
                            borderBottomColor: "#ccc",
                            borderBottomWidth: 0.5,
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: "400", }}>Notifications</Text>
                            <Switch
                                trackColor={{ true: '#ffa6b7', false: '#cccccc' }}
                                thumbColor={switchValue ? "#f3607b" : "#eeeeee"} 
                                onValueChange={toggleSwitch}
                                value={switchValue}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 14,
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: "400", }}>Language</Text>
                            <View style={{ flexDirection:'row', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: "700", color:"#ccc" }}>English</Text>
                                <MaterialCommunityIcons
                                    name="chevron-right"
                                    size={22}
                                    color={"#ccc"}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'column',
                    backgroundColor: "#fff",
                    margin: 16,
                    padding: 10,
                    borderRadius: 10
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingVertical: 10,
                    }}>
                        <Text style={{ fontSize: 18, fontWeight: "700",  }}>Application information</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 14,
                            borderBottomColor: "#ccc",
                            borderBottomWidth: 0.5,
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: "400", }}>Application version 1.0</Text>
                            <Text style={{ fontSize: 14, fontWeight: "400", color: '#ccc' }}>A JOUR</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingVertical: 14,
                        }}>
                            <Text style={{ fontSize: 14, fontWeight: "400",  }}>Memory cashe used 19.52 ko</Text>
                            <Pressable><Text style={{ fontSize: 14, fontWeight: "400", color: '#ccc' }}>Clear</Text></Pressable>
                        </View>
                        
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}