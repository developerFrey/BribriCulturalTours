(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const v of o.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&l(v)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const _=[{title:"Comunidad Watsy",location:"Territorio Bribri",duration:"4 horas",description:"Cacao preparado de forma ancestral, plantas medicinales y una visita a la cascada del bosque.",image:"/assets/images/1.jpg",tag:"Cultura",price:"Desde $45 USD",details:"Conoce la comunidad Watsy junto a un guía local. Prepararemos cacao de forma ancestral, caminaremos entre plantas medicinales, compartiremos una conversación sobre la vida Bribri y visitaremos una cascada cercana."},{title:"Cascada Keköldi",location:"Reserva indígena",duration:"5–6 horas",description:"Una caminata entre selva primaria, historia Bribri, baño en aguas frescas y almuerzo local.",image:"/assets/images/4.jpg",tag:"Aventura",price:"Desde $65 USD",details:"Caminaremos aproximadamente 1.5 horas por selva densa hasta una cascada sagrada de la reserva indígena Keköldi. Incluye interpretación sobre naturaleza, cultura e historia, tiempo para nadar y almuerzo local."},{title:"Ríos Bribris",location:"Telire, Yorkín y Lari",duration:"4 horas",description:"Navega por ríos llenos de vida, conoce comunidades y disfruta frutas tropicales junto al agua.",image:"/assets/images/5.jpg",tag:"Naturaleza",price:"Desde $50 USD",details:"Recorre los ríos Telire, Yorkín y Lari en compañía de un guía local. Navegaremos entre comunidades y paisajes vivos, con paradas para nadar, descansar y disfrutar frutas tropicales."},{title:"Snorkel Caribeño",location:"Cahuita y Manzanillo",duration:"3 horas",description:"Explora el mar Caribe con guías locales y descubre la vida marina de nuestras costas.",image:"/assets/images/3.jpg",tag:"Mar",price:"Desde $55 USD",details:"Explora las aguas del Caribe en Cahuita o Manzanillo. La experiencia incluye acompañamiento local, orientación de seguridad y tiempo para observar la diversidad marina de la costa."},{title:"Caminata nocturna",location:"Reserva Keköldi",duration:"3–4 horas",description:"Activa tus sentidos y observa las especies que despiertan cuando cae la noche en el bosque.",image:"/assets/images/2.webp",tag:"Fauna",price:"Desde $35 USD",details:"Adéntrate en la reserva Keköldi cuando el bosque cambia de ritmo. Observaremos especies nocturnas, escucharemos la vida de la selva y aprenderemos a movernos con respeto durante la caminata."},{title:"Finca y cocina ancestral",location:"Comunidad Bribri",duration:"3–4 horas",description:"Aprende a cultivar, cosechar y compartir una comida hecha con productos de la tierra.",image:"/assets/images/4.jpg",tag:"Sabores",price:"Desde $45 USD",details:"Aprende sobre las técnicas Bribri para cultivar y cosechar la tierra. Cerraremos el recorrido compartiendo una comida preparada con productos locales y conversando sobre la relación con el territorio."}],x=Array.from({length:12},(e,a)=>({title:`Nueva experiencia ${a+1}`,location:"Por definir",duration:"Por definir",description:"Agrega aquí la descripción de esta experiencia.",image:"/assets/images/5.jpg",tag:"Próximamente",price:"Precio por definir",details:"Agrega aquí la información completa, recomendaciones, inclusiones y condiciones de esta experiencia."})),y=[..._,...x],q=[{type:"image",src:"/assets/images/1.jpg",title:"Territorio Bribri",description:"Paisajes y encuentros del territorio."},{type:"image",src:"/assets/images/2.webp",title:"Vida del bosque",description:"La naturaleza que acompaña cada recorrido."},{type:"image",src:"/assets/images/3.jpg",title:"Caribe Sur",description:"Mar, costa y biodiversidad."},{type:"image",src:"/assets/images/4.jpg",title:"Caminos con raíz",description:"Senderos para caminar sin prisa."},{type:"image",src:"/assets/images/5.jpg",title:"Ríos vivos",description:"Agua y comunidad compartiendo el mismo camino."},...Array.from({length:10},(e,a)=>({type:"video",src:`/assets/video/${a+1}.mp4`,title:`Diario de viaje ${String(a+1).padStart(2,"0")}`,description:"Momentos de nuestras experiencias."}))],w=q.map(e=>`
  <article class="gallery-item" data-gallery-type="${e.type}">
    ${e.type==="video"?`<video controls preload="metadata"><source src="${e.src}" type="video/mp4" /></video>`:`<img src="${e.src}" alt="${e.title}" loading="lazy" />`}
    <div class="gallery-item__caption"><span>${e.type==="video"?"Video":"Fotografía"}</span><h3>${e.title}</h3><p>${e.description}</p></div>
  </article>
`).join(""),S=y.map((e,a)=>`
  <article class="experience-card experience-card--color-${a%6} ${a===1?"experience-card--featured":""}" data-experience-index="${a}">
    <img src="${e.image}" alt="${e.title}" loading="lazy" />
    <div class="experience-card__body">
      <span class="eyebrow">${e.tag}</span>
      <h3>${e.title}</h3>
      <p>${e.description}</p>
      <div class="experience-card__meta"><span>${e.location}</span><span>${e.duration}</span></div>
      <strong class="experience-card__price">${e.price}</strong>
      <button class="read-more" type="button" data-experience-index="${a}">Read more <span>↗</span></button>
    </div>
  </article>
`).join("");document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Bribri Cultural Tours, inicio">
    <img src="assets/bribriLogo.png" alt="" class="brand__icon" aria-hidden="true" width="10" height="90" />
    <span><strong>Bribri</strong><em> Cultural Tours</em></span>
  </a>
    <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button>
    <nav class="site-nav" aria-label="Navegación principal">
      <a href="#experiencias">Experiencias</a>
      <a href="#nuestra-raiz">Nuestra raíz</a>
      <a href="#gallery" data-gallery-open>Gallery</a>
      <a href="#politicas">Policies and Policies</a>
      <a href="#contacto">Contacto</a>
      <a class="nav-cta" href="#contacto">Planifica tu viaje <span>↗</span></a>
    </nav>
  </header>

  <main class="site-main">
    <section id="inicio" class="hero">
      <video id="hero-video" class="hero__video" autoplay loop playsinline>
        <source src="/assets/video/1.mp4" type="video/mp4" />
      </video>
      <button class="video-mute-toggle" type="button" aria-label="Activar sonido" aria-pressed="true">
        <span class="video-mute-toggle__icon" aria-hidden="true">🔇</span>
      </button>

      <div class="hero__content page-width">
        <p class="kicker">Turismo con propósito · Costa Rica</p>
        <h1>Viaja profundo.<br /><em>Vuelve distinto.</em></h1>
        <p class="hero__intro">Experiencias auténticas en el territorio Bribri y el Caribe Sur, guiadas por quienes llaman hogar a esta tierra.</p>
        <a class="button button--light" href="#experiencias">Explorar experiencias <span>↓</span></a>
      </div>
      <div class="hero__note"><span>Jungle / culture / sea</span></div>
    </section>

    <section class="experiences" id="experiencias">
      <div class="page-width">
        <div class="section-heading"><div><span class="eyebrow">Elige tu manera de explorar</span><h2>Experiencias<br /><em>con raíz.</em></h2></div><p>Pequeños grupos, historias verdaderas y paisajes que se quedan contigo mucho después de volver.</p></div>
        <div class="experience-filters" role="group" aria-label="Filtrar experiencias">
          <button class="experience-filter experience-filter--active" type="button" data-experience-filter="all">Todas</button>
          <button class="experience-filter" type="button" data-experience-filter="Cultura">Cultura</button>
          <button class="experience-filter" type="button" data-experience-filter="Naturaleza">Naturaleza</button>
          <button class="experience-filter" type="button" data-experience-filter="Aventura">Aventura</button>
          <button class="experience-filter" type="button" data-experience-filter="Mar">Mar</button>
          <button class="experience-filter" type="button" data-experience-filter="Fauna">Fauna</button>
          <button class="experience-filter" type="button" data-experience-filter="Sabores">Sabores</button>
        </div>
        <div class="experience-grid">${S}</div>
        <button class="button button--dark experiences-toggle" type="button" aria-expanded="false">Ver todas las experiencias <span>↗</span></button>
      </div>
    </section>

    <section class="intro page-width" id="nuestra-raiz">
      <div class="intro__welcome" aria-labelledby="welcome-title">
        <div class="welcome__logo"><img src="/assets/logoBribri.png" alt="Logo ãñitã" /></div>
        <div class="welcome__copy"><span class="eyebrow">"Mĩshka kö sow ãñitã"</span><h2 id="welcome-title">Let's explore<br /><em>together.</em></h2><p>Un viaje compartido comienza con curiosidad, respeto y ganas de escuchar.</p></div>
      </div>
      <div class="section-label"><span>01</span><span>El viaje empieza aquí</span></div>
      <div class="intro__grid">
        <div><h2>Conoce la tierra<br /><em>que nos sostiene.</em></h2></div>
        <div class="intro__copy"><p>Somos una iniciativa de turismo responsable nacida en el territorio Bribri. Creamos encuentros honestos entre viajeros, cultura y naturaleza para que cada visita deje algo bueno en la comunidad.</p><a class="text-link" href="#contacto">Conoce nuestra historia <span>↗</span></a></div>
      </div>
      <div class="values"><div><span>01</span><strong>Guías locales</strong><p>La experiencia empieza con las voces de nuestra comunidad.</p></div><div><span>02</span><strong>Ritmo consciente</strong><p>Viajamos respetando la tierra, sus tiempos y sus límites.</p></div><div><span>03</span><strong>Impacto real</strong><p>Cada reserva apoya proyectos y familias del territorio.</p></div></div>
    </section>

    <section class="statement">
      <div class="statement__image"></div><div class="statement__content"><span class="eyebrow">Más que turismo</span><h2>Deja una huella<br /><em>que sí importa.</em></h2><p>Creemos en un turismo que protege y regenera la cultura, la economía y el bienestar de las comunidades Bribri.</p><a class="button button--light" href="#contacto">Hablemos de tu viaje <span>↗</span></a></div>
    </section>

    <section class="field-notes page-width">
      <div class="field-notes__copy"><span class="eyebrow">Postales del territorio</span><h2>Lo que se siente<br /><em>cuando llegas.</em></h2><p>Hay lugares que no se visitan de prisa. Se escuchan, se caminan y se comparten con quienes los conocen de verdad.</p></div>
      <div class="field-notes__media"><video controls preload="metadata" poster="/assets/images/3.jpg"><source src="/assets/video/2.mp4" type="video/mp4" />Tu navegador no admite video HTML5.</video><span>Diario de viaje / 02</span></div>
    </section>

    <section class="quote page-width"><span class="quote__mark">“</span><blockquote>Cuando visitas nuestro territorio con respeto, no solo conoces un lugar. También ayudas a que siga vivo.</blockquote><p>— Roberth, guía local y anfitrión Bribri</p></section>

    <section class="reviews" aria-labelledby="reviews-title">
      <div class="page-width reviews__heading"><span class="eyebrow">Lo que dicen nuestros viajeros</span><h2 id="reviews-title">Historias que<br /><em>se quedan.</em></h2><a class="text-link" href="https://share.google/V1qIqn1u5bqO3oFVG" target="_blank" rel="noreferrer">Ver reseñas en Google <span>↗</span></a></div>
      <div class="page-width reviews__widget"><div class="elfsight-app-558a5297-e7c2-467b-9a17-41d2ece07cef" data-elfsight-app-lazy></div></div>
    </section>

    <section class="policies page-width" id="politicas"><div class="policies__heading"><span class="eyebrow">Información importante</span><h2>Policies<br /><em>&amp; policies.</em></h2></div><div class="policies__list"><details open><summary>Reservas</summary><p>Reserva con al menos un día de anticipación. Las actividades comienzan con un mínimo de dos personas.</p></details><details><summary>Qué llevar</summary><p>Agua, bloqueador solar, repelente no tóxico, ropa cómoda y calzado adecuado para actividades al aire libre.</p></details><details><summary>Seguridad y alimentos</summary><p>Indica cualquier alergia o condición relevante al reservar. Las actividades se realizan al aire libre y requieren seguir las recomendaciones del guía.</p></details></div></section>

    <section class="contact" id="contacto"><div class="page-width contact__grid"><div><span class="eyebrow">¿Listo para salir?</span><h2>Hagamos espacio<br /><em>para la aventura.</em></h2></div><div><p>Cuéntanos qué quieres descubrir y diseñamos una experiencia a tu ritmo.</p><a class="button button--light" href="https://wa.me/50683647960" target="_blank" rel="noreferrer">Escribir por WhatsApp <span>↗</span></a><p class="contact__small">También puedes encontrarnos en Instagram · @bribritrails</p></div></div></section>
  </main>

  <section class="gallery-view" id="gallery" hidden aria-labelledby="gallery-title">
    <div class="page-width">
      <div class="gallery-view__heading">
        <div><span class="eyebrow">Imágenes y videos</span><h1 id="gallery-title">Gallery<br /><em>del territorio.</em></h1></div>
        <button class="button button--dark gallery-back" type="button" data-gallery-close>Volver al menú <span>↗</span></button>
      </div>
      <div class="gallery-filters" role="group" aria-label="Filtrar galería">
        <button type="button" class="gallery-filter gallery-filter--active" data-gallery-filter="all">Todo</button>
        <button type="button" class="gallery-filter" data-gallery-filter="image">Imágenes</button>
        <button type="button" class="gallery-filter" data-gallery-filter="video">Videos</button>
      </div>
      <div class="gallery-grid">${w}</div>
    </div>
  </section>

  <footer class="footer site-footer">
  <div class="page-width footer__inner">
    
    <!-- Branding -->
    <div class="footer__brand">
      <a class="brand brand--footer" href="#inicio">
        <span class="brand__mark">BT</span>
        <span><strong>Bribri</strong><em>Cultural Tours</em></span>
      </a>
      <p>Viajes con raíz desde el Caribe Sur de Costa Rica.</p>
    </div>

    <!-- Redes Sociales -->
    <nav class="social-links" aria-label="Redes sociales">
      <a href="https://www.facebook.com/bobtikin.moradiaz" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <img src="/assets/Icons/facebook-icon.svg" alt="" class="social-links__icon" aria-hidden="true" width="24" height="24" loading="lazy" />
      </a>
      <a href="https://www.instagram.com/bribri_cultural_tours/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <img src="/assets/Icons/instagram-icon.svg" alt="" class="social-links__icon" aria-hidden="true" width="24" height="24" loading="lazy" />
      </a>
      <a href="https://www.tiktok.com/@roberth_moradiaz?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <img src="/assets/Icons/tiktok-icon.svg" alt="" class="social-links__icon" aria-hidden="true" width="24" height="24" loading="lazy" />
      </a>
    </nav>

    <!-- Copyright -->
    <p class="footer__copyright">© 2026 Bribri Trails</p>
    
  </div>
</footer>
  
  <div class="experience-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden><div class="experience-modal__backdrop" data-close-modal></div><div class="experience-modal__panel"><button class="experience-modal__close" type="button" aria-label="Cerrar información" data-close-modal>×</button><span class="eyebrow" id="modal-tag"></span><h2 id="modal-title"></h2><p class="experience-modal__description" id="modal-description"></p><div class="experience-modal__meta"><span id="modal-location"></span><span id="modal-duration"></span><strong id="modal-price"></strong></div><a class="button button--dark" href="#contacto" data-close-modal>Consultar disponibilidad <span>↗</span></a></div></div>

  <a class="whatsapp-float" href="https://wa.me/50683647960" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
  <img src="/assets/Icons/whatsapp-icon.svg" alt="" class="whatsapp-float__icon" aria-hidden="true" width="24" height="24" />
  <span class="whatsapp-float__label">WhatsApp</span>
  </a>
`;const n=document.querySelector(".menu-toggle"),s=document.querySelector(".site-nav"),h=()=>{s==null||s.classList.remove("site-nav--open"),n==null||n.setAttribute("aria-expanded","false")};n==null||n.addEventListener("click",()=>{const e=(s==null?void 0:s.classList.toggle("site-nav--open"))??!1;n.setAttribute("aria-expanded",String(e))});s==null||s.querySelectorAll("a").forEach(e=>e.addEventListener("click",h));document.addEventListener("pointerdown",e=>{const a=e.target;s!=null&&s.classList.contains("site-nav--open")&&!s.contains(a)&&!(n!=null&&n.contains(a))&&h()});const r=document.querySelector("#hero-video"),c=document.querySelector(".video-mute-toggle"),b=()=>{if(!r||!c)return;c.setAttribute("aria-label",r.muted?"Activar sonido":"Silenciar video"),c.setAttribute("aria-pressed",String(r.muted));const e=c.querySelector(".video-mute-toggle__icon");e&&(e.textContent=r.muted?"🔇":"🔊")};if(r&&c){r.volume=.5,r.muted=!1;const e=()=>{r.play().catch(()=>{r.muted=!0,b()})};r.addEventListener("canplay",e,{once:!0}),c.addEventListener("click",()=>{r.muted=!r.muted,b()}),b()}document.querySelectorAll("[data-experience-filter]").forEach(e=>e.addEventListener("click",()=>{const a=e.dataset.experienceFilter??"all";document.querySelectorAll("[data-experience-filter]").forEach(i=>i.classList.toggle("experience-filter--active",i===e)),document.querySelectorAll(".experience-card").forEach(i=>{const l=y[Number(i.dataset.experienceIndex)];i.hidden=a!=="all"&&(l==null?void 0:l.tag)!==a})}));const d=document.querySelector(".site-main"),p=document.querySelector(".gallery-view"),u=document.querySelector(".site-footer"),k=e=>{e==null||e.preventDefault(),h(),d==null||d.setAttribute("hidden",""),u==null||u.setAttribute("hidden",""),p==null||p.removeAttribute("hidden"),history.replaceState(null,"","#gallery"),window.scrollTo({top:0,behavior:"instant"})},C=()=>{p==null||p.setAttribute("hidden",""),d==null||d.removeAttribute("hidden"),u==null||u.removeAttribute("hidden"),history.replaceState(null,"","#inicio"),window.scrollTo({top:0,behavior:"instant"})};document.querySelectorAll("[data-gallery-open]").forEach(e=>e.addEventListener("click",k));document.querySelectorAll("[data-gallery-close]").forEach(e=>e.addEventListener("click",C));document.querySelectorAll("[data-gallery-filter]").forEach(e=>e.addEventListener("click",()=>{const a=e.dataset.galleryFilter??"all";document.querySelectorAll("[data-gallery-filter]").forEach(i=>i.classList.toggle("gallery-filter--active",i===e)),document.querySelectorAll(".gallery-item").forEach(i=>{i.hidden=a!=="all"&&i.dataset.galleryType!==a})}));const g=document.querySelector(".experience-modal"),f=()=>{g&&(g.hidden=!0,document.body.classList.remove("modal-open"))};document.querySelectorAll(".read-more").forEach(e=>e.addEventListener("click",()=>{const a=y[Number(e.dataset.experienceIndex)];!g||!a||(document.querySelector("#modal-tag").textContent=a.tag,document.querySelector("#modal-title").textContent=a.title,document.querySelector("#modal-description").textContent=a.details,document.querySelector("#modal-location").textContent=a.location,document.querySelector("#modal-duration").textContent=a.duration,document.querySelector("#modal-price").textContent=a.price,g.hidden=!1,document.body.classList.add("modal-open"))}));document.querySelectorAll("[data-close-modal]").forEach(e=>e.addEventListener("click",f));document.addEventListener("keydown",e=>{e.key==="Escape"&&f()});const m=document.querySelector(".experiences-toggle");m==null||m.addEventListener("click",()=>{var a;const e=((a=document.querySelector(".experiences"))==null?void 0:a.classList.toggle("experiences--expanded"))??!1;m.setAttribute("aria-expanded",String(e)),m.firstChild.textContent=e?"Ocultar experiencias ":"Ver todas las experiencias "});
