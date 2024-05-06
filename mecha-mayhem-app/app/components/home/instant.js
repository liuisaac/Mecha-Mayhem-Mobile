import { View, Text } from "react-native";
import React from "react";

const Instant = () => {
    return (
        <View className="bg-white h-30 w-full mt-5 mb-10 pl-8 pt-4 pb-2">
            <Text className="text-5xl" style={{ fontFamily: "Bebas Neue" }}>
                TEAM: 3388A
            </Text>
            <View className="flex flex-row items-center justify-start gap-5">
                <Text className="text-sm text-[#888888]" style={{ fontFamily: "Roboto-Bold" }}>
                    Division: Rockies
                </Text>
                <Text className="text-sm text-[#888888]" style={{ fontFamily: "Roboto-Bold" }}>
                    Rank: 11th
                </Text>
                <Text className="text-sm text-[#888888]" style={{ fontFamily: "Roboto-Bold" }}>
                    Skills: 5th
                </Text>
            </View>
            <Text className="mt-1" style={{ fontFamily: "Roboto-Bold" }}>Next Match: ~10 minutes @ TC Energy Field</Text>
        </View>
    );
};

export default Instant;
