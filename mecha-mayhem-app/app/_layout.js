import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack>
            <Stack.Screen name="auth" options={{ headerShown: false, animation: "fade", animationDuration: 800 }}/>
            <Stack.Screen name="index" options={{ headerShown: false}} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        </Stack>
    );
};

export default Layout;
