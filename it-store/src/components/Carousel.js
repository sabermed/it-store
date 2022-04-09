import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'


const { width, heigth } = Dimensions.get('window');
// infinite scrolling function
function infiniteScroll(dataList, _flatlist) {
    const numberOfData = dataList.length;
    let scrollValue = 0, scrolled = 0;
    if (_flatlist !== null) {
        try {
            setInterval(function () {
                scrolled++
                if (scrolled <= numberOfData) {
                    scrollValue = scrollValue + width;
                } else {
                    scrollValue = 0;
                    scrolled = 0;
                }
                _flatlist.current.scrollToOffset({ animated: true, offset: scrollValue });
            }, 3000);
        } catch (e) {
            console.log('something went wrong');
        }
    }
}

// carousel main function
const Carousel = ({ data }) => {
    let _flatlist = useRef();
    let scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);

    useEffect(()=> {
        // infiniteScroll(data, _flatlist);
    })

    if (data && data.length) {
        return (
            <View>
                <Animated.FlatList data={data}
                    ref = {_flatlist}
                    keyExtractor={(item, index) => 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    contentContainerStyle={{}}
                    snapToAlignment="center"
                    scrollEventThrottle={16}
                    decelerationRate={"fast"}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => {
                        return <CarouselItem item={item} />
                    }}
                    onScroll={Animated.event(
                        [
                            {nativeEvent: {contentOffset: { x: scrollX }}}
                        ],
                        { useNativeDriver: true }
                    )}
                />
                {/* **********************  block dot view  *****************************  */}
                <View style={styles.dotView}>
                    {data.map((_, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return (
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#fff', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    console.log('Please provide Images')
    return null
}

const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    }
})

export default Carousel;