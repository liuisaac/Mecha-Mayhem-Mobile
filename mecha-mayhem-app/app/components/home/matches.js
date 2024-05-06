import { View, Text } from "react-native";

import React from "react";

const list = require("./temp/example.json");

const Matches = () => {
    return (
        <View className="mb-10">
            <Text className="text-sm ml-6" style={{ fontFamily: "Bebas Neue" }}>
                MATCH OVERVIEW
            </Text>
            {list.map((match, index) => (
                <View
                    key={index}
                    className="w-full h-16 bg-white my-[1px] flex flex-row items-start justify-start"
                >
                    <View
                        className={`${
                            match.color == "red"
                                ? "bg-[#FF4040]"
                                : "bg-[#408CFF]"
                        } h-full w-2`}
                    />
                    <View className="ml-4 flex flex-col items-start justify-start">
                        <Text
                            className="text-[14px] h-16 w-full text-black mt-4"
                            style={{ fontFamily: "Roboto-Bold" }}
                        >
                            {match.title}
                        </Text>
                        <Text
                            className="text-[10px] h-8 w-full text-[#5A5A5A] mt-9 absolute"
                            style={{ fontFamily: "Roboto-Light" }}
                        >
                            {match.time}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default Matches;
