import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root=path.resolve(import.meta.dirname,'../..');
const errors=[];
const ok=(value,message)=>{if(!value)errors.push(message)};
const read=(file)=>fs.readFileSync(path.join(root,file),'utf8');
const parseArray=(file)=>{const source=read(file),assignment=source.indexOf(' = ',source.indexOf('export const')),start=source.indexOf('[',assignment),end=source.lastIndexOf('];');return JSON.parse(source.slice(start,end+1))};
const words=(value)=>(value.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g)||[]).length;
const blogs=parseArray('lib/october12BlogPosts.ts');
const research=parseArray('lib/october12ResearchPosts.ts');
const manifest=JSON.parse(read('publishing/2026-10-12/manifest.json'));
const items=[...blogs.map(x=>({...x,section:'Blog'})),...research.map(x=>({...x,section:'Research'}))];

ok(manifest.site==='AccountsReceivableSpecialist','manifest site mismatch');
ok(manifest.canonicalDomain==='https://accountsreceivablespecialist.com','canonical domain mismatch');
ok(manifest.repository==='coolifystealthagents/accounts-receivable-specialist','repository mismatch');
ok(manifest.branch==='main','branch mismatch');
ok(manifest.baseSha==='a807f1466b3a7fa2c2bb0678ff7da6572a93e68b','base SHA mismatch');
ok(blogs.length===12,`expected 12 Blog articles, got ${blogs.length}`);
ok(research.length===5,`expected 5 Research articles, got ${research.length}`);
ok(manifest.items.length===17,'manifest must list 17 items');
ok(new Set(items.map(x=>x.slug)).size===17,'slugs must be unique');
ok(new Set(items.map(x=>x.title)).size===17,'titles must be unique');

const titleDate=/\b(?:2026|October|Oct\.?|12th)\b/i;
for(const item of items){
  ok(item.publishedAt==='2026-10-12',`${item.slug}: wrong publication date`);
  ok(!titleDate.test(item.title),`${item.slug}: title contains a date`);
  ok(item.thumbnail===`/thumbnails/october-12/${item.slug}.svg`,`${item.slug}: thumbnail path mismatch`);
  const paragraphs=(item.sections||[]).flatMap(x=>x.paragraphs||[]);
  ok(item.sections?.length>=8,`${item.slug}: insufficient section depth`);
  ok(words(paragraphs.join(' '))>=600,`${item.slug}: fewer than 600 substantive words`);
  ok(paragraphs.every(x=>x.length>=90),`${item.slug}: thin paragraph`);
  const thumb=`public${item.thumbnail}`;
  ok(fs.existsSync(path.join(root,thumb)),`${item.slug}: missing thumbnail`);
  if(fs.existsSync(path.join(root,thumb))){const svg=read(thumb);ok(/width="1200" height="630"/.test(svg),`${item.slug}: wrong thumbnail dimensions`);ok(svg.includes(`<title id="t">${item.title}</title>`),`${item.slug}: thumbnail title is not exact`)}
}

const allowed=new Set(['www.gao.gov','www.irs.gov','www.ftc.gov','www.consumerfinance.gov','www.nist.gov','www.cisa.gov','www.archives.gov','www.sec.gov','www.census.gov','fiscal.treasury.gov']);
for(const item of research){
  ok(item.sources.length===10,`${item.slug}: Research must have exactly 10 sources`);
  ok(new Set(item.sources.map(x=>x.url)).size===10,`${item.slug}: Research sources must be unique`);
  for(const source of item.sources){let url;try{url=new URL(source.url)}catch{}ok(url?.protocol==='https:',`${item.slug}: source must use HTTPS`);ok(allowed.has(url?.hostname),`${item.slug}: source host is not on authoritative allowlist: ${url?.hostname}`)}
  ok(item.sections.some(x=>x.heading==='Measurement method'),`${item.slug}: missing measurement method`);
  ok(item.sections.some(x=>x.heading==='Limitations and responsible use'),`${item.slug}: missing limitations`);
}

const paragraphs=items.flatMap(x=>(x.sections||[]).flatMap(s=>s.paragraphs.map(p=>({slug:x.slug,text:p.trim().replace(/\s+/g,' ')}))));
const duplicateGroups=new Map();for(const p of paragraphs){if(p.text.length<90)continue;const list=duplicateGroups.get(p.text)||[];list.push(p.slug);duplicateGroups.set(p.text,list)}
for(const [text,slugs] of duplicateGroups)ok(new Set(slugs).size===1,`duplicate substantive paragraph in ${[...new Set(slugs)].join(', ')}: ${text.slice(0,80)}`);

const thumbHashes=items.map(x=>crypto.createHash('sha256').update(read(`public${x.thumbnail}`)).digest('hex'));
ok(new Set(thumbHashes).size===17,'thumbnail files must be visually unique');
const content=read('lib/content.ts'),blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),blogIndex=read('app/blog/page.tsx'),researchIndex=read('app/research/page.tsx'),sitemap=read('app/sitemap.ts');
ok(content.includes("from './october12BlogPosts'")&&content.includes('blogPosts.unshift(...october12BlogPosts)'), 'Blog registry missing');
ok(content.includes("from './october12ResearchPosts'")&&content.includes('researchPosts.unshift(...october12ResearchPosts)'), 'Research registry missing');
ok(blogRoute.includes('blogPosts')&&blogRoute.includes('<time')&&blogRoute.includes('Related Blog articles')&&blogRoute.includes('Blog field guide'),'Blog route lacks publication/sidebar/related behavior');
ok(researchRoute.includes('researchPosts')&&researchRoute.includes('<time')&&researchRoute.includes('ResearchSidebar')&&researchRoute.includes('Related Research'),'Research route lacks publication/sidebar/related behavior');
ok(blogIndex.includes('blogPosts')&&!blogIndex.includes('researchPosts'),'Blog index is not separate');
ok(researchIndex.includes('researchPosts')&&!researchIndex.includes('blogPosts'),'Research index is not separate');
ok(sitemap.includes('blogPosts')&&sitemap.includes('researchPosts'),'sitemap does not expose both systems');
ok(manifest.items.every((x,i)=>x.slug===items[i].slug&&x.title===items[i].title&&x.section===items[i].section),'manifest items do not exactly match content');

if(errors.length){console.error(`FAIL (${errors.length})`);for(const error of errors)console.error(`- ${error}`);process.exit(1)}
console.log(`PASS: ${blogs.length} Blog + ${research.length} Research; 17 exact-title unique 1200x630 thumbnails; dates, titles, depth, 10-source Research, separation, registry, routes, sidebars, related content, sitemap, manifest, and duplicate prose verified.`);
