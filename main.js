const list = document.getElementById('selected-papers-list');
publications.forEach(p=>{
 const article=document.createElement('article'); article.className='paper-row'+(p.image?'':' paper-text-only'); article.id=p.id;
 if(p.image){
 const figure=document.createElement('figure'); figure.className='paper-figure';
 const button=document.createElement('button'); button.type='button'; button.className='figure-button';button.setAttribute('aria-label',`Enlarge ${p.name} figure`);
 const img=document.createElement('img');img.src=p.image;img.alt=p.alt;img.loading='lazy';button.append(img);
 figure.append(button);
 button.addEventListener('click',()=>{document.getElementById('figure-full').src=p.image;document.getElementById('figure-full').alt=p.alt;document.getElementById('figure-title').textContent=p.name;document.getElementById('figure-credit').textContent=p.credit;document.getElementById('figure-dialog').showModal();});
 article.append(figure);
 }

 const content=document.createElement('div');content.className='paper-info';

 const heading=document.createElement('h3');heading.textContent=p.title;content.append(heading);

 const meta=document.createElement('div');meta.className='paper-meta';const role=document.createElement('span');role.textContent=p.role;const venue=document.createElement('span');venue.className='venue '+p.status;venue.textContent=p.venue;meta.append(role,document.createTextNode('·'),venue);content.append(meta);
 const advisors=document.createElement('p');advisors.className='paper-advisors';
 advisors.append(document.createTextNode(p.advisors.length>1?'Advisors: ':'Advisor: '));
 p.advisors.forEach(([name,id],i)=>{if(i)advisors.append(document.createTextNode(', '));const a=document.createElement('a');a.href='https://scholar.google.com/citations?user='+id;a.textContent=name;advisors.append(a);});content.append(advisors);
 const description=document.createElement('p');description.className='paper-description';description.textContent=p.description;content.append(description);

 const links=document.createElement('div');links.className='paper-links';p.links.forEach(([label,url])=>{const a=document.createElement('a');a.href=url;a.textContent='['+label+']';links.append(a);});content.append(links);

 article.append(content);list.append(article);
});
const dialog=document.getElementById('figure-dialog');document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const navLinks=[...document.querySelectorAll('.nav-links a')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href')));
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>{const selected=a.getAttribute('href')==='#'+entry.target.id;a.classList.toggle('active',selected);if(selected)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -65% 0px'});sections.forEach(s=>observer.observe(s));
