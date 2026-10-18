const object = (v, label) => { if (!v || typeof v !== 'object' || Array.isArray(v)) throw Error(`${label}: nesne bekleniyor.`); return v }
const keys = (v, allowed, label) => { object(v,label); if (Object.keys(v).some(k => !allowed.includes(k))) throw Error(`${label}: desteklenmeyen alan var.`) }
const string = (v, label, max=12000, empty=false) => { if (typeof v !== 'string' || v.length>max || (!empty && !v.trim())) throw Error(`${label}: geçersiz metin.`) }
const list = (v,label,max=500) => { if(!Array.isArray(v)||v.length>max) throw Error(`${label}: geçersiz liste.`) }
export function validateGame(v, allowDraft=false) {
 keys(v,['questions','phrases','successPhrases','evaluations','teacherImage'],'Oyun')
 list(v.questions,'Sorular'); const ids=new Set()
 for(const q of v.questions){keys(q,['id','text','options','correctIndex'],'Soru'); string(q.id,'Soru kimliği',100); if(ids.has(q.id))throw Error('Soru kimlikleri farklı olmalı.');ids.add(q.id);string(q.text,'Soru metni',12000,allowDraft);list(q.options,'Seçenekler',5);if(q.options.length!==5)throw Error('Her soru beş seçenekli olmalı.');q.options.forEach(o=>string(o,'Seçenek',4000,allowDraft));if(!Number.isInteger(q.correctIndex)||q.correctIndex<0||q.correctIndex>4)throw Error('Doğru cevap 0–4 aralığında olmalı.')}
 for(const name of ['phrases','successPhrases']){list(v[name],name,200);v[name].forEach(x=>string(x,'Cevap sözü',500))}
 list(v.evaluations,'Değerlendirmeler',100)
 const evaluationIds=new Set()
 for(const e of v.evaluations){keys(e,['id','min','max','text'],'Değerlendirme');string(e.id,'Değerlendirme kimliği',100);if(evaluationIds.has(e.id))throw Error('Değerlendirme kimlikleri farklı olmalı.');evaluationIds.add(e.id);string(e.text,'Değerlendirme metni',1000,allowDraft);if(!Number.isFinite(e.min)||!Number.isFinite(e.max)||e.min<0||e.max>100||e.min>e.max)throw Error('Değerlendirme puan aralığı geçersiz.')}
 if(v.teacherImage!==undefined && (typeof v.teacherImage!=='string'||v.teacherImage.length>2800000||!/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/.test(v.teacherImage)))throw Error('Oyun görseli PNG, JPEG, WebP veya GIF olmalı (en fazla yaklaşık 2 MB).')
 return v
}
export function validateProjectData(v,allowDraft=false){
 keys(v,['schemaVersion','updatedAt','content','game'],'İçerik dosyası')
 if(v.schemaVersion!==1)throw Error('İçerik dosyası sürümü desteklenmiyor.')
 string(v.updatedAt,'Sürüm tarihi',80);if(!Number.isFinite(Date.parse(v.updatedAt)))throw Error('Sürüm tarihi geçersiz.')
 object(v.content,'Ders metinleri');if(Object.keys(v.content).length>20)throw Error('En fazla 20 ders aşaması kullanılabilir.')
 for(const [key,c] of Object.entries(v.content)){
  if(!/^(eye|ear|nose|tongue|skin)\.(organ|receptor|neuron|synapse)$/.test(key))throw Error('Bilinmeyen ders aşaması: '+key)
  keys(c,['eyebrow','title','description','bullets','sourceNote'],'Ders metni');string(c.eyebrow,'Üst başlık',500,true);string(c.title,'Başlık',1000);string(c.description,'Açıklama');list(c.bullets,'Bilgi maddeleri',40);c.bullets.forEach(x=>string(x,'Bilgi maddesi',4000));if(c.sourceNote!==undefined)string(c.sourceNote,'Kaynak notu',2000,true)
 }
 validateGame(v.game,allowDraft);return v
}
export function validateAuthors(v){keys(v,['schemaVersion','students'],'Öğrenci künyesi');if(v.schemaVersion!==1)throw Error('Künye sürümü desteklenmiyor.');list(v.students,'Öğrenci adları',30);if(!v.students.length)throw Error('En az bir öğrenci adı gerekli.');v.students.forEach(s=>string(s,'Öğrenci adı',100));return v}
