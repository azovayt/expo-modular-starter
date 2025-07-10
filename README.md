# 🚀 Expo Modüler Başlangıç Şablonu

Bu proje, ölçeklenebilir, bakımı kolay ve özellik odaklı mobil uygulamalar geliştirmek için tasarlanmış, iyi yapılandırılmış bir **Expo & React Native** başlangıç şablonudur. Proje yapısı, büyük ve karmaşık uygulamaların yönetimini basitleştirmek için **Domain Driven Design (DDD)** ve **modüler programlama** prensiplerini benimser.

---

## ✨ Özellikler

- **Expo SDK & Router:** Hızlı prototipleme ve sağlam navigasyon çözümleri için en güncel Expo SDK ve Expo Router entegrasyonu.
- **Modüler Mimari:** Uygulamanızı `features` (özellikler) ve `shared` (paylaşılan) modüllere ayırarak kodun okunabilirliğini, test edilebilirliğini ve yeniden kullanılabilirliğini artırır.
- **Domain Driven Design (DDD) Yaklaşımı:** Her bir iş alanı (`account`, `authentication`, `cart`, `orders` gibi) kendi içinde izole edilmiş bir yapıya sahiptir.
  - **`components`**: Özelliğe özel UI bileşenleri.
  - **`hooks`**: Özelliğe özel React hook'ları.
  - **`screens`**: Özelliğe ait ana ekranlar.
  - **`services`**: API çağrıları veya dış entegrasyonlar.
  - **`store`**: Durum yönetimi (Redux Toolkit, Zustand vb. entegrasyonuna hazır).
  - **`types`**: Özelliğe özel TypeScript tipleri.
- **Merkezi Stil Yönetimi (NativeWind):** Tailwind CSS tabanlı NativeWind ile hızlı ve tutarlı UI geliştirme.
- **Merkezi İkon Yönetimi:** `@expo/vector-icons` kütüphanesindeki tüm ikon setlerine kolay ve modüler erişim.
- **Merkezi Font Yönetimi:** `@expo-google-fonts` ile Google Font'ları ve özel fontları uygulamanın her yerinde NativeWind ile kullanabilme. Font yükleme mantığı ayrı bir hook'ta izole edilmiştir.
- **TypeScript Desteği:** Güvenli ve ölçeklenebilir kod yazımı için tam TypeScript desteği.
- **Global CSS:** Tailwind CSS'in global stillerini yönetmek için `global.css` entegrasyonu.

---

## 📂 Proje Yapısı

Proje, temel olarak iki ana bölümden oluşur: `app`, `features` ve `shared`.

```bash
📦 src
 ┣ 📂 app                  # Expo Router ile navigasyon ve ana layout'lar
 ┃ ┣ 📂 (tabs)             # Sekmeli navigasyonun bulunduğu grup
 ┃ ┃ ┣ 📜 ScreenOne.tsx
 ┃ ┃ ┗ 📜 _layout.tsx      # Sekme layout'u
 ┃ ┗ 📜 _layout.tsx        # Ana uygulama layout'u (Font yükleme vb.)
 ┣ 📂 features             # Uygulamanın ana iş özelliklerini barındırır (Domain Driven)
 ┃ ┣ 📂 account            # Hesap yönetimi özelliği
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 screens
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 store
 ┃ ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 index.ts         # Account modülünün ana export'ları
 ┃ ┣ 📂 authentication     # Kimlik doğrulama özelliği
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 screens
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 store
 ┃ ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 cart               # Sepet özelliği
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 screens
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 store
 ┃ ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┗ 📂 orders             # Siparişler özelliği
 ┃ ┃ ┣ 📂 components
 ┃ ┃ ┣ 📂 hooks
 ┃ ┃ ┣ 📂 screens
 ┃ ┃ ┣ 📂 services
 ┃ ┃ ┣ 📂 store
 ┃ ┃ ┣ 📂 types
 ┃ ┃ ┗ 📜 index.ts
 ┗ 📂 shared               # Uygulama genelinde paylaşılan kodlar ve yardımcılar
 ┃ ┣ 📂 components         # Ortak UI bileşenleri (örn: Button, Header)
 ┃ ┃ ┣ 📂 layout
 ┃ ┃ ┣ 📂 ui
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 config             # Genel uygulama yapılandırmaları
 ┃ ┣ 📂 hooks              # Uygulama genelinde kullanılan özel React hook'ları
 ┃ ┃ ┣ 📜 useAppFonts.ts   # Tüm fontları yükleyen özel hook
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 store              # Global durum yönetimi (henüz entegre değil, yer tutucu)
 ┃ ┣ 📂 types              # Global TypeScript tipleri
 ┃ ┣ 📂 utils              # Genel yardımcı fonksiyonlar ve varlık tanımları
 ┃ ┃ ┣ 📜 Fonts.ts         # Uygulamadaki tüm fontların isim tanımları
 ┃ ┃ ┣ 📜 Icons.ts         # Tüm ikon setlerinin tanımları
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┗ 📜 index.ts           # Shared modülünün ana export'ları
```

---

## 🛠️ Kurulum

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**

    ```bash
    git clone [https://github.com/azovayt/expo-modular-starter.git](https://github.com/azovayt/expo-modular-starter.git)
    cd expo-modular-starter
    ```

2.  **Bağımlılıkları Yükleyin:**

    ```bash
    npm install
    # veya
    yarn install
    ```

3.  **Google Font Paketlerini Yükleyin (Kullanıyorsanız):**
    Projede kullanılan Google Font'lar için ilgili `@expo-google-fonts` paketlerini kurmanız gerekir. Örneğin, Nunito fontu için:

    ```bash
    npm install @expo-google-fonts/nunito
    # veya
    yarn add @expo-google-fonts/nunito
    ```

    `src/shared/hooks/useAppFonts.ts` ve `src/shared/utils/Fonts.ts` dosyalarınıza eklediğiniz tüm fontlar için ilgili paketleri yüklediğinizden emin olun.

4.  **Uygulamayı Başlatın:**
    ```bash
    npx expo start
    ```
    Bu komut tarayıcınızda Expo Developer Tools'u açar. Oradan uygulamanızı bir emülatörde/simülatörde veya fiziksel bir cihazda başlatabilirsiniz.

---

## 🚀 Kullanım

- **Yeni Bir Özellik Ekleme:** `src/features` altına yeni bir klasör (örn: `products`) oluşturun ve içinde `components`, `screens`, `hooks`, `services`, `store`, `types` gibi gerekli alt klasörleri ve `index.ts` dosyasını oluşturun.
- **Paylaşılan Bileşenleri/Yardımcıları Kullanma:** `src/shared` altındaki modülleri projenizin herhangi bir yerinden import ederek kullanın:
  ```typescript
  import { AppIcons, AppFonts, Button } from '@/shared/utils'; // veya '../shared/utils'
  // İkon kullanımı
  <AppIcons.Ionicons name="home" className="text-blue-500 text-3xl" />
  // Font kullanımı (NativeWind ile)
  <Text className="font-nunito-bold text-lg">Hello World</Text>
  // Ortak bileşen kullanımı
  <Button title="Click Me" />
  ```
- **NativeWind ile Stil Oluşturma:** `tailwind.config.js` dosyasını güncelleyerek kendi özel Tailwind sınıflarınızı tanımlayabilirsiniz.

---

## 🤝 Katkıda Bulunma

Bu şablonu geliştirmeye açığım! Her türlü öneri, hata düzeltmesi veya yeni özellik katkısı memnuniyetle karşılanır. Katkıda bulunmak isterseniz lütfen bir Pull Request (PR) açmaktan çekinmeyin.

---

## 📜 Lisans

Bu proje, MIT Lisansı altında yayımlanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

---
