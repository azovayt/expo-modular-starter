// src/app/(tabs)/ScreenFive.tsx
import { View, Text, Alert } from "react-native";
import React from "react";
import { Button } from "../../shared/components/ui";
import { Header } from "../../shared/components/layout";
import { ButtonList } from "../../shared/components/ui/ButtonList";

// Örnek modül bileşenler
import { AuthenticationReferenceOne } from "../../features/authentication/components";
import { AccountReferenceOne } from "../../features/account/components";
import { CartReferenceOne } from "../../features/cart/components";
import { OrdersReferenceOne } from "../../features/orders/components";

export default function ScreenOne() {
  const handlePress = (message: string) => {
    Alert.alert("Butona Tıklandı!", message);
  };
  return (
    <View className="flex-1">
      <Header
        title="ScreenOne" // Başlık metni
        showBackButton={false} // Geri butonunu
        // rightContent={<Text>Profil</Text>} // İsteğe bağlı: Sağ taraf için özel içerik
      />
      <Text className="text-lg font-nunito-bold p-4"> Screen One</Text>
      <ButtonList />
    </View>
  );
}
