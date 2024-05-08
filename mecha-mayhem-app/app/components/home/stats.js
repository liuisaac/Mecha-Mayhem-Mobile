import { View, Text, FlatList, Animated } from "react-native";
import React, { useRef, useState } from "react";
import { Image } from "expo-image";
import Paginator from "./subcomponents/paginator";

const stats = require("./temp/data.json");

const Stats = () => {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setIndex(viewableItems[0].index);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    return (
        <View className="">
            <Text
                className="text-sm ml-6 -mb-4"
                style={{ fontFamily: "Bebas Neue" }}
            >
                STATISTICS
            </Text>
            <Image
                source={require("./assets/example_stats.png")}
                className="w-[100vw] h-[30vh]"
                contentFit="contain"
            />
            <View className="w-full h-52 bg-white mb-10 flex flex-col items-center justify-start">
                <FlatList
                    data={stats}
                    renderItem={({ item }) => (
                        <View className="w-[100vw] bg-white flex flex-row justify-center items-center">
                            <Text
                                className="text-5xl"
                                style={{ fontFamily: "Bebas Neue" }}
                            >
                                {item.metric}:
                            </Text>
                            <Text
                                className="text-5xl ml-5"
                                style={{ fontFamily: "Bebas Neue" }}
                            >
                                {item.value}
                            </Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: {x: scrollX }}}], {
                        useNativeDriver: false
                    })}
                    onViewableItemsChanged={viewableItemsChanged}
                    scrollEventThrottle={32}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
                <Paginator data={stats} scrollX={scrollX}/>
            </View>
        </View>
    );
};

export default Stats;
