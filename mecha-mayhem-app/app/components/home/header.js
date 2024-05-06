import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

const Header = () => {
    return (
        <View className="flex flex-col justify-center items-center">
            <Image
                source={require("./assets/header.svg")}
                className="w-[100vw] h-[30vh] -mt-[10vh]"
            />
            <View className="flex flex-row items-center justify-center absolute">
                <View className="w-[70vw] pl-8 text-white">
                    <Text className="text-white text-3xl" style={{ fontFamily: "Roboto-Regular" }}>Hi Asher!</Text>
                    <Text className="text-white text-sm" style={{ fontFamily: "Roboto-Regular" }}>What can we do for you?</Text>
                </View>
                <Image
                    source={require("./assets/whitebull.svg")}
                    className="h-20 w-[30vw] aspect-auto"
                    contentFit="contain"
                />
            </View>
        </View>
    );
};

export default Header;
