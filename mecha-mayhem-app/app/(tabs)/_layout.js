import { View, Text } from "react-native";
import { Tabs } from "expo-router";
import React from "react";
import "../../globals.css";

export default Layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{ headerShown: false, tabBarVisible: false }}
            />
            <Tabs.Screen
                name="list"
                options={{ headerShown: false, tabBarVisible: false }}
            />
        </Tabs>
    );
};
