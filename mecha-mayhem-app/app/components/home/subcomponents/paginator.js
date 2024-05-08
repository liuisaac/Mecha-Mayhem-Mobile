import { View, Text, Animated, useWindowDimensions } from "react-native";
import React from "react";

const Paginator = ({ data, scrollX }) => {
    const { width } = useWindowDimensions();
    return (
        <View className="flex flex-row h-2 absolute mt-44">
            {data.map((_, i) => {
                const inputRange = [
                    (i - 1) * width,
                    i * width,
                    (i + 1) * width,
                ];
                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3], // Adjust opacity values as needed
                    extrapolate: "clamp",
                });
                return (
                    <Animated.View
                        style={{ backgroundColor:'#a5a5a5', opacity }}
                        className={`w-2 h-2 mx-1 rounded-full`}
                        key={i.toString()}
                    >
                    </Animated.View>
                );
            })}
        </View>
    );
};

export default Paginator;
