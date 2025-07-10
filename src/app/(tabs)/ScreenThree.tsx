// src/app/(tabs)/ScreenFive.tsx
import { View, Text } from "react-native";
import React from "react";
import { Header } from "../../shared/components/layout/Header";

export default function ScreenThree() {
  return (
    <View className="flex-1">
      <Header
        title="ScreenThree" // Başlık metni
        showBackButton={false} // Geri butonunu
        // rightContent={<Text>Profil</Text>} // İsteğe bağlı: Sağ taraf için özel içerik
      />
      <View className="flex-1 items-center justify-center">
        <Text>ScreenThree</Text>
      </View>
    </View>
  );
}
