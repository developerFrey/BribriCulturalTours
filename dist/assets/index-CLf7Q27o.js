(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const t of s.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function c(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=c(e);fetch(e.href,s)}})();const l=[{title:"Comunidad Watsy",location:"Territorio Bribri",duration:"4 horas",description:"Cacao preparado de forma ancestral, plantas medicinales y una visita a la cascada del bosque.",image:"/assets/images/1.jpg",tag:"Cultura",price:"Desde $45 USD"},{title:"Cascada Keköldi",location:"Reserva indígena",duration:"5–6 horas",description:"Una caminata entre selva primaria, historia Bribri, baño en aguas frescas y almuerzo local.",image:"/assets/images/4.jpg",tag:"Aventura",price:"Desde $65 USD"},{title:"Ríos Bribris",location:"Telire, Yorkín y Lari",duration:"4 horas",description:"Navega por ríos llenos de vida, conoce comunidades y disfruta frutas tropicales junto al agua.",image:"/assets/images/5.jpg",tag:"Naturaleza",price:"Desde $50 USD"},{title:"Snorkel Caribeño",location:"Cahuita y Manzanillo",duration:"3 horas",description:"Explora el mar Caribe con guías locales y descubre la vida marina de nuestras costas.",image:"/assets/images/3.jpg",tag:"Mar",price:"Desde $55 USD"},{title:"Caminata nocturna",location:"Reserva Keköldi",duration:"3–4 horas",description:"Activa tus sentidos y observa las especies que despiertan cuando cae la noche en el bosque.",image:"/assets/images/2.webp",tag:"Fauna",price:"Desde $35 USD"},{title:"Finca y cocina ancestral",location:"Comunidad Bribri",duration:"3–4 horas",description:"Aprende a cultivar, cosechar y compartir una comida hecha con productos de la tierra.",image:"/assets/images/4.jpg",tag:"Sabores",price:"Desde $45 USD"}],d=l.map((a,o)=>`
  <article class="experience-card ${o===1?"experience-card--featured":""}">
    <img src="${a.image}" alt="${a.title}" loading="lazy" />
    <div class="experience-card__body">
      <span class="eyebrow">${a.tag}</span>
      <h3>${a.title}</h3>
      <p>${a.description}</p>
      <div class="experience-card__meta"><span>${a.location}</span><span>${a.duration}</span></div>
      <strong class="experience-card__price">${a.price}</strong>
    </div>
  </article>
`).join("");document.querySelector("#app").innerHTML=`
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="Bribri Cultural Tours, inicio">
    <img src="/assets/logoBribri.png" alt="" class="brand__icon" aria-hidden="true" width="32" height="45" />
    <span><strong>Bribri</strong><em> Cultural Tours</em></span>
  </a>
    <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span></button>
    <nav class="site-nav" aria-label="Navegación principal">
      <a href="#experiencias">Experiencias</a>
      <a href="#nuestra-raiz">Nuestra raíz</a>
      <a href="#contacto">Contacto</a>
      <a class="nav-cta" href="#contacto">Planifica tu viaje <span>↗</span></a>
    </nav>
  </header>

  <main>
    <section id="inicio" class="hero">
      <video class="hero__video" autoplay muted loop playsinline><source src="/assets/video/1.mp4" type="video/mp4" /></video>
      <div class="hero__content page-width">
        <p class="kicker">Turismo con propósito · Costa Rica</p>
        <h1>Viaja profundo.<br /><em>Vuelve distinto.</em></h1>
        <p class="hero__intro">Experiencias auténticas en el territorio Bribri y el Caribe Sur, guiadas por quienes llaman hogar a esta tierra.</p>
        <a class="button button--light" href="#experiencias">Explorar experiencias <span>↓</span></a>
      </div>
      <div class="hero__note"><span>Jungle / culture / sea</span></div>
    </section>

    <section class="welcome page-width" aria-labelledby="welcome-title">
      <div class="welcome__logo"><img src="/assets/logoBribri.png" alt="Logo ãñitã" /></div>
      <div class="welcome__copy"><span class="eyebrow">"Mĩshka kö sow ãñitã"</span><h2 id="welcome-title">Let's explore<br /><em>together.</em></h2><p>Un viaje compartido comienza con curiosidad, respeto y ganas de escuchar.</p></div>
    </section>

    <section class="intro page-width" id="nuestra-raiz">
      <div class="section-label"><span>01</span><span>El viaje empieza aquí</span></div>
      <div class="intro__grid">
        <div><h2>Conoce la tierra<br /><em>que nos sostiene.</em></h2></div>
        <div class="intro__copy"><p>Somos una iniciativa de turismo responsable nacida en el territorio Bribri. Creamos encuentros honestos entre viajeros, cultura y naturaleza para que cada visita deje algo bueno en la comunidad.</p><a class="text-link" href="#contacto">Conoce nuestra historia <span>↗</span></a></div>
      </div>
      <div class="values"><div><span>01</span><strong>Guías locales</strong><p>La experiencia empieza con las voces de nuestra comunidad.</p></div><div><span>02</span><strong>Ritmo consciente</strong><p>Viajamos respetando la tierra, sus tiempos y sus límites.</p></div><div><span>03</span><strong>Impacto real</strong><p>Cada reserva apoya proyectos y familias del territorio.</p></div></div>
    </section>

    <section class="experiences" id="experiencias">
      <div class="page-width">
        <div class="section-heading"><div><span class="eyebrow">Elige tu manera de explorar</span><h2>Experiencias<br /><em>con raíz.</em></h2></div><p>Pequeños grupos, historias verdaderas y paisajes que se quedan contigo mucho después de volver.</p></div>
        <div class="experience-grid">${d}</div>
        <a class="button button--dark" href="#contacto">Ver todas las experiencias <span>↗</span></a>
      </div>
    </section>

    <section class="statement">
      <div class="statement__image"></div><div class="statement__content"><span class="eyebrow">Más que turismo</span><h2>Deja una huella<br /><em>que sí importa.</em></h2><p>Creemos en un turismo que protege y regenera la cultura, la economía y el bienestar de las comunidades Bribri.</p><a class="button button--light" href="#contacto">Hablemos de tu viaje <span>↗</span></a></div>
    </section>

    <section class="field-notes page-width">
      <div class="field-notes__copy"><span class="eyebrow">Postales del territorio</span><h2>Lo que se siente<br /><em>cuando llegas.</em></h2><p>Hay lugares que no se visitan de prisa. Se escuchan, se caminan y se comparten con quienes los conocen de verdad.</p></div>
      <div class="field-notes__media"><video controls preload="metadata" poster="/assets/images/3.jpg"><source src="/assets/video/2.mp4" type="video/mp4" />Tu navegador no admite video HTML5.</video><span>Diario de viaje / 02</span></div>
    </section>

    <section class="quote page-width"><span class="quote__mark">“</span><blockquote>Cuando visitas nuestro territorio con respeto, no solo conoces un lugar. También ayudas a que siga vivo.</blockquote><p>— Roberth, guía local y anfitrión Bribri</p></section>

    <section class="contact" id="contacto"><div class="page-width contact__grid"><div><span class="eyebrow">¿Listo para salir?</span><h2>Hagamos espacio<br /><em>para la aventura.</em></h2></div><div><p>Cuéntanos qué quieres descubrir y diseñamos una experiencia a tu ritmo.</p><a class="button button--light" href="https://wa.me/50683647960" target="_blank" rel="noreferrer">Escribir por WhatsApp <span>↗</span></a><p class="contact__small">También puedes encontrarnos en Instagram · @bribritrails</p></div></div></section>
  </main>

  <footer class="footer">
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
        <svg class="social-links__icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1Z" /></svg>
      </a>
      <a href="https://www.instagram.com/bribri_cultural_tours/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg class="social-links__icon" aria-hidden="true" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
      </a>
      <a href="https://www.tiktok.com/@roberth_moradiaz?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
        <svg class="social-links__icon" aria-hidden="true" viewBox="0 0 24 24"><path d="M15 3h3c.3 2 1.4 3.2 3 3.7v3.1c-1.3-.1-2.6-.6-3.7-1.4v7.4a5.2 5.2 0 1 1-4.5-5.2v3.2a2 2 0 1 0 1.5 2V3h.7Z" /></svg>
      </a>
    </nav>

    <!-- Copyright -->
    <p class="footer__copyright">© 2026 Bribri Trails</p>
    
  </div>
</footer>
  
  <a class="whatsapp-float" href="https://wa.me/50683647960" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp">
  <span class="whatsapp-float__icon" aria-hidden="true">✆</span>
  <span class="whatsapp-float__label">WhatsApp</span>
</a>
`;const i=document.querySelector(".menu-toggle"),r=document.querySelector(".site-nav");i==null||i.addEventListener("click",()=>{const a=(r==null?void 0:r.classList.toggle("site-nav--open"))??!1;i.setAttribute("aria-expanded",String(a))});r==null||r.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{r.classList.remove("site-nav--open"),i==null||i.setAttribute("aria-expanded","false")}));
