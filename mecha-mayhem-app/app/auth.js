import { View, Text, Button, Pressable } from "react-native";
import { Image } from "expo-image";
import { TextInput } from "react-native";
import React from "react";

const auth = () => {
    return (
        <View className="flex flex-col items-center justify-start w-full h-full bg-[#272727]">
            <View className="w-full h-12 bg-[#F85050]"></View>
            <View className="w-full h-full flex flex-col items-center justify-center">
                <View className="w-[80vw] h-[140vw] bg-white rounded-sm mb-16 flex flex-col items-center justify-center">
                    <Image
                        source={require("./auth/red_auth_mecha_bull.svg")}
                        className="w-full h-16 contains mr-5"
                        contentFit="contain"
                    />
                    <Text className="font-semibold text-2xl mt-5">Sign In</Text>

                    <View className="w-[60vw] flex flex-col justify-center items-center">
                        <TextInput className="w-full h-12 bg-gray-200 mt-10" />
                        <TextInput
                            placeholder=""
                            keyboardType="visible-password"
                            secureTextEntry
                            className="w-full h-12 bg-gray-200 mt-5"
                        />
                        <View className="w-[60vw] flex flex-row items-center justify-center mt-5">
                            <Pressable className="w-[20vw] h-14 bg-[#1A76F2] rounded-sm flex flex-row items-center justify-center">
                                <Text
                                    className="text-white text-2xl"
                                    style={{ fontFamily: "Bebas Neue" }}
                                >
                                    F
                                </Text>
                            </Pressable>
                            <Pressable className="w-[20vw] h-14 bg-[#E11F1F] rounded-sm flex flex-row items-center justify-center">
                                <Text
                                    className="text-white text-2xl"
                                    style={{ fontFamily: "Bebas Neue" }}
                                >
                                    G
                                </Text>
                            </Pressable>
                            <Pressable className="w-[20vw] h-14 bg-black rounded-sm flex flex-row items-center justify-center">
                                <Text
                                    className="text-white text-2xl"
                                    style={{ fontFamily: "Bebas Neue" }}
                                >
                                    A
                                </Text>
                            </Pressable>
                        </View>
                        <View className="w-full mt-10 flex flex-row items-start justify-start">
                          <Pressable className='h-4 w-4 bg-[#EAEAEA] rounded-sm'>

                          </Pressable>
                          <Text className='ml-2' style={{ fontFamily: "Roboto-Regular" }}>
                            Stay Signed In
                          </Text>
                        </View>
                        <Pressable className="w-full h-14 bg-[#E11F1F] rounded-sm flex flex-row items-center justify-center mt-10">
                            <Text
                                className="text-white text-2xl"
                                style={{ fontFamily: "Bebas Neue" }}
                            >
                                SIGN IN
                            </Text>
                        </Pressable>
                        <Text
                            style={{ fontFamily: "Bebas Neue" }}
                            className="text-[#BEBEBE] mt-2"
                        >
                            CANT SIGN IN?
                        </Text>
                        <Text
                            style={{ fontFamily: "Bebas Neue" }}
                            className="text-[#BEBEBE] mt-2"
                        >
                            CREATE ACCOUNT
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default auth;
