# Duyu Reseptörleri — hazır web şablonu

Hazırlayanlar: **Olgu Ay · Ayşe Çelik Ay**

**[Görselli öğrenci kılavuzunu aç](https://olguay.github.io/duyu-reseptorleri/kilavuz/index.html)** · [Örnek uygulamayı aç](https://olguay.github.io/duyu-reseptorleri/)

Kılavuz gerçek GitHub ve uygulama ekranlarıyla ilk kurulumu, içerik indirme/yüklemeyi, kendi depoya eklemeyi ve geri almayı anlatır. Kendi kopyandaki kılavuz adresi: `https://HESABIN.github.io/DEPO-ADIN/kilavuz/index.html`.

> Öğrenciysen önce **Use this template → Create a new repository** ile kendi hesabına kopyala. Normal içerik güncellemesini **kendi deponda** yap. Görsellerdeki OlguAy hesabı örnektir.

## Hangi işlem ne yapar?

| İşlem | Sonuç |
|---|---|
| Uygulamada Değişiklikleri kaydet | Yalnızca o cihazda taslak saklar. |
| İçerik dosyasını indir | Kaydedilmiş dersleri ve oyunu project-data.json olarak dışa aktarır. |
| Başka cihazda İçerik dosyasını yükle | Yalnızca hedef cihazın içeriğini değiştirir. |
| Kendi GitHub depona dosyayı yükle + Commit changes | Doğrulama başarılıysa herkesin gördüğü web içeriğini günceller. |
| Yayımlanan içeriğe dön | Yalnızca cihazdaki taslağı kaldırır; GitHub değişikliğini geri almaz. |

## Bir kez: kendi siteni aç

1. Kendi hesabınla giriş yap. **Use this template → Create a new repository** seç.
2. **Owner** kendi hesabın, görünürlük **Public**, depo adı örneğin `duyu-projem` olsun. **Include all branches** kapalı kalabilir.
3. Kendi depoda **Settings → Pages → Source: GitHub Actions** seç.
4. **Actions → İçeriği doğrula ve yayımla → Run workflow** aç; `main` dalıyla başlat.
5. Sonuç yeşil olunca **Settings → Pages → Visit site** ile kendi uygulama adresini aç.

Öğretmene `github.com` depo adresini değil, derslerin açıldığı `HESABIN.github.io/DEPO-ADIN/` adresini ver.

## Her içerik güncellemesinde

1. Uygulamada düzenleme PIN'iyle giriş yap; metin/soruları düzenle ve ilgili ekrandaki **Değişiklikleri kaydet** düğmesine bas.
2. Üstte **İçerik dosyasını indir** seç. İndirilen dosyanın adı tam `project-data.json` olsun; `(1)` gibi ekleri kaldır.
3. Kendi deponun **ana klasöründe**, `main` dalında **Add file → Upload files → Choose your files** seç ve bu dosyayı yükle.
4. Kısa bir kayıt açıklaması yaz; **Commit directly to the main branch** seçili kalsın. **Commit changes** ile kaydet.
5. **Actions** sonucunun yeşil olmasını bekle, sonra kendi uygulama adresini yenile. Kırmızıysa hata ayrıntısını oku; önceki yayın korunur.
6. Eski içerik görünüyorsa önce cihaz taslağını indirip yedekle; **Yayımlanan içeriğe dön → Değişikliği uygula** seç.

Düzenleme PIN'i GitHub'a yazma yetkisi vermez. GitHub'da kendi hesabınla giriş yapman gerekir. Normal dosya yüklemesinden sonra ayrıca Run workflow gerekmez.

## Cihazlar arası taşıma

Kaynak cihazda kaydet → içerik dosyasını indir → dosyayı diğer cihaza ilet → hedef cihazda düzenlemeyi aç → İçerik dosyasını yükle → dosyayı seç → Değişikliği uygula. Hedef cihazda korumak istediğin taslak varsa önce yedekle. Bu işlem ortak web yayınını değiştirmez.

## Üç dosyanın farkı

- `project-data.json`: dersler, sorular, cevap sözleri, değerlendirmeler ve varsa oyun görseli. Skorları, PIN'leri veya öğrenci adlarını taşımaz. En fazla 5 MB; oyun görseli yaklaşık 2 MB olabilir. Yayın için en az bir geçerli soru gerekir.
- `project-authors.json`: ayrı sahiplik alanından indirilen öğrenci isimleri. Ana klasörde aynı adlı dosyayla değiştirilir. Normal içerik dosyası isimleri değiştiremez.
- `web-app.zip`: hazır uygulama kodu ve görseller. Normal soru/metin güncellemesinde bu dosyayı değiştirme. Yayın işlemi arşivi otomatik açar.

PIN'leri herkese açık depoya veya kılavuza yazma. Uygulama içindeki sahiplik koruması, dosyaları değiştirerek kopyalamayı kesin olarak engellemez. Kaynak proje ve Windows EXE paketi ayrı teslim edilir.

## Önceki içeriğe dön

Son çalışan yedeğini `project-data.json` adıyla ana klasöre yeniden yükleyip kaydet. Yedeğin yoksa dosyanın **History** bölümünden önceki tam sürümü indir; aynı adla tekrar yükle. Actions yeşil olduktan sonra siteyi yenile. Cihazdaki taslağı kaldırmadan önce yedekle.

## ZIP ile alternatif kurulum

Teslim edilen dış GitHub-Şablonu ZIP'ini çıkar. İçindeki **web-app.zip dosyasını ayrıca açma**; diğer dosyalarla birlikte depoya yükle. Gizli `.github/workflows/pages.yml` dosyasını atlama. Gerekirse **Add file → Create new file** ile bu yolu oluşturup paketteki iş akışını aynen yapıştır. Ardından Pages ve ilk yayın adımlarını uygula. Şablon düğmesi bu dosyaları da kopyaladığı için daha kolaydır.

Kopyalar bağımsızdır; başlangıç şablonundaki sonraki değişiklikler öğrenci kopyasına otomatik gitmez. Uygulama kodu güncellenecekse yeni hazır web paketi kullanılır, öğrencinin iki JSON dosyası korunur. Diğer öğrenciyi **Settings → Collaborators** ile davet edebilirsin; hesap şifresini paylaşma.
