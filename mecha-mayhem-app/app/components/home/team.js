import { View, Text } from "react-native";
import { Video, ResizeMode } from "expo-av";
import React from "react";
import { Image } from "expo-image";

const Team = () => {
    return (
        <View className="mb-[130px]">
            <Text className="text-sm ml-6" style={{ fontFamily: "Bebas Neue" }}>
                YOUR TEAM
            </Text>
            <View className="bg-white flex flex-col items-center justify-center">
                <Video
                    className="w-[90vw] h-[60vw] bg-white"
                    source={require("./temp/3388A.mp4")}
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    shouldPlay
                    volume={0}
                />
            </View>

            <Text
                className="text-sm ml-6 mt-10"
                style={{ fontFamily: "Bebas Neue" }}
            >
                SKILLS SCORE
            </Text>
            <View className="flex flex-col items-center justify-center">
                <View className="w-full mb-2 bg-white h-16 flex flex-row items-center justify-center">
                    <Text
                        className="w-[70vw] pl-6 text-3xl"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        PROGRAMMING:
                    </Text>
                    <Text
                        className="w-[30vw] text-3xl"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        240 PTS
                    </Text>
                </View>
                <View className="w-full mb-2 bg-white h-16 flex flex-row items-center justify-center">
                    <Text
                        className="w-[70vw] pl-6 text-3xl"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        Driver:
                    </Text>
                    <Text
                        className="w-[30vw] text-3xl"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        290 PTS
                    </Text>
                </View>
                <View className="w-full mb-2 bg-white h-16 flex flex-row items-center justify-center">
                    <Text
                        className="w-[70vw] pl-6 text-[#F85050] text-3xl"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        RANK:
                    </Text>
                    <Text
                        className="w-[30vw] text-[#F85050] text-3xl"
                        style={{ fontFamily: "Bebas Neue" }}
                    >
                        #5
                    </Text>
                </View>
            </View>
            <View className="w-full flex flex-col items-center justify-center">
                <View className="h-6 w-[90vw] aspect-auto border border-1 rounded-full mt-8 mb-2 opacity-100 flex flex-row items-center justify-center">
                    <Text className="text-black">
                        © 2024 Western Mechatronics. All Rights Reserved.
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default Team;
