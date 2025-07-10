// src/app/_layout.tsx

import React, { useEffect } from "react";
import { Stack, SplashScreen } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, Text, View } from "react-native";
import "../../global.css";
import { useAppFonts } from "../shared/hooks"; // Özel font yükleme hooku

// Splash Screen'in otomatik gizlenmesini engelle
// Fontlar yüklendikten sonra manuel olarak gizlenecek.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // useAppFonts hook'unu çağırarak fontların yüklenme durumunu al
  const fontsLoaded = useAppFonts();

  // Fontlar yüklendiğinde Splash Screen'i gizle
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // Eğer fontlar henüz yüklenmediyse, bir yükleme ekranı göster
  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#0000ff" />
        <Text className="text-lg mt-4 text-gray-900">
          Fontlar yükleniyor...
        </Text>
      </View>
    );
  }

  // Fontlar yüklendikten sonra uygulamanın ana içeriğini render et
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
