var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// worker.js
var COMPOSER_HTML = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Chirp \u2022 Municipal Composer</title><style>
:root{color-scheme:dark;font-family:system-ui,sans-serif;background:#101516;color:#f1f7f6}*{box-sizing:border-box}body{margin:0 auto;max-width:680px;padding:20px 16px 70px}h1{color:#23d6c5;font-size:2rem}h1 small{color:#91a4a6;font-size:.7rem}a{color:#23d6c5}main{background:#171e21;border:1px solid #2c393c;border-radius:18px;padding:22px}label{display:block;margin:18px 0 8px;font-weight:700}select,textarea,input{width:100%;font:inherit;background:#101516;color:#fff;border:1px solid #52676a;border-radius:10px;padding:12px;min-height:46px}textarea{min-height:140px;resize:vertical}button,.button{display:inline-block;font:inherit;background:#23d6c5;color:#071615;border:0;border-radius:22px;padding:12px 18px;font-weight:800;cursor:pointer;min-height:44px;text-decoration:none}button:disabled{opacity:.55;cursor:not-allowed}.muted{color:#91a4a6}.row{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;align-items:center}.preview{white-space:pre-wrap;overflow-wrap:anywhere;border:1px solid #52676a;border-radius:12px;padding:16px;margin-top:14px}.notice{padding:12px;border-radius:8px;background:#263536}#editor[hidden],#login[hidden],#preview[hidden]{display:none}small{color:#91a4a6}a:focus-visible,button:focus-visible,textarea:focus-visible,select:focus-visible{outline:3px solid #fb6e9b;outline-offset:3px}
.mention-suggestions{border:1px solid #52676a;border-radius:12px;margin-top:6px;max-height:240px;overflow-y:auto;background:#202a2d}.mention-suggestions[hidden]{display:none}.mention-suggestions button{display:block;width:100%;border-radius:0;text-align:left;background:transparent;color:#f1f7f6;padding:10px 12px;border-bottom:1px solid #354447;min-height:44px}.mention-suggestions button[aria-selected="true"],.mention-suggestions button:hover{background:#164b48}.mention-suggestions small{display:block}.mention-highlight{font-weight:800;border-radius:4px;padding:0 3px}.mention-highlight.toni{color:#ff91c7;background:#4c203b}.mention-highlight.tiffany{color:#dfc2ff;background:#38234e}.notify{margin:12px 0}.notify button{padding:9px 14px}.notify-list{max-height:320px;overflow:auto;border:1px solid #52676a;border-radius:12px;margin-top:10px}.notify-list .choice{font-size:.94rem}.notify-list[hidden]{display:none}.notify-toolbar{display:flex;gap:8px;justify-content:space-between;align-items:center;padding:10px;flex-wrap:wrap}.notify-toolbar button,.notify-detail button,.notify-entry button{font-size:.9rem;padding:8px 12px;min-height:40px}.notify-entry{border-bottom:1px solid #2c393c}.notify-entry.is-mention{border-left:3px solid #a97fe9}.notify-entry.is-reply{border-left:3px solid #23d6c5}.notify-entry.is-test{border-left:3px dashed #f0bd6b}.notify-summary{display:flex;align-items:flex-start;gap:10px;width:100%;padding:12px!important}.notify-avatar{width:38px;height:38px;min-width:38px;border-radius:50%;display:grid;place-items:center;overflow:hidden;background:#304244;font-size:1.25rem}.notify-avatar{position:relative}.notify-avatar img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}.notify-content{flex:1;min-width:0}.notify-meta{display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:4px}.notify-meta small{color:#a7c2c0}.notify-kind{font-size:.72rem;border-radius:999px;padding:2px 7px;background:#254c4a;color:#b7fff5;font-weight:700}.is-mention .notify-kind{background:#443052;color:#e3c5ff}.is-test .notify-kind{background:#514124;color:#ffe2a1}.notify-snippet{line-height:1.4;overflow-wrap:anywhere}.notify-entry .choice.notify-summary{display:flex;align-items:flex-start;gap:10px;border:0}.notify-entry .notify-content{display:block;flex:1;min-width:0}.notify-entry .notify-meta{display:flex}.notify-entry .notify-snippet{display:block}.notify-entry:not(.notify-unread) .notify-summary{opacity:.83}.notify-unread .notify-meta strong:before{content:'\u25CF ';color:#23d6c5}.notify-entry .choice{border:0}.notify-entry .row{padding:0 10px 8px}.notify-detail{padding:12px;border:1px solid #52676a;border-radius:12px;margin:8px;background:#101516;overflow-wrap:anywhere}.notify-detail article{padding:8px 0;border-bottom:1px solid #2c393c;white-space:pre-wrap}.notify-detail article:last-child{border:0}.notify-detail strong{color:#23d6c5}.notify-detail .row{margin-top:12px}.notify-list{max-height:min(70vh,540px)}.finder{margin:12px 0}.finder input{margin:4px 0 10px}.choices{max-height:260px;overflow:auto;border:1px solid #52676a;border-radius:12px}.choice{display:block;width:100%;text-align:left;background:transparent;color:#f1f7f6;border-radius:0;border-bottom:1px solid #2c393c;font-weight:400;white-space:normal;overflow-wrap:anywhere}.choice:last-child{border-bottom:0}.choice[aria-pressed="true"]{background:#164b48;color:#fff}.choice small{display:block;margin-top:5px}.conversation{margin:12px 0;padding:12px;border:1px solid #52676a;border-radius:12px}.conversation article{padding:10px 0;border-bottom:1px solid #2c393c;white-space:pre-wrap;overflow-wrap:anywhere}.conversation article:last-child{border-bottom:0}.conversation strong{color:#23d6c5}.conversation .indent{margin-left:14px;border-left:2px solid #52676a;padding-left:12px}@media(max-width:480px){body{padding:12px 10px 44px}main{padding:14px}h1{font-size:1.55rem}.choice{padding:14px}.notify-toolbar{align-items:flex-start}.notify-toolbar button{min-height:44px}.notify-entry .choice.notify-summary{padding:11px 9px!important;gap:9px}.notify-avatar{width:34px;height:34px;min-width:34px}.notify-meta{gap:5px}.notify-meta strong{max-width:100%;overflow-wrap:anywhere}.notify-meta small{font-size:.76rem}.notify-snippet{font-size:.91rem}.notify-simulator button{width:100%;margin:5px 0}.mention-suggestions{max-height:36vh}.mention-suggestions button{min-height:48px}.notify-list{max-height:58vh}} </style></head><body><header class="row"><h1>\u{1F426} Chirp <small>COMPOSER</small></h1><a href="https://gnomeville.github.io/chirp/">\u2190 Public Chirp</a></header><main><p class="muted">Chirp Composer \xB7 Authorized municipal publishing.</p><div id="login" hidden><p>Sign in to Chirp.</p><a class="button" href="/login">Admin: GitHub</a> <a class="button" href="/google/login">Toni: Google</a></div><section id="editor" hidden><div class="row"><span id="identity"></span><a href="/logout">Sign out</a></div><div class="notify"><button type="button" id="bell" aria-expanded="false" aria-controls="notifications">\u{1F514} Notifications <span id="unread">0</span></button><div id="notifications" class="notify-list" hidden><div class="notify-toolbar"><strong>Notification inbox</strong><button type="button" id="markAll">Mark all as read</button></div><div id="notificationItems"></div></div><small>Unread status is saved in this browser only.</small></div><label for="mode">Publication type</label><select id="mode"><option value="post">New Chirp</option><option value="reply">Reply to an existing Chirp</option><option value="thread">Reply to a specific comment</option><option value="edit">Edit existing Chirp or reply</option></select><label for="resident">Speaking as</label><select id="resident"></select><div id="replyWrap" hidden><label id="targetLabel" for="postSearch">Replying to</label><div class="finder"><input id="postSearch" type="search" placeholder="Search Chirps or residents" aria-label="Search Chirps"><div id="postChoices" class="choices" role="group" aria-label="Chirp results"></div></div><select id="target" hidden aria-label="Selected Chirp"></select><div id="conversation" class="conversation" aria-live="polite"></div></div><div id="editWrap" hidden><label for="editItem">Choose what to edit</label><select id="editItem"></select><p class="muted">Editing preserves the original author, date, and replies. Changes will be marked Edited.</p></div><div id="threadWrap" hidden><label for="parentReply">Replying to this comment</label><div class="finder"><input id="replySearch" type="search" placeholder="Search comments" aria-label="Search comments"><div id="replyChoices" class="choices" role="group" aria-label="Comment results"></div></div><select id="parentReply" hidden aria-label="Selected comment"></select></div><label for="message">Message</label><textarea id="message" maxlength="2000" placeholder="What has the municipality done now?" aria-autocomplete="list" aria-controls="mentionSuggestions" aria-expanded="false"></textarea><div id="mentionSuggestions" class="mention-suggestions" role="listbox" aria-label="Mention a Gnomeville resident" hidden></div><div class="row"><small id="count">0 / 2000 characters</small><button id="previewButton" type="button">Preview</button></div><div id="preview" hidden class="preview"></div><p class="notice" id="status" role="status" aria-live="polite">Nothing is published until you press Publish.</p><button id="publish" type="button">Publish to Chirp</button></section></main><script>
const $=id=>document.getElementById(id),mode=$('mode'),resident=$('resident'),target=$('target'),parentReply=$('parentReply'),message=$('message');let people={},posts=[],viewerRole='admin',notices=[];const setStatus=s=>$('status').textContent=s;
async function api(path,opts={}){const r=await fetch(path,{credentials:'same-origin',...opts});const data=await r.json().catch(()=>({error:'Unexpected server response'}));if(!r.ok)throw Error(data.error||'Request failed');return data}
function fill(sel,items){sel.replaceChildren();for(const [value,label] of items){const o=document.createElement('option');o.value=value;o.textContent=label;sel.append(o)}}
let editDraftKey='';function editItems(){const p=posts.find(p=>p.id===target.value);const items=[];if(p)items.push([p.id,'Original Chirp: '+p.text.slice(0,100)]);function walk(arr,path=''){(arr||[]).forEach((r,i)=>{const pos=path?path+'-'+i:String(i);items.push([r.id||'legacy-'+p.id+'-'+pos,'Reply: '+r.text.slice(0,100)]);walk(r.replies,pos)})}if(p)walk(p.replies);const prior=$('editItem').value;fill($('editItem'),items);if(items.some(([id])=>id===prior))$('editItem').value=prior;loadEdit()}
function loadEdit(){if(mode.value!=='edit')return;const p=posts.find(p=>p.id===target.value);let item=p?.id===$('editItem').value?p:null;function find(arr){for(const r of arr||[]){if(r.id===$('editItem').value)return r;const x=find(r.replies);if(x)return x}return null}if(!item)item=find(p?.replies);const key=target.value+'|'+$('editItem').value;if(key===editDraftKey)return;editDraftKey=key;message.value=item?.text||'';$('count').textContent=message.value.length+' / 2000 characters';showPreview(false)}
function toggle(){if(typeof closeMentions==='function')closeMentions();const isReply=mode.value!=='post';$('replyWrap').hidden=!isReply;$('threadWrap').hidden=mode.value!=='thread';$('editWrap').hidden=mode.value!=='edit';if(mode.value==='thread')fillReplies();if(mode.value==='edit'){editDraftKey='';editItems()}$('targetLabel').textContent=mode.value==='edit'?'Find the Chirp to edit':'Replying to';renderPostChoices();renderConversation();$('publish').textContent=mode.value==='edit'?'Save edits':isReply?'Publish reply':'Publish Chirp';showPreview(false)}
function renderPostChoices(){const q=$('postSearch').value.trim().toLowerCase();const results=posts.filter(p=>((people[p.who]?.name||p.who)+' '+p.text).toLowerCase().includes(q)).slice(0,80);const host=$('postChoices');host.replaceChildren();for(const p of results){const b=document.createElement('button');b.type='button';b.className='choice';b.setAttribute('aria-pressed',String(p.id===target.value));b.textContent=(people[p.who]?.name||p.who)+': '+p.text.slice(0,230);b.addEventListener('click',()=>{target.value=p.id;fillReplies();renderPostChoices();renderConversation()});host.append(b)}if(!results.length)host.textContent='No matching Chirps.'}
function renderConversation(){const host=$('conversation');host.replaceChildren();const p=posts.find(p=>p.id===target.value);if(!p)return;const title=document.createElement('strong');title.textContent='Conversation';host.append(title);function add(who,text,depth){const a=document.createElement('article');if(depth)a.className='indent';const name=document.createElement('strong');name.textContent=people[who]?.name||who||'Unknown';const body=document.createElement('div');body.textContent=text||'';a.append(name,body);host.append(a)}add(p.who,p.text,0);function walk(arr,depth){for(const r of arr||[]){add(r.who,r.text,depth);walk(r.replies,depth+1)}}walk(p.replies,1)}
function renderReplyChoices(){const q=$('replySearch').value.trim().toLowerCase();const host=$('replyChoices');host.replaceChildren();const p=posts.find(p=>p.id===target.value);function walk(arr,path=''){(arr||[]).forEach((r,i)=>{const pos=path?path+'-'+i:String(i),id=r.id||'legacy-'+p.id+'-'+pos;if(((people[r.who]?.name||r.who)+' '+r.text).toLowerCase().includes(q)){const b=document.createElement('button');b.type='button';b.className='choice';b.setAttribute('aria-pressed',String(parentReply.value===id));b.textContent=(people[r.who]?.name||r.who)+': '+r.text.slice(0,230);b.addEventListener('click',()=>{parentReply.value=id;renderReplyChoices()});host.append(b)}walk(r.replies,pos)})}if(p)walk(p.replies);if(!host.children.length)host.textContent='No matching comments.'}
function fillReplies(){const p=posts.find(p=>p.id===target.value);const items=[];function walk(replies,prefix='',path=''){(replies||[]).forEach((r,i)=>{const pos=path?path+'-'+i:String(i);items.push([r.id||'legacy-'+p.id+'-'+pos,prefix+(people[r.who]?.name||r.who)+': '+r.text.slice(0,100)]);walk(r.replies,(prefix||'')+'\u21B3 ',pos)})}walk(p?.replies);fill(parentReply,items);if(!items.length)parentReply.replaceChildren(new Option('No replies yet',''));renderReplyChoices();}
function appendMentionText(node,value){const valueText=String(value||'');const re=/@(?:GnomevilleDA|toni|tiffany|gnomeville)\\b/gi;let pos=0,match;while((match=re.exec(valueText))){if(match.index>pos)node.append(document.createTextNode(valueText.slice(pos,match.index)));const span=document.createElement('span');span.className='mention-highlight '+(/^@(?:GnomevilleDA|toni)$/i.test(match[0])?'toni':'tiffany');span.textContent=match[0];node.append(span);pos=re.lastIndex}if(pos<valueText.length)node.append(document.createTextNode(valueText.slice(pos)))}
function noticeKey(){return 'chirp-notifications-read-v1-'+(viewerRole==='toni'?'toni':'tiffany')}
function readNotices(){try{return new Set(JSON.parse(localStorage.getItem(noticeKey())||'[]'))}catch{return new Set()}}
function markRead(id){try{const read=readNotices();read.add(id);localStorage.setItem(noticeKey(),JSON.stringify([...read].slice(-1000)))}catch{}renderNotifications()}
function collectNotifications(){const who=viewerRole==='toni'?'toni':'tiffany',mention=viewerRole==='toni'?/@(?:GnomevilleDA|toni)\\b/i:/@(?:tiffany|gnomeville)\\b/i;const items=[];function inspect(r,post,parent,ancestry,idx){const id=r.id||'legacy-'+post.id+'-'+ancestry+'-'+idx;const mentioned=mention.test(r.text||'');const repliedToMe=parent?.who===who&&r.who!==who;if(r.who!==who&&(mentioned||repliedToMe))items.push({id,who:r.who,kind:mentioned?'mention':'reply',postId:post.id,replyId:id,text:(mentioned?'Mention':'Reply')+' from '+(people[r.who]?.name||r.who)+': '+(r.text||'').slice(0,150),date:r.createdAt||post.createdAt||''});(r.replies||[]).forEach((child,i)=>inspect(child,post,r,ancestry+'-'+idx,i))}
for(const p of posts){if(p.who!==who&&mention.test(p.text||''))items.push({id:p.id,who:p.who,kind:'mention',postId:p.id,replyId:null,text:'Mention from '+(people[p.who]?.name||p.who)+': '+p.text.slice(0,150),date:p.createdAt||''});(p.replies||[]).forEach((r,i)=>inspect(r,p,p,String(posts.indexOf(p)),i))}
notices=items.sort((a,b)=>String(b.date).localeCompare(String(a.date))).slice(0,150);renderNotifications()}
let openNotice=null;
function markAllRead(){try{const read=readNotices();for(const n of notices)read.add(n.id);localStorage.setItem(noticeKey(),JSON.stringify([...read].slice(-1000)))}catch{}renderNotifications()}
function notificationDetail(n){const wrap=document.createElement('div');wrap.className='notify-detail';const post=posts.find(p=>p.id===n.postId);if(!post)return wrap;const heading=document.createElement('strong');heading.textContent='Conversation';wrap.append(heading);function line(item){const article=document.createElement('article'),name=document.createElement('strong'),body=document.createElement('div');name.textContent=people[item.who]?.name||item.who||'Unknown';appendMentionText(body,item.text||'');article.append(name,body);wrap.append(article)}line(post);function find(arr){for(const r of arr||[]){if(r.id===n.replyId)return r;const found=find(r.replies);if(found)return found}return null}if(n.replyId){const reply=find(post.replies);if(reply)line(reply)}const actions=document.createElement('div');actions.className='row';const reply=document.createElement('button');reply.type='button';reply.textContent='Reply to this conversation';reply.addEventListener('click',()=>{mode.value=n.replyId?'thread':'reply';toggle();target.value=n.postId;fillReplies();renderPostChoices();renderConversation();if(n.replyId){parentReply.value=n.replyId;renderReplyChoices()}$('notifications').hidden=true;$('bell').setAttribute('aria-expanded','false');message.focus()});const close=document.createElement('button');close.type='button';close.textContent='Back to notifications';close.addEventListener('click',()=>{openNotice=null;renderNotifications()});actions.append(reply,close);wrap.append(actions);return wrap}
function notificationTime(value){if(!value)return 'Date unavailable';const d=new Date(value);return Number.isNaN(d.getTime())?'Date unavailable':d.toLocaleString(undefined,{dateStyle:'medium',timeStyle:'short'})}
function notificationAvatar(who){const p=people[who]||{},el=document.createElement('span');el.className='notify-avatar';el.textContent=p.avatar||'\u{1F426}';if(p.image){const img=document.createElement('img');img.alt='';img.loading='lazy';img.src='https://raw.githubusercontent.com/gnomeville/chirp/main/'+String(p.image).replace(/^\\/+/, '');img.addEventListener('error',()=>img.remove());el.append(img)}return el}
function renderNotifications(){const host=$('notificationItems'),read=readNotices();$('unread').textContent=String(notices.filter(n=>!read.has(n.id)).length);host.replaceChildren();for(const n of notices){const unread=!read.has(n.id),entry=document.createElement('div');entry.className='notify-entry '+(n.kind==='mention'?'is-mention':'is-reply')+(unread?' notify-unread':'');const b=document.createElement('button');b.type='button';b.className='choice notify-summary';b.setAttribute('aria-expanded',String(openNotice===n.id));b.append(notificationAvatar(n.who));const content=document.createElement('span');content.className='notify-content';const meta=document.createElement('span');meta.className='notify-meta';const name=document.createElement('strong');name.textContent=people[n.who]?.name||n.who||'Resident';const kind=document.createElement('span');kind.className='notify-kind';kind.textContent=n.kind==='mention'?'MENTION':'REPLY';const date=document.createElement('small');date.textContent=notificationTime(n.date);meta.append(name,kind,date);const snippet=document.createElement('span');snippet.className='notify-snippet';const body=n.text.replace(/^(?:\\[TEST ONLY\\] )?(?:Mention|Reply) from [^:]+:\\s*/,'');appendMentionText(snippet,body);content.append(meta,snippet);b.append(content);b.addEventListener('click',()=>{openNotice=openNotice===n.id?null:n.id;markRead(n.id)});entry.append(b);if(openNotice===n.id)entry.append(notificationDetail(n));if(unread){const actions=document.createElement('div');actions.className='row';const mark=document.createElement('button');mark.type='button';mark.textContent='Mark as read';mark.addEventListener('click',()=>markRead(n.id));actions.append(mark);entry.append(actions)}host.append(entry)}if(!notices.length)host.textContent='No replies or mentions found.'}

$('markAll').addEventListener('click',markAllRead);
$('bell').addEventListener('click',()=>{const open=$('notifications').hidden;$('notifications').hidden=!open;$('bell').setAttribute('aria-expanded',String(open))});
function showPreview(show){$('preview').hidden=!show;if(show){$('preview').replaceChildren();const title=document.createElement('strong');title.textContent=(people[resident.value]?.name||resident.value)+(mode.value!=='post'?' \xB7 replying':' \xB7 new Chirp');const body=document.createElement('p');body.textContent=message.value;$('preview').append(title,body)}}
async function start(){try{const me=await api('/api/me');if(!me.authorized){$('login').hidden=false;const next=location.pathname+location.search;for(const a of $('login').querySelectorAll('a'))a.href=a.getAttribute('href')+'?next='+encodeURIComponent(next);return}$('editor').hidden=false;$('identity').textContent=me.role==='toni'?'Posting as Toni':'Signed in as @'+me.login;const data=await api('/api/data');viewerRole=me.role;people=data.people;posts=data.posts;collectNotifications();fill(resident,Object.entries(people).filter(([k])=>me.role!=='toni'||k==='toni').map(([k,p])=>[k,p.name||k]).sort((a,b)=>a[1].localeCompare(b[1])));resident.disabled=me.role==='toni';if(me.role==='toni'){resident.previousElementSibling.hidden=true;resident.hidden=true;}fill(target,posts.map(p=>[p.id,(people[p.who]?.name||p.who)+': '+p.text.slice(0,90)]));toggle();const qp=new URLSearchParams(location.search);if(qp.has('post')){target.value=qp.get('post');if(!posts.some(p=>p.id===target.value)){setStatus('Linked Chirp was not found. Select a Chirp manually.');return}mode.value=qp.has('reply')?'thread':'reply';toggle();if(qp.has('reply'))parentReply.value=qp.get('reply');if(qp.has('as')&&me.role!=='toni'&&people[qp.get('as')])resident.value=qp.get('as');renderPostChoices();renderConversation();renderReplyChoices();}}catch(e){$('login').hidden=false;$('login').insertAdjacentText('beforeend',' Unable to load composer: '+e.message)}}
mode.addEventListener('change',toggle);target.addEventListener('change',()=>{fillReplies();editDraftKey='';editItems();renderPostChoices();renderConversation()});$('editItem').addEventListener('change',loadEdit);$('postSearch').addEventListener('input',renderPostChoices);$('replySearch').addEventListener('input',renderReplyChoices);const mentionMenu=$('mentionSuggestions');let mentionStart=-1,mentionEnd=-1,mentionResults=[],mentionIndex=0;
function closeMentions(){mentionMenu.hidden=true;message.setAttribute('aria-expanded','false');mentionStart=-1;mentionResults=[]}
function currentMention(){const pos=message.selectionStart,before=message.value.slice(0,pos),match=before.match(/(^|\\s)@([\\w]*)$/);if(!match)return null;return {start:pos-match[2].length-1,end:pos,query:match[2].toLowerCase()}}
function insertMention(person){if(mentionStart<0)return;const handle='@'+person.handle+' ',newText=message.value.slice(0,mentionStart)+handle+message.value.slice(mentionEnd);if(newText.length>2000){setStatus('Chirp is at its character limit.');return}message.value=newText;const pos=mentionStart+handle.length;closeMentions();message.focus();message.setSelectionRange(pos,pos);$('count').textContent=message.value.length+' / 2000 characters';showPreview(false)}
function updateMentions(){const match=currentMention();if(!match){closeMentions();return}mentionStart=match.start;mentionEnd=match.end;mentionResults=Object.values(people).filter(p=>p.handle&&((p.name||'').toLowerCase().includes(match.query)||p.handle.toLowerCase().includes(match.query))).sort((a,b)=>a.name.localeCompare(b.name)).slice(0,8);mentionIndex=0;mentionMenu.replaceChildren();for(let i=0;i<mentionResults.length;i++){const p=mentionResults[i],button=document.createElement('button');button.type='button';button.setAttribute('role','option');button.setAttribute('aria-selected',String(i===mentionIndex));button.textContent=p.name+'  @'+p.handle;button.addEventListener('mousedown',e=>e.preventDefault());button.addEventListener('click',()=>insertMention(p));mentionMenu.append(button)}mentionMenu.hidden=!mentionResults.length;message.setAttribute('aria-expanded',String(!!mentionResults.length))}
message.addEventListener('keydown',e=>{if(mentionMenu.hidden)return;if(e.key==='Escape'){e.preventDefault();closeMentions()}else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();mentionIndex=(mentionIndex+(e.key==='ArrowDown'?1:-1)+mentionResults.length)%mentionResults.length;[...mentionMenu.children].forEach((b,i)=>b.setAttribute('aria-selected',String(i===mentionIndex)))}else if(e.key==='Enter'||e.key==='Tab'){e.preventDefault();insertMention(mentionResults[mentionIndex])}});
message.addEventListener('click',updateMentions);message.addEventListener('keyup',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key))updateMentions()});
message.addEventListener('input',()=>{updateMentions();$('count').textContent=message.value.length+' / 2000 characters';showPreview(false)});resident.addEventListener('change',()=>showPreview(false));$('previewButton').addEventListener('click',()=>showPreview(true));$('publish').addEventListener('click',async()=>{const text=message.value.trim();if(!text){setStatus('Write something first.');message.focus();return}if(!people[resident.value]){setStatus('No authorized posting identity.');return}if(!confirm(mode.value==='edit'?'Save edits to this existing message?':'Publish this '+(mode.value==='post'?'Chirp':'reply')+' as '+people[resident.value].name+'? This will publish publicly to Chirp.'))return;$('publish').disabled=true;setStatus('Publishing to Chirp\u2026');try{const result=await api('/api/publish',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({mode:mode.value,who:resident.value,text,target:mode.value!=='post'?target.value:null,parentReply:mode.value==='thread'?parentReply.value:null,editId:mode.value==='edit'?$('editItem').value:null})});setStatus(mode.value==='edit'?'Edits saved! Changes may take a minute to appear.':mode.value==='post'?'Chirp published! It may take a minute to appear on the public feed.':'Reply published! It may take a minute to appear in the conversation.');if(mode.value!=='edit')message.value='';$('count').textContent='0 / 2000 characters';showPreview(false);if(result.posts){posts=result.posts;collectNotifications();fill(target,posts.map(p=>[p.id,(people[p.who]?.name||p.who)+': '+p.text.slice(0,90)]));if(mode.value==='thread')fillReplies();renderPostChoices();renderConversation()}}catch(e){setStatus('Not published: '+e.message)}finally{$('publish').disabled=false}});start();
<\/script></body></html>
`;
var OWNER = "gnomeville";
var REPO = "chirp";
var encoder = new TextEncoder();
var decoder = new TextDecoder();
var json = /* @__PURE__ */ __name((x, status = 200, extra = {}) => new Response(JSON.stringify(x), { status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "X-Content-Type-Options": "nosniff", ...extra } }), "json");
var b64 = /* @__PURE__ */ __name((a) => btoa(String.fromCharCode(...a)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, ""), "b64");
var unb64 = /* @__PURE__ */ __name((s) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0)), "unb64");
var cookie = /* @__PURE__ */ __name((name, value, age) => `${name}=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${age}`, "cookie");
var cookies = /* @__PURE__ */ __name((req) => Object.fromEntries((req.headers.get("Cookie") || "").split(";").map((s) => s.trim().split(/=(.*)/s).slice(0, 2)).filter((a) => a.length === 2)), "cookies");
async function key(env) {
  return crypto.subtle.importKey("raw", await crypto.subtle.digest("SHA-256", encoder.encode(env.SESSION_SECRET)), "AES-GCM", false, ["encrypt", "decrypt"]);
}
__name(key, "key");
async function seal(data, env) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encrypted = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, await key(env), encoder.encode(JSON.stringify(data))));
  return b64(iv) + "." + b64(encrypted);
}
__name(seal, "seal");
async function unseal(value, env) {
  try {
    const [i, d] = value.split(".");
    return JSON.parse(decoder.decode(await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(i) }, await key(env), unb64(d))));
  } catch {
    return null;
  }
}
__name(unseal, "unseal");
async function github(path, token, options = {}) {
  return fetch("https://api.github.com/repos/" + OWNER + "/" + REPO + "/contents/" + path, { ...options, headers: { Accept: "application/vnd.github+json", Authorization: "Bearer " + token, "X-GitHub-Api-Version": "2022-11-28", "User-Agent": "Gnomeville-Chirp-Composer", ...options.headers || {} } });
}
__name(github, "github");
async function readJson(path, token) {
  const r = await github(path, token);
  if (!r.ok) throw Error("GitHub read failed (" + r.status + ")");
  const data = await r.json();
  const bytes = unb64(data.content.replace(/\s/g, ""));
  return { value: JSON.parse(decoder.decode(bytes)), sha: data.sha };
}
__name(readJson, "readJson");
async function user(token) {
  const r = await fetch("https://api.github.com/user", { headers: { Authorization: "Bearer " + token, Accept: "application/vnd.github+json", "User-Agent": "Gnomeville-Chirp-Composer" } });
  if (!r.ok) return null;
  return r.json();
}
__name(user, "user");
var fail = /* @__PURE__ */ __name((msg, status = 400) => json({ error: msg }, status), "fail");
var worker_default = { async fetch(req, env) {
  try {
    const url = new URL(req.url), path = url.pathname, base = url.origin;
    const ck = cookies(req);
    if (path === "/") {
      return new Response(COMPOSER_HTML, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "Content-Security-Policy": "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src 'self'; img-src 'self' https://gnomeville.github.io https://raw.githubusercontent.com; base-uri 'none'; form-action 'self'; frame-ancestors 'none'", "X-Content-Type-Options": "nosniff" } });
    }
    if (path === "/login") {
      const state = b64(crypto.getRandomValues(new Uint8Array(24)));
      const next = url.searchParams.get("next");
      const safeNext = next && next.startsWith("/") && !next.startsWith("//") && !next.includes("\\") ? next : "/";
      const target = "https://github.com/login/oauth/authorize?" + new URLSearchParams({ client_id: env.GITHUB_CLIENT_ID, redirect_uri: base + "/callback", scope: "public_repo", state });
      const h = new Headers({ Location: target });
      h.append("Set-Cookie", cookie("chirp_state", state, 600));
      h.append("Set-Cookie", cookie("chirp_next", encodeURIComponent(safeNext), 600));
      return new Response(null, { status: 302, headers: h });
    }
    if (path === "/callback") {
      if (!ck.chirp_state || url.searchParams.get("state") !== ck.chirp_state) return fail("Login state mismatch", 403);
      const code = url.searchParams.get("code");
      if (!code) return fail("GitHub authorization was not completed", 403);
      const r = await fetch("https://github.com/login/oauth/access_token", { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ client_id: env.GITHUB_CLIENT_ID, client_secret: env.GITHUB_CLIENT_SECRET, code, redirect_uri: base + "/callback" }) });
      const t = await r.json();
      if (!t.access_token) return fail("GitHub login failed", 403);
      const u = await user(t.access_token);
      if (!u || u.login.toLowerCase() !== OWNER) return fail("This GitHub account is not authorized to publish", 403);
      const session2 = await seal({ token: t.access_token, login: u.login, exp: Date.now() + 7 * 864e5 }, env);
      const next = ck.chirp_next ? decodeURIComponent(ck.chirp_next) : "/";
      const h = new Headers({ Location: next.startsWith("/") && !next.startsWith("//") && !next.includes("\\") ? next : "/" });
      h.append("Set-Cookie", cookie("chirp_next", "", 0));
      h.append("Set-Cookie", cookie("chirp_session", session2, 7 * 86400));
      h.append("Set-Cookie", cookie("chirp_state", "", 0));
      return new Response(null, { status: 302, headers: h });
    }
    if (path === "/google/login") {
      const state = b64(crypto.getRandomValues(new Uint8Array(24)));
      const next = url.searchParams.get("next");
      const safeNext = next && next.startsWith("/") && !next.startsWith("//") && !next.includes("\\") ? next : "/";
      const target = "https://accounts.google.com/o/oauth2/v2/auth?" + new URLSearchParams({ client_id: env.GOOGLE_CLIENT_ID, redirect_uri: base + "/google/callback", response_type: "code", scope: "openid email profile", state, prompt: "select_account" });
      const h = new Headers({ Location: target });
      h.append("Set-Cookie", cookie("chirp_google_state", state, 600));
      h.append("Set-Cookie", cookie("chirp_google_next", encodeURIComponent(safeNext), 600));
      return new Response(null, { status: 302, headers: h });
    }
    if (path === "/google/callback") {
      if (!ck.chirp_google_state || url.searchParams.get("state") !== ck.chirp_google_state) return fail("Google login state mismatch", 403);
      const code = url.searchParams.get("code");
      if (!code) return fail("Google authorization was not completed", 403);
      const r = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ code, client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET, redirect_uri: base + "/google/callback", grant_type: "authorization_code" }) });
      if (!r.ok) return fail("Google token exchange failed", 403);
      const t = await r.json();
      if (!t.access_token) return fail("Google token missing", 403);
      const info = await fetch("https://openidconnect.googleapis.com/v1/userinfo", { headers: { Authorization: "Bearer " + t.access_token } });
      if (!info.ok) return fail("Google identity lookup failed", 403);
      const u = await info.json();
      if (!u.email_verified || !env.TONI_GOOGLE_EMAIL || u.email.toLowerCase() !== env.TONI_GOOGLE_EMAIL.trim().toLowerCase()) return fail("This Google account is not authorized for Toni", 403);
      const session2 = await seal({ role: "toni", sub: u.sub, exp: Date.now() + 7 * 864e5 }, env);
      const next = ck.chirp_google_next ? decodeURIComponent(ck.chirp_google_next) : "/";
      const h = new Headers({ Location: next.startsWith("/") && !next.startsWith("//") && !next.includes("\\") ? next : "/" });
      h.append("Set-Cookie", cookie("chirp_google_next", "", 0));
      h.append("Set-Cookie", cookie("chirp_google_session", session2, 7 * 86400));
      h.append("Set-Cookie", cookie("chirp_google_state", "", 0));
      return new Response(null, { status: 302, headers: h });
    }
    if (path === "/logout") {
      const h = new Headers({ Location: "/" });
      h.append("Set-Cookie", cookie("chirp_session", "", 0));
      h.append("Set-Cookie", cookie("chirp_google_session", "", 0));
      return new Response(null, { status: 302, headers: h });
    }
    if (!path.startsWith("/api/")) return fail("Not found", 404);
    const session = ck.chirp_session ? await unseal(ck.chirp_session, env) : null;
    const admin = !!(session && session.exp > Date.now() && session.login?.toLowerCase() === OWNER);
    const gs = ck.chirp_google_session ? await unseal(ck.chirp_google_session, env) : null;
    const toni = !!(gs && gs.role === "toni" && typeof gs.sub === "string" && gs.exp > Date.now());
    const authorized = admin || toni;
    const role = admin ? "admin" : toni ? "toni" : null;
    const token = env.CHIRP_PUBLISH_TOKEN || (admin ? session.token : null);
    if (path === "/api/me") return json({ authorized, role, login: admin ? session.login : null });
    if (!authorized) return fail("Sign in to publish", 401);
    if (!token) return fail("Publishing credential not configured", 503);
    if (path === "/api/data" && req.method === "GET") {
      const [p, c] = await Promise.all([readJson("data/people.json", token), readJson("data/chirps.json", token)]);
      return json({ people: p.value, posts: c.value });
    }
    if (path === "/api/publish" && req.method === "POST") {
      if (env.STAGING_MODE === "true") return fail("Staging is read-only; publishing to the live feed is disabled.", 403);
      if (req.headers.get("Content-Type")?.split(";")[0] !== "application/json") return fail("Expected JSON", 415);
      if (Number(req.headers.get("Content-Length") || 0) > 12e3) return fail("Request too large", 413);
      const origin = req.headers.get("Origin");
      if (origin !== base) return fail("Cross-origin publication denied", 403);
      const body = await req.json();
      if (!["post", "reply", "thread", "edit"].includes(body.mode) || typeof body.who !== "string" || typeof body.text !== "string" || !body.text.trim() || body.text.length > 2e3) return fail("Invalid post");
      if (toni && !admin && body.who !== "toni") return fail("Toni may only post as Toni", 403);
      const people = (await readJson("data/people.json", token)).value;
      if (!Object.hasOwn(people, body.who)) return fail("Unknown resident");
      for (let attempt = 0; attempt < 3; attempt++) {
        const { value: posts, sha } = await readJson("data/chirps.json", token);
        if (!Array.isArray(posts)) return fail("Invalid repository data", 500);
        if (body.mode === "edit") {
          let find = function(arr, id) {
            for (const r of arr || []) {
              if (r.id === id) return r;
              const nested = find(r.replies, id);
              if (nested) return nested;
            }
            return null;
          };
          __name(find, "find");
          const post = posts.find((p) => p.id === body.target);
          if (!post) return fail("Original Chirp not found", 404);
          const item = body.editId === post.id ? post : find(post.replies, body.editId);
          if (!item) return fail("Message to edit was not found", 404);
          if (toni && !admin && item.who !== "toni") return fail("Toni may only edit Toni messages", 403);
          if (item.text !== body.text.trim()) {
            item.text = body.text.trim();
            item.editedAt = (/* @__PURE__ */ new Date()).toISOString();
          }
        } else if (body.mode === "reply" || body.mode === "thread") {
          let assignIds = function(arr, path2 = "") {
            (arr || []).forEach((r, i) => {
              const pos = path2 ? path2 + "-" + i : String(i);
              if (!r.id) r.id = "legacy-" + post.id + "-" + pos;
              assignIds(r.replies, pos);
            });
          };
          __name(assignIds, "assignIds");
          const post = posts.find((p) => p.id === body.target);
          if (!post) return fail("Original Chirp not found", 404);
          if (!Array.isArray(post.replies)) post.replies = [];
          assignIds(post.replies);
          const reply = { id: "reply-" + crypto.randomUUID(), who: body.who, text: body.text.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString(), source: "composer", replies: [] };
          if (body.mode === "thread") {
            let find = function(arr, id) {
              for (const r of arr || []) {
                if (r.id === id) return r;
                const nested = find(r.replies, id);
                if (nested) return nested;
              }
              return null;
            };
            __name(find, "find");
            if (typeof body.parentReply !== "string" || !body.parentReply) return fail("Select a comment to reply to");
            const parent = find(post.replies, body.parentReply);
            if (!parent) return fail("Reply not found. Reload Composer and try again.", 404);
            if (!Array.isArray(parent.replies)) parent.replies = [];
            parent.replies.push(reply);
          } else post.replies.push(reply);
        } else posts.push({ id: "live-" + crypto.randomUUID(), who: body.who, text: body.text.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString(), source: "composer", replies: [] });
        const bytes = encoder.encode(JSON.stringify(posts, null, 2) + "\n");
        let raw = "";
        for (let i = 0; i < bytes.length; i += 8192) raw += String.fromCharCode(...bytes.slice(i, i + 8192));
        const result = await github("data/chirps.json", token, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: "Chirp composer: publish " + body.mode + " as " + body.who, content: btoa(raw), sha, branch: "main" }) });
        if (result.ok) return json({ ok: true, posts });
        if (result.status === 409 || result.status === 422) continue;
        return fail("GitHub declined the update (" + result.status + "). Check repository authorization.", 502);
      }
      return fail("Concurrent edits detected. Please try again.", 409);
    }
    return fail("Not found", 404);
  } catch (e) {
    return fail("Composer error: " + String(e.message || e), 500);
  }
} };
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map