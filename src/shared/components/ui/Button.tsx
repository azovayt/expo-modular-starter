// src/shared/components/ui/Button.tsx
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

/*
 * Yeniden kullanılabilir, özelleştirilebilir bir Buton bileşeni.
 * Bu bileşen, NativeWind (Tailwind CSS) sınıflarını kullanarak kolay stilizasyon sağlar.
 * Butonlar, tanımlanmış renk ve boyut kalıplarına ek olarak, dışarıdan gelen
 * Tailwind sınıfları (className) ile de özelleştirilebilir.
 */

// --- Buton Renk Kalıpları ---
// Bu obje, butonun 'color' prop'una göre uygulanacak Tailwind CSS sınıflarını tanımlar.
// Şirketin tasarım sistemindeki renk paletine göre genişletilebilir.
const buttonColorClasses = {
  // 'primary' renk kalıbı: Mavi arka plan, basıldığında koyulaşan mavi, beyaz metin.
  primary: "bg-blue-500 active:bg-blue-600 text-white",
  // 'secondary' renk kalıbı: Açık gri arka plan, basıldığında koyulaşan gri, koyu gri metin.
  secondary: "bg-gray-200 active:bg-gray-300 text-gray-800",
  // 'destructive' renk kalıbı: Kırmızı arka plan, basıldığında koyulaşan kırmızı, beyaz metin. (Genellikle silme/iptal işlemleri için)
  destructive: "bg-red-500 active:bg-red-600 text-white",
  // 'outline' renk kalıbı: Şeffaf arka plan, gri kenarlık, basıldığında hafif gri arka plan, koyu gri metin.
  outline:
    "border border-gray-300 bg-transparent active:bg-gray-100 text-gray-800",
  // Örnek: Başka renk kalıpları eklenebilir.
  // success: "bg-green-500 active:bg-green-600 text-white",
};

// --- Buton Boyut Kalıpları ---
// Bu obje, butonun 'size' prop'una göre uygulanacak Tailwind CSS sınıflarını tanımlar.
// Yükseklik (h-), yatay (px-) ve dikey (py-) padding değerlerini belirler.
const buttonSizeClasses = {
  // 'small' boyut: Küçük yükseklik ve padding.
  small: "h-8 px-3 py-1", // h-8 = 32px yükseklik
  // 'medium' boyut: Orta yükseklik ve padding. (Varsayılan boyut)
  medium: "h-10 px-5 py-2", // h-10 = 40px yükseklik
  // 'large' boyut: Büyük yükseklik ve padding.
  large: "h-12 px-7 py-3", // h-12 = 48px yükseklik
  // 'icon' boyut: Kare bir ikon butonu için özel boyutlandırma ve hizalama.
  icon: "h-10 w-10 p-0 flex-row items-center justify-center", // p-0 ile padding sıfırlanır, ikon ortalanır.
};

// --- Buton Metni Boyut Kalıpları ---
// Bu obje, buton içindeki metnin 'size' prop'una göre uygulanacak Tailwind CSS font boyutlarını tanımlar.
const buttonTextSizeClasses = {
  // 'small' boyut için metin boyutu.
  small: "text-sm", // 14px font boyutu
  // 'medium' boyut için metin boyutu. (Varsayılan metin boyutu)
  medium: "text-base", // 16px font boyutu
  // 'large' boyut için metin boyutu.
  large: "text-lg", // 18px font boyutu
  // 'icon' boyuttaki buton içinde nadiren metin olsa da, olursa varsayılan boyutu.
  icon: "text-base",
};

// --- Button Bileşeninin Prop Arayüzü ---
// Bu arayüz, Button bileşeninin alabileceği prop'ları tanımlar.
// TouchableOpacityProps'u genişleterek temel dokunmatik özelliklerini (onPress, disabled vb.) alır.
interface ButtonProps extends TouchableOpacityProps {
  /*
   * Butonun içinde gösterilecek içerik (metin, ikon, başka bir bileşen vb.).
   */
  children: React.ReactNode;
  /*
   * Butonun önceden tanımlanmış renk kalıplarından birini seçer.
   * @default 'primary'
   */
  color?: keyof typeof buttonColorClasses; // 'primary' | 'secondary' | 'destructive' | 'outline'
  /*
   * Butonun önceden tanımlanmış boyut kalıplarından birini seçer.
   * @default 'medium'
   */
  size?: keyof typeof buttonSizeClasses; // 'small' | 'medium' | 'large' | 'icon'
  /*
   * Butona dışarıdan NativeWind (Tailwind CSS) sınıfları eklemek veya varsayılanları ezmek için kullanılır.
   */
  className?: string;
  /*
   * Buton içindeki metne özel NativeWind (Tailwind CSS) sınıfları uygulamak için kullanılır.
   */
  textClassName?: string;
}

/*
 * Yeniden kullanılabilir genel amaçlı bir buton bileşeni.
 * Belirlenmiş renk ve boyut kalıplarına sahiptir ve NativeWind ile stilize edilmiştir.
 * İçeriği (children) ve tıklama olaylarını destekler.
 */
export const Button = ({
  children,
  color = "primary", // Varsayılan renk kalıbı 'primary' olarak ayarlanır.
  size = "medium", // Varsayılan boyut kalıbı 'medium' olarak ayarlanır.
  className, // Dışarıdan gelen ek NativeWind sınıfları.
  textClassName, // Dışarıdan gelen metin için ek NativeWind sınıfları.
  ...props // TouchableOpacity'ye iletilecek diğer tüm standart prop'lar.
}: ButtonProps) => {
  // --- Butonun Temel Stillerini Oluşturma ---
  // Tüm butonlarda ortak olan ve 'color'/'size' proplarından bağımsız temel Tailwind sınıfları.
  // Not: 'w-auto' butonun içeriği kadar genişlemesini sağlar.
  // 'flex-row items-center justify-center' ile içerik (metin/ikon) hem yatay hem dikey ortalanır.
  const baseButtonClasses =
    "w-auto rounded-lg font-medium disabled:opacity-50 active:opacity-80 flex-row items-center justify-center";

  // Temel sınıfları, renk/boyut kalıplarını ve dışarıdan gelen 'className'i birleştirir.
  // 'className' prop'u her zaman sonradan uygulandığı için varsayılanları ezer.
  const combinedButtonClasses = `${baseButtonClasses} ${buttonColorClasses[color]} ${buttonSizeClasses[size]} ${className || ""}`;

  // --- Buton Metninin Temel Stillerini Oluşturma ---
  // Buton içindeki metne uygulanacak temel ve dinamik Tailwind sınıfları.
  // 'text-center' metni yatayda ortalar.
  const baseTextClasses = "text-center";

  // Temel metin sınıflarını, metin boyut kalıbını ve dışarıdan gelen 'textClassName'i birleştirir.
  const combinedTextClasses = `${baseTextClasses} ${buttonTextSizeClasses[size]} ${textClassName || ""}`;

  return (
    // TouchableOpacity bileşeni: Basma efektleri ve erişilebilirlik sağlar.
    // 'className' prop'u NativeWind tarafından Tailwind CSS sınıflarına dönüştürülür.
    <TouchableOpacity className={combinedButtonClasses} {...props}>
      {/*
        'children' prop'unun tipi kontrol edilir.
        Eğer bir string ise, 'Text' bileşeni içine alınır ve metin stilleri uygulanır.
        Eğer bir string değilse (örn. ikon bileşeni), doğrudan render edilir.
        TouchableOpacity'ye uygulanan 'flex-row items-center justify-center' sayesinde,
        hem metin hem de ikon gibi diğer içerikler doğru şekilde hizalanır.
      */}
      {typeof children === "string" ? (
        <Text className={combinedTextClasses}>{children}</Text>
      ) : (
        // İkon veya başka bir React bileşeni ise doğrudan render edilir.
        children
      )}
    </TouchableOpacity>
  );
};
