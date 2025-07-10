// src/shared/utils/Fonts.ts

/**
 * Bu dosya, uygulamada kullanılacak fontların adlarını ve varyasyonlarını tanımlar.
 * Font dosyalarının kendisi burada yüklenmez; yükleme işlemi App.js veya _layout.tsx gibi
 * uygulamanın başlangıç noktasında Expo'nun font yükleme fonksiyonları ile yapılır.
 *
 * Burada tanımlanan font adları, React Native'deki 'fontFamily' stil özelliği için kullanılır.
 */

export const AppFonts = {
  /**
   * Nunito Font Ailesi (Google Fonts)
   * Yüklemek için: '@expo-google-fonts/nunito' paketi kurulmalı.
   * Ve App.js/_layout.tsx içinde useAppFonts hook'unu kullanarak yüklenmeli.
   */
  Nunito: {
    Black: "Nunito_900Black",
    BlackItalic: "Nunito_900Black_Italic",
    Bold: "Nunito_700Bold",
    BoldItalic: "Nunito_700Bold_Italic",
    ExtraBold: "Nunito_800ExtraBold",
    ExtraBoldItalic: "Nunito_800ExtraBold_Italic",
    ExtraLight: "Nunito_200ExtraLight",
    ExtraLightItalic: "Nunito_200ExtraLight_Italic",
    Italic: "Nunito_400Regular_Italic",
    Light: "Nunito_300Light",
    LightItalic: "Nunito_300Light_Italic",
    Medium: "Nunito_500Medium",
    MediumItalic: "Nunito_500Medium_Italic",
    Regular: "Nunito_400Regular",
    SemiBold: "Nunito_600SemiBold",
    SemiBoldItalic: "Nunito_600SemiBold_Italic",
  },
  // Diğer font aileleri buraya eklenebilir (örn: Montserrat, Lato vb.)
};
