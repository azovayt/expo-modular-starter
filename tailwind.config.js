/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // AppFonts.ts dosyasındaki isimlerle eşleşmeli
        // Format: 'font-nunito-bold': ['fontFamily_ismi_string_değeri']
        "nunito-extralight": ["Nunito_200ExtraLight"],
        "nunito-extralight-italic": ["Nunito_200ExtraLight_Italic"],
        "nunito-light": ["Nunito_300Light"],
        "nunito-light-italic": ["Nunito_300Light_Italic"],
        "nunito-regular": ["Nunito_400Regular"], // Varsayılan Nunito için
        "nunito-italic": ["Nunito_400Regular_Italic"],
        "nunito-medium": ["Nunito_500Medium"],
        "nunito-medium-italic": ["Nunito_500Medium_Italic"],
        "nunito-semibold": ["Nunito_600SemiBold"],
        "nunito-semibold-italic": ["Nunito_600SemiBold_Italic"],
        "nunito-bold": ["Nunito_700Bold"],
        "nunito-bold-italic": ["Nunito_700Bold_Italic"],
        "nunito-extrabold": ["Nunito_800ExtraBold"],
        "nunito-extrabold-italic": ["Nunito_800ExtraBold_Italic"],
        "nunito-black": ["Nunito_900Black"],
        "nunito-black-italic": ["Nunito_900Black_Italic"],

        // Örnek olarak diğer fontlar
        // 'montserrat-bold': ['Montserrat_700Bold'],
        // 'mycustomfont-regular': ['MyCustomFont_Regular'],
      },
    },
  },
  plugins: [],
};
