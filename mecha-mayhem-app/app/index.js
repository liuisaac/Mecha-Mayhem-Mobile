import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Redirect, SplashScreen, Stack, useRouter } from "expo-router";
import { loadAsync } from "expo-font";

import "../globals.css";
import { Image } from "expo-image";

SplashScreen.preventAutoHideAsync();

const Home = () => {
    // loading fonts
    const [fontLoaded, setFontLoaded] = useState(false);
    const router = useRouter();

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
            "Roboto-ThinItalic": require("../assets/fonts/Roboto/Roboto-ThinItalic.ttf"),
        }).then(() => {
            setFontLoaded(true);
            setTimeout(() => SplashScreen.hideAsync(), 400); //timeout gets rid of white flash and preps transition to other screens
            router.push("/auth");
        });
    }, []);

    if (!fontLoaded) return null;
    return (
        <View className="w-full h-full bg-[#F85050]">
            <Image
                source={require("../assets/icons/splash.png")}
                className="w-full h-full contains"
                contentFit="contain"
            />
        </View>
    );
};

export default Home;
{
    /* <View href="/auth" className='w-full h-full bg-[#F85050]'> */
}
