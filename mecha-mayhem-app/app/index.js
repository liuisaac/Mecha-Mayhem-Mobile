import { View, Text } from "react-native";
import { Redirect, Stack, useRouter } from "expo-router";
import "../globals.css";
import { loadAsync } from "expo-font";
import { useEffect, useState } from "react";

const Home = () => {
    // loading fonts
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        loadAsync({
            "Bebas Neue": require("../assets/fonts/Bebas Neue.ttf"),
            "Roboto-Black": require("../assets/fonts/Roboto/Roboto-Black.ttf"),
            "Roboto-BlackItalic": require("../assets/fonts/Roboto/Roboto-BlackItalic.ttf"),
            "Roboto-Bold": require("../assets/fonts/Roboto/Roboto-Bold.ttf"),
            "Roboto-BoldItalic": require("../assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
            "Roboto-Italic": require("../assets/fonts/Roboto/Roboto-Italic.ttf"),
            "Roboto-Light": require("../assets/fonts/Roboto/Roboto-Light.ttf"),
            "Roboto-LightItalic": require("../assets/fonts/Roboto/Roboto-LightItalic.ttf"),
            "Roboto-Medium": require("../assets/fonts/Roboto/Roboto-Medium.ttf"),
            "Roboto-MediumItalic": require("../assets/fonts/Roboto/Roboto-MediumItalic.ttf"),
            "Roboto-Regular": require("../assets/fonts/Roboto/Roboto-Regular.ttf"),
            "Roboto-Thin": require("../assets/fonts/Roboto/Roboto-Thin.ttf"),
            "Roboto-ThinItalic": require("../assets/fonts/Roboto/Roboto-ThinItalic.ttf")
        }).then(() => {
            setFontLoaded(true);
        });
    }, []);

    if (!fontLoaded) return null;

    // app
    return <Redirect href="/auth" />;
};

export default Home;
