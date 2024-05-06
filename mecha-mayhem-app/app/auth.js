import { View, Text, Button, Pressable } from "react-native";
import { Image, ImageBackground } from "expo-image";
import { TextInput } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

const auth = () => {
    const router = useRouter();
    const [signedIn, setSignedIn] = useState(false);
    const [staySignedIn, setStaySignedIn] = useState(false);

    const onSignIn = async (email, password) => {
        setSignedIn(true);
        setTimeout(handleSignIn, 300);
    };

    const handleSignIn = () => {
        router.push("(tabs)/home");
        try {
        } catch {
            //pass
        } finally {
            setSignedIn(false);
        }
    };

    return (
        <View className="flex flex-col items-center justify-start w-full h-full bg-[#272727]">
            <View className="w-full h-12 bg-[#F85050]"></View>
            <View className="w-full h-full flex flex-col items-center justify-center">
                <Image
                    source={require("./auth/assets/background-wrap.png")}
                    className="w-screen h-screen absolute"
                />
                <View className="w-[80vw] h-[140vw] rounded-sm mb-16 flex flex-col items-center justify-center bg-[#FBFBFB]">
                    <Image
                        source={require("./auth/assets/red_auth_mecha_bull.svg")}
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
                            <Pressable
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.27,
                                    shadowRadius: 4.65,

                                    elevation: 6,
                                }}
                                className="w-[18vw] h-12 bg-[#1A76F2] rounded-sm flex flex-row items-center justify-center"
                            >
                                <Image
                                    source={require("./auth/assets/login-logo/facebook.svg")}
                                    className="w-full h-7 contains"
                                    contentFit="contain"
                                />
                            </Pressable>
                            <Pressable
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.27,
                                    shadowRadius: 4.65,

                                    elevation: 6,
                                }}
                                className="w-[18vw] mx-[3vw] h-12 bg-[#FFFFFF] rounded-sm flex flex-row items-center justify-center"
                            >
                                <Image
                                    source={require("./auth/assets/login-logo/google.png")}
                                    className="w-full h-6"
                                    contentFit="contain"
                                />
                            </Pressable>
                            <Pressable
                                style={{
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 3,
                                    },
                                    shadowOpacity: 0.27,
                                    shadowRadius: 4.65,

                                    elevation: 6,
                                }}
                                className="w-[18vw] h-12 bg-black rounded-sm flex flex-row items-center justify-center"
                            >
                                <Image
                                    source={require("./auth/assets/login-logo/apple.svg")}
                                    className="w-full h-7 contains"
                                    contentFit="contain"
                                />
                            </Pressable>
                        </View>
                        <View className="w-full mt-10 flex flex-row items-start justify-start overflow-clip">
                            <Pressable
                                className={`h-4 w-4 ${
                                    staySignedIn
                                        ? "bg-[#161616]"
                                        : "bg-[#EAEAEA]"
                                } rounded-sm`}
                                onPress={() => {
                                    setStaySignedIn(!staySignedIn);
                                }}
                            >
                                <Image
                                    source={require("./auth/assets/checkmark.svg")}
                                    className={`w-full h-4 contains ${
                                        staySignedIn ? "flex" : "hidden"
                                    }`}
                                    contentFit="contain"
                                />
                            </Pressable>
                            <Text
                                className="ml-2"
                                style={{ fontFamily: "Roboto-Regular" }}
                            >
                                Stay Signed In
                            </Text>
                        </View>
                        <Pressable
                            className={`w-full h-14 ${
                                signedIn ? " bg-black " : "bg-[#E11F1F]"
                            } rounded-sm flex flex-row items-center justify-center mt-10`}
                            onTouchStart={() => {
                                onSignIn("username", "password123");
                            }}
                            style={{
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 3,
                                },
                                shadowOpacity: 0.27,
                                shadowRadius: 4.65,

                                elevation: 6,
                            }}
                        >
                            <Text
                                className={`${
                                    signedIn ? "text-white" : "text-white"
                                } text-2xl`}
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
