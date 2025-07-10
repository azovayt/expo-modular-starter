import { View, Text, Alert } from "react-native";
import React from "react";
import { Button } from "./Button";
import { AppIcons } from "../../../shared/utils";

export const ButtonList = () => {
  const handlePress = (message: string) => {
    Alert.alert("Butona Tıklandı!", message);
  };

  return (
    <View>
      <Text className="text-2xl font-bold p-4">Button Örnekleri</Text>

      <View className="flex-col justify-center items-start gap-4 p-4">
        {/* Varsayılan buton (primary renk, medium boyut) */}
        <Button onPress={() => handlePress("Varsayılan buton.")}>
          Varsayılan Buton
        </Button>

        {/* İkincil renk, küçük boyutlu buton */}
        <Button
          color="secondary"
          size="small"
          onPress={() => handlePress("İkincil küçük buton.")}
        >
          İkincil Küçük
        </Button>

        {/* Tehlikeli (destructive) renk, büyük boyutlu buton */}
        <Button
          color="destructive"
          size="large"
          onPress={() => handlePress("Tehlikeli büyük buton.")}
        >
          Büyük Sil Butonu
        </Button>

        {/* Outline renk, orta boyutlu buton */}
        <Button
          color="outline"
          size="medium"
          onPress={() => handlePress("Dış çizgili orta buton.")}
        >
          Dış Çizgili Buton
        </Button>

        {/* İkon butonu (özel rengi ve arka planı className ile ezildi) */}
        <Button
          size="icon"
          color="primary" // Varsayılan primary rengini kullanacak
          onPress={() => handlePress("İkon butonu.")}
          className="bg-purple-500 rounded-full" // Ekstra özelleştirme
        >
          <AppIcons.Ionicons name="logo-react" size={24} color="white" />
        </Button>

        {/* Metin ve ikon içeren buton (className ile manuel hizalama) */}
        <Button
          color="primary"
          size="medium"
          onPress={() => handlePress("İkonlu metin butonu.")}
        >
          <AppIcons.Ionicons name="heart" size={20} color="white" />
          <Text className="ml-2">Beğen</Text>
        </Button>

        {/* Devre dışı (disabled) buton */}
        <Button
          onPress={() => Alert.alert("Bu buton çalışmaz.")}
          disabled
          color="primary" // primary rengi kullanacak ama disabled olduğu için opacity düşer
          size="medium"
        >
          Devre Dışı
        </Button>
      </View>
    </View>
  );
};
