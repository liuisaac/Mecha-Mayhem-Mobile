import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/home/header";
import Instant from "../components/home/instant";
import Matches from "../components/home/matches";

const Home = () => {
    return (
        <View className="bg-[#F85050] h-full">
            <View className="w-full h-12 bg-[#F85050]"></View>
            <ScrollView className="bg-[#F8F8F8]">
                <Header />
                <Instant />
                <Matches />
                <View className="w-full h-[100vh] bg-[#ffffff]"></View>
                <View className="w-full h-12 bg-[#ffffff]"></View>
            </ScrollView>
        </View>
    );
};

export default Home;
