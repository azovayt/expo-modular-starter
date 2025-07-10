# 🚀 Expo Modüler Başlangıç Şablonu

Bu proje, ölçeklenebilir, bakımı kolay ve özellik odaklı mobil uygulamalar geliştirmek için tasarlanmış, iyi yapılandırılmış bir **Expo ** başlangıç şablonudur. Proje yapısı, büyük ve karmaşık uygulamaların yönetimini basitleştirmek için **modüler yapı** prensiplerini benimser.

---

## ✨ Özellikler

- **Expo SDK & Router:** Hızlı prototipleme ve sağlam navigasyon çözümleri için en güncel Expo SDK ve Expo Router entegrasyonu.
- **Modüler Mimari:** Uygulamanızı `features` (özellikler) ve `shared` (paylaşılan) modüllere ayırarak kodun okunabilirliğini, test edilebilirliğini ve yeniden kullanılabilirliğini artırır.
- **Modüler Mimari İçeriği:** Her bir iş alanı (`account`, `authentication`, `cart`, `orders` gibi) kendi içinde izole edilmiş bir yapıya sahiptir.
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
📦 src/                 # Uygulamanın tüm kaynak kodunu içeren ana dizin.
 ┣ 📂 app/               # Expo Router'ın navigasyon ve ana uygulama düzenini yönettiği dizin.
 ┃ ┣ 📂 (tabs)/          # Sekmeli navigasyonun bulunduğu grup. Bu bir route grubu olduğu için parantez içinde.
 ┃ ┃ ┣ 📜 ScreenFive.tsx
 ┃ ┃ ┣ 📜 ScreenFour.tsx
 ┃ ┃ ┣ 📜 ScreenOne.tsx  # Sekmelerdeki her bir ekran bileşeni.
 ┃ ┃ ┣ 📜 ScreenThree.tsx
 ┃ ┃ ┣ 📜 ScreenTwo.tsx
 ┃ ┃ ┗ 📜 _layout.tsx    # Bu sekme grubunun düzenini (örn. alt sekme çubuğu) ve navigasyonunu tanımlayan layout dosyası.
 ┃ ┗ 📜 _layout.tsx      # Uygulamanın en üst düzey layout dosyası. Genel navigasyon stack'i, font yükleme, Splash Screen yönetimi gibi global ayarlar burada yapılır.
 ┣ 📂 features/          # Uygulamanın ana iş özelliklerini (domain'leri) barındıran dizin. Her alt klasör bir "özellik" veya "modül"dür.
 ┃ ┣ 📂 account/         # Kullanıcı hesabı yönetimiyle ilgili tüm kodları içeren özellik modülü.
 ┃ ┃ ┣ 📂 components/    # 'account' özelliği için özel olarak tasarlanmış UI bileşenleri.
 ┃ ┃ ┃ ┣ 📜 AccountReferenceOne.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts     # Bu klasördeki bileşenleri dışa aktarır.
 ┃ ┃ ┣ 📂 hooks/         # 'account' özelliği için özel React hook'ları (örn. profil verilerini getiren bir hook).
 ┃ ┃ ┃ ┣ 📜 AccountReferenceTwo.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts     # Bu klasördeki hook'ları dışa aktarır.
 ┃ ┃ ┣ 📂 screens/       # 'account' özelliğine ait ana ekran bileşenleri (örn. Profil Ayarları Ekranı).
 ┃ ┃ ┃ ┣ 📜 AccountReferenceThree.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts     # Bu klasördeki ekranları dışa aktarır.
 ┃ ┃ ┣ 📂 services/      # 'account' özelliği ile ilgili API çağrıları, veri işleme veya diğer dış entegrasyon mantığı.
 ┃ ┃ ┃ ┣ 📜 AccountReferenceFour.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts     # Bu klasördeki servisleri dışa aktarır.
 ┃ ┃ ┣ 📂 store/         # 'account' özelliğinin durum yönetimini (Redux Toolkit slice'lar, Zustand store'lar vb.) içeren kısım.
 ┃ ┃ ┃ ┣ 📜 AccountReferenceFive.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts     # Bu klasördeki store parçacıklarını dışa aktarır.
 ┃ ┃ ┣ 📂 types/         # 'account' özelliğine özel TypeScript arayüzleri ve tipler (örn. User nesnesi tipi).
 ┃ ┃ ┃ ┣ 📜 AccountReferenceSix.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts     # Bu klasördeki tipleri dışa aktarır.
 ┃ ┃ ┗ 📜 index.ts       # 'account' özelliğinin tüm alt modüllerini (components, hooks vb.) tek bir noktadan dışa aktarır.
 ┃ ┣ 📂 authentication/  # Kullanıcı kimlik doğrulama (kayıt, giriş, şifre sıfırlama) özelliğini içeren modül. Yapısı 'account' ile aynıdır.
 ┃ ┃ ┣ 📂 components/
 ┃ ┃ ┃ ┣ 📜 AuthenticationReferenceOne.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 hooks/
 ┃ ┃ ┃ ┣ 📜 AuthenticationReferenceTwo.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 screens/
 ┃ ┃ ┃ ┣ 📜 AuthenticationReferenceThree.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 services/
 ┃ ┃ ┃ ┣ 📜 AuthenticationReferenceFour.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 store/
 ┃ ┃ ┃ ┣ 📜 AuthenticationReferenceFive.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 types/
 ┃ ┃ ┃ ┣ 📜 AuthenticationReferenceSix.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┣ 📂 cart/            # Alışveriş sepeti yönetimi özelliğini içeren modül. Yapısı diğer özellik modülleriyle benzerdir.
 ┃ ┃ ┣ 📂 components/
 ┃ ┃ ┃ ┣ 📜 CartReferenceOne.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 hooks/
 ┃ ┃ ┃ ┣ 📜 CartReferenceTwo.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 screens/
 ┃ ┃ ┃ ┣ 📜 CartReferenceThree.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 services/
 ┃ ┃ ┃ ┣ 📜 CartReferenceFour.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 store/
 ┃ ┃ ┃ ┣ 📜 CartReferenceFive.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 types/
 ┃ ┃ ┃ ┣ 📜 CartReferenceSix.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┗ 📜 index.ts
 ┃ ┗ 📂 orders/          # Sipariş yönetimi özelliğini içeren modül.
 ┃ ┃ ┣ 📂 components/
 ┃ ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┃ ┗ 📜 OrdersReferenceOne.tsx
 ┃ ┃ ┣ 📂 hooks/
 ┃ ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┃ ┗ 📜 OrdersReferenceTwo.tsx
 ┃ ┃ ┣ 📂 screens/
 ┃ ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┃ ┗ 📜 OrdersReferenceThree.tsx
 ┃ ┃ ┣ 📂 services/
 ┃ ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┃ ┗ 📜 OrdersReferenceFour.tsx
 ┃ ┃ ┣ 📂 store/
 ┃ ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┃ ┗ 📜 OrdersReferenceFive.tsx
 ┃ ┃ ┣ 📂 types/
 ┃ ┃ ┃ ┣ 📜 index.ts
 ┃ ┃ ┃ ┗ 📜 OrdersReferenceSix.tsx
 ┃ ┃ ┗ 📜 index.ts
 ┗ 📂 shared/            # Uygulama genelinde tekrar kullanılan kod ve yardımcılar. Buradaki bileşenler/fonksiyonlar bir özelliğe özel değildir.
 ┃ ┣ 📂 components/      # Uygulamanın farklı yerlerinde kullanılan genel UI bileşenleri.
 ┃ ┃ ┣ 📂 layout/        # Uygulama genelinde kullanılan layout bileşenleri (örn. genel bir Header veya Footer).
 ┃ ┃ ┃ ┣ 📜 Header.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┣ 📂 ui/            # Tekrar kullanılabilir, küçük ve atomsal UI bileşenleri (örn. Button, Input, Card).
 ┃ ┃ ┃ ┣ 📜 Button.tsx
 ┃ ┃ ┃ ┣ 📜 ButtonList.tsx
 ┃ ┃ ┃ ┗ 📜 index.ts
 ┃ ┃ ┗ 📜 index.ts       # Shared components'i tek bir noktadan dışa aktarır.
 ┃ ┣ 📂 config/          # Uygulamanın çeşitli yapılandırma ayarlarını ve sabitlerini barındırır. (API anahtarları, uygulama sabitleri vb.)
 ┃ ┣ 📂 hooks/           # Uygulama genelinde kullanılabilen özel React hook'ları.
 ┃ ┃ ┣ 📜 index.ts       # Buradaki hook'ları dışa aktarır.
 ┃ ┃ ┗ 📜 useAppFonts.ts # Uygulama başlangıcında tüm fontları yüklemekten sorumlu özel hook.
 ┃ ┣ 📂 store/           # Global durum yönetimi için root store veya paylaşılan store yapılandırmaları (örneğin Redux store).
 ┃ ┣ 📂 types/           # Uygulama genelinde kullanılan TypeScript arayüzleri ve tipler (API yanıt tipleri, global durum tipleri vb.).
 ┃ ┣ 📂 utils/           # Çeşitli yardımcı fonksiyonlar, formatlayıcılar, validasyonlar ve sabit tanımları.
 ┃ ┃ ┣ 📜 Fonts.ts       # Uygulamada kullanılan tüm font ailelerinin (Google Fonts veya özel fontlar) isimlerini ve varyasyonlarını tanımlayan dosya.
 ┃ ┃ ┣ 📜 Icons.ts       # `@expo/vector-icons` kütüphanesindeki ikon setlerini merkezi olarak dışa aktaran dosya.
 ┃ ┃ ┗ 📜 index.ts       # Utils klasöründeki tüm yardımcıları tek bir noktadan dışa aktarır.
 ┃ ┗ 📜 index.ts         # Shared modülünün tüm alt modüllerini (components, hooks, utils vb.) tek bir noktadan dışa aktarır.
```

---

## 🛠️ Kurulum

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Depoyu Klonlayın:**

    ```bash
    git clone [https://github.com/azovayt/expo-modular-starter.git]
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
    npx expo install @expo-google-fonts/nunito expo-font
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
  <AppIcons.Ionicons name="logo-react" size={24} color="white" />
  // Font kullanımı (NativeWind ile)
  <Text className="font-nunito-bold text-lg">Hello World</Text>
  // Ortak bileşen kullanımı
  <Button title="Buton İsmi" />
  ```
- **NativeWind ile Stil Oluşturma:** `tailwind.config.js` dosyasını güncelleyerek kendi özel Tailwind sınıflarınızı tanımlayabilirsiniz.
