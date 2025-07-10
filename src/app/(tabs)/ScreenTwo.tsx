// src/app/(tabs)/ScreenFive.tsx
import { View, Text } from "react-native";
import React from "react";
import { Header } from "../../shared/components/layout/Header";

export default function ScreenTwo() {
  return (
    <View className="flex-1">
      <Header
        title="ScreenTwo" // Başlık metni
        showBackButton={false} // Geri butonunu
        // rightContent={<Text>Profil</Text>} // İsteğe bağlı: Sağ taraf için özel içerik
      />
      <View className="flex-1 items-center justify-center">
        <Text>ScreenTwo</Text>
      </View>
    </View>
  );
}
