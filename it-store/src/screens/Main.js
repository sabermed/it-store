import { StyleSheet, Text, View, StatusBar } from 'react-native';
import HeaderTabs from "../components/HeaderTabs";
import BottomNavigationBar from "../components/BottomNavigationBar";

export default function Main() {
    return (
        <View style={{ flex: 1,paddingTop: StatusBar.currentHeight, }}>
            <BottomNavigationBar />
        </View>
    );
}

