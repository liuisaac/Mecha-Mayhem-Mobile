import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import "../../globals.css";
import { Image } from "expo-image";

export default Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    height: 90,
                    backgroundColor: "#ffffff",
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,

                    elevation: 20,
                },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/tab-bar/home_icon.svg")}
                            className="w-full h-12 contains"
                            contentFit="contain"
                            style={{
                                tintColor: focused ? "#F85050" : "#000000",
                            }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/tab-bar/map_icon.svg")}
                            className="w-full h-12 contains"
                            contentFit="contain"
                            style={{
                                tintColor: focused ? "#F85050" : "#000000",
                            }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="plus"
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <View className="flex flex-row items-center justify-center mb-8 w-36 h-44">
                            <Image
                                source={require("./assets/tab-bar/plus_icon.svg")}
                                className="w-full h-16 contains z-50"
                                contentFit="contain"
                            />
                            <View className="w-24 h-36 contains bottom-0 absolute z-10 ">
                                <View className="w-24 h-[90px] mt-[42px] bottom-0 contains z-10 bg-white"></View>
                            </View>
                            <View className="w-36 h-36 contains absolute flex flex-row items-center justify-center">
                                <Image
                                    source={require("./assets/tab-bar/outer_circle.svg")}
                                    className="w-20 h-20 contains absolute z-10 overflow-visible"
                                    contentFit="contain"
                                    style={{
                                        shadowColor: "#000",
                                        shadowOffset: {
                                            width: 0,
                                            height: 2,
                                        },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        elevation: 5,
                                    }}
                                />
                            </View>
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="info"
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/tab-bar/info_icon.svg")}
                            className="w-full h-12 contains"
                            contentFit="contain"
                            style={{
                                tintColor: focused ? "#F85050" : "#000000",
                            }}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    tabBarVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={require("./assets/tab-bar/settings_icon.svg")}
                            className="w-full h-12 contains"
                            contentFit="contain"
                            style={{
                                tintColor: focused ? "#F85050" : "#000000",
                            }}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};
