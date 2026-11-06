/* Sponsoren Urk in Wintersferen: bouwt de sponsorsectie uit sponsoren.json.
   Zet in Webflow een element met id="uiw-sponsoren" neer en laad dit script. */
(function(){
  var BASE=(document.currentScript&&document.currentScript.src||'').replace(/[^\/]*$/,'');
  var root=document.getElementById('uiw-sponsoren'); if(!root) return;
  var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})};
  var FUND="<h2 class=\"uiw-h\">Mede mogelijk gemaakt door</h2>\n<div class=\"uiw-fund\"><a class=\"lnk\" href=\"https://www.vsbfonds.nl/\" target=\"_blank\" rel=\"noopener\" aria-label=\"VSBfonds\"><div class=\"card\"><img src=\"https://cdn.prod.website-files.com/685ac23798aa49eeb72848d0/6924766e3ddf6abc37510d2a_VSBfonds%20logo%20kleur.jpg\" alt=\"VSBfonds\" loading=\"lazy\"></div></a>\n<p><b>Heb jij een mooi initiatief gericht op de ontwikkeling van mensen, buurten of organisaties? Dan kunnen wij je misschien helpen.</b><br><br>Bij VSBfonds hebben we een sociale, inclusieve en creatieve samenleving voor ogen. Een samenleving waarin mensen met verschillende achtergronden elkaar ontmoeten, inspireren en met elkaar verbonden raken. Een samenleving waarin iedereen eerlijke kansen krijgt om zelf vooruit te komen in het leven en er ook voor een ander te kunnen zijn. Daarom ondersteunen wij sociaal-maatschappelijke en culturele initiatieven. En stellen we internationale studiebeurzen beschikbaar voor maatschappelijk betrokken studenten.</p></div>\n<div class=\"uiw-fund\"><a class=\"lnk\" href=\"https://willemhoekstrafonds.nl/\" target=\"_blank\" rel=\"noopener\" aria-label=\"Stichting Willem Hoekstra Fonds\"><div class=\"card\"><img src=\"https://cdn.prod.website-files.com/685ac23798aa49eeb72848d0/692476d18073a42b60837e0b_logo-whf.png\" alt=\"Stichting Willem Hoekstra Fonds\" loading=\"lazy\"></div></a>\n<p>Stichting Willem Hoekstra Fonds is een, per 17 oktober 2016, opgerichte goededoelenstichting. De stichting is opgericht door de heer Hoekstra. Stichting Willem Hoekstra Fonds is een instelling die het algemeen maatschappelijk belang voor ogen heeft. Vanuit deze stichting worden giften aan verschillende doelen gedaan.<br><br>De Stichting beoogt een instelling te zijn welke het algemeen maatschappelijk belang nastreeft, een en ander door het doen van giften met name binnen de regio Urk. De Stichting wil een betrouwbare lange termijn partner en financier zijn van de door haar ondersteunde goede doelen.</p></div>";
  function img(e){
    var url=/^https?:/.test(e.l)?e.l:BASE+'logos/'+e.l;
    return '<img src="'+esc(url)+'" alt="'+esc(e.n)+'" loading="lazy" decoding="async" referrerpolicy="no-referrer">';
  }
  function card(e){
    var cls='card'+(e.bg?' bleed':'')+(e.d?' dark':'')+(e.z?' zoom':'');
    var inner=e.l?img(e):'<span class="name">'+esc(e.n)+'</span>';
    var h='<div class="'+cls+'"'+(e.bg?' style="background:'+e.bg+'"':'')+' title="'+esc(e.n)+'">'+inner+'</div>';
    return e.s?'<a class="lnk" href="'+esc(e.s)+'" target="_blank" rel="noopener" aria-label="'+esc(e.n)+'">'+h+'</a>':h;
  }
  function group(title,list,cls){
    return '<h2 class="uiw-h">'+title+'</h2><div class="uiw-grid'+(cls?' '+cls:'')+'">'+list.map(card).join('')+'</div>';
  }
  fetch(BASE+'sponsoren.json').then(function(r){return r.json()}).then(function(d){
    root.className='uiw';
    root.innerHTML='<div class="uiw-in">'
    +'<p class="uiw-eyebrow">Onze trotse partners</p><h1 class="uiw-title">Sponsoren</h1>'
    +'<p class="uiw-intro">Urk in Wintersferen wordt mogelijk gemaakt dankzij de steun van onze sponsoren. Met hun betrokkenheid en bijdrage brengen zij samen de winterse magie tot leven in het hart van Urk. Ontdek hieronder onze gouden, zilveren en bronzen partners.</p>'
    +'<div class="uiw-fbox"><p class="uiw-fbadge">Sinds 2026</p><h2 class="uiw-h uiw-fh">Vriend van Urk in Wintersferen</h2><div class="uiw-friend"><div class="uiw-grid big">'+card(d.vriend)+'</div><p class="uiw-ftext">Sinds 2026 is '+esc(d.vriend.n)+' Vriend van Urk in Wintersferen. Met hun steun en betrokkenheid helpen zij ons dit winterse evenement in het hart van Urk mogelijk te maken. Hartelijk dank daarvoor.</p></div></div>'
    +group('Goud sponsoren',d.goud,'c4')+group('Zilver sponsoren',d.zilver,'c5')+group('Brons sponsoren',d.brons,'c6')+group('Educatie sponsoren',d.educatie,'c3')
    +FUND+'</div>';
  }).catch(function(){root.innerHTML=''});
})();
