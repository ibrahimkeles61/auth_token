# Auth Token

Bu projemde amacım yalnızca bir mobil uygulamanın kapatılıp tekrar açıldığında da kullanıcıyı hatırlamasını sağlamaktı.

## Kullandığım Teknolojiler

Authentication için: firebase.

Uygulamanın token kaydetmesi için: async storage, kütüphanesi: react-native-async-storage/async-storage.

Route: react-navigation/native , react-navigation/native-stack.

Veri çekmek için: Axios.

## Tanıtım

Projede bir mail ve şifre kullanarak giriş yapma ekranı, bir mail ve şifre ile kayıt olma ekranı (doğrulamalar frontendde yapıldı), birde kullanıcıyı karşılayan hoşgeldiniz ekranı var.

Eğer kayıt olur veya giriş yaparsanız giriş ekranına atıyor ve uygulamayı telefonda kapatıp tekrar açtığınızda da giriş yapmış kullanıcıyı hatırlıyor.

## Kurulum ve Kullanım

Bu projeyi bilgisayarınızda çalıştırmak için kod editörünüzde bir klasör açıp, terminalde önce "git init" komutunu, sonra "git clone https://github.com/ibrahimkeles61/auth_token.git" komutunu çalıştırıp, işlem tamamlandıktan sonra "npm install" (ben npm kullanıyorum) komutuyla gereksinimlerin inmesini beklemelisiniz. Daha sonra terminalde "expo start" diyerek çalıştırabilirsiniz. İsterseniz telefonunuza expo go uygulamasını indirip, bu uygulamayı kullanarak, bilgisayarınızda terminaldeki kare kodu taratabilir, veya bilgisayarınızdaki Android Emülatörü kullanmak isterseniz seçeneklerden androidi seçmek için terminalde "a" yazabilirsiniz.
