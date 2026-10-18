import {readFileSync,statSync} from 'node:fs'
import {validateProjectData,validateAuthors} from './validateProject.mjs'
for(const file of ['index.html','project-data.json','project-authors.json'])if(!statSync(file).isFile())throw Error('Eksik dosya: '+file)
if(statSync('project-data.json').size>5*1024*1024)throw Error('İçerik dosyası 5 MB sınırını aşıyor.')
const read=p=>JSON.parse(readFileSync(p,'utf8').replace(/^\uFEFF/,''))
const data=validateProjectData(read('project-data.json'));validateAuthors(read('project-authors.json'))
if(!data.game.questions.length)throw Error('Yayımlamadan önce en az bir oyun sorusu ekleyin.')
console.log(`İçerik doğrulandı: ${data.game.questions.length} soru, ${Object.keys(data.content).length} ders metni.`)
