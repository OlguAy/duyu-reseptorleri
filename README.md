# Duyu Reseptörleri — hazır web yayını

Hazırlayanlar: Olgu Ay ve Ayşe Çelik Ay.

Bu depo hazır uygulama arşivini (web-app.zip), iki içerik dosyasını ve yayın doğrulamasını içerir. Yayın işlemi arşivi otomatik açar; web-app.zip dosyasını normal içerik güncellemesinde değiştirmeyin. Kaynak proje ve Windows EXE paketi ayrı teslim edilir.

## İlk kurulum
1. Depo sahibi Settings > General > Template repository seçeneğini açar.
2. Öğrenci Use this template > Create a new repository ile kendi hesabında Public bir kopya oluşturur. Yalnızca varsayılan dal yeterlidir.
3. Yeni depoda Settings > Pages > Source: GitHub Actions seçilir.
4. Actions > İçeriği doğrula ve yayımla > Run workflow > main > Run workflow ile ilk yayın başlatılır.
5. İşlem yeşil olunca Settings > Pages içindeki Visit site bağlantısı açılır. Adres: https://HESAP.github.io/DEPO/.
6. Diğer öğrenci Settings > Collaborators üzerinden davet edilir. Hesap şifresi paylaşılmaz.

## Güncelleme
Uygulamada içeriği düzenle, yerel değişiklikleri kaydet, İçerik dosyasını indir. Kendi deponun ana klasöründe Add file > Upload files ile project-data.json dosyasını yükle ve Commit changes ile main dalına kaydet. Dosya adını değiştirme; (1) gibi indirme eklerini sil. Actions yeşil olunca siteyi yenile. Kontrol kırmızıysa önceki yayın çalışır; Actions içindeki doğrulama mesajını oku.

Düzenleme PIN'i yalnızca yerel cihazı açar. İnternette güncelleme yapabilmek için ayrıca bu GitHub deposuna yazma yetkisi gerekir.

## Geri alma
Son çalışan dosyanın yedeğini aynı adla tekrar yükle. Yedek yoksa project-data.json > History üzerinden eski sürümü aç, dosyayı indir, adını project-data.json yap ve ana klasöre yeniden yükle. Actions yeşil olduktan sonra siteyi yenile. Yerel taslak korunuyorsa önce indir; sonra Yayımlanan içeriğe dön seç.

## Öğrenci künyesi
Ayrı sahiplik alanından indirilen project-authors.json ana klasörde aynı adlı dosyanın yerine yüklenir. Normal içerik dosyası isimleri değiştiremez. PIN'ler bu depoda/kılavuzda paylaşılmaz.

## Şablon ve öğrenci kopyaları
Kopyalar bağımsızdır. Bu depodaki sonraki değişiklikler öğrenci kopyasına otomatik gitmez. Kod güncellemesinde yeni hazır web paketi kullanılır; öğrencinin iki JSON dosyası korunur. Bu depo bir kopyalamayı engelleme sistemi değildir. Hazırlayanların künyesi ve tarihli teslimler korunmalıdır.

## ZIP ile alternatif kurulum
ZIP'i tamamen çıkarın. Yeni Public depo oluşturun. ZIP dosyasını değil, içindeki dosyaları ve klasörleri yükleyin. Gizli .github/workflows/pages.yml klasörünün de yüklenmesi gerekir; gizli klasör atlandıysa GitHub'da Add file > Create new file ile .github/workflows/pages.yml oluşturup paketteki metni aynen yapıştırın. Yukarıdaki Pages adımlarını uygulayın. Template yöntemi gizli dosyaları da kopyaladığı için daha kolaydır.

Ekran görüntülü kılavuz için kendi çalışan web adresinizin sonuna kilavuz/index.html ekleyin.
