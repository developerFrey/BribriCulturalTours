import './style.css';
 // Define the Experience type and the experiences array
type Experience = {
  title: string;
  location: string;
  duration: string;
  description: string;
  image: string;
  tag: string;
  price: string;
  details: string;
};
// Define the experiences array with the provided data
const experiences: Experience[] = [
  {
    title: 'Awá Experience',
    location: 'Bribri',
    duration: '2 hours',
    description: 'Cacao preparado de forma ancestral, plantas medicinales y una visita a la cascada del bosque.',
    image: '/assets/images/awaExperience.jpg',
    tag: 'Cultura',
    price: '$120 USD',
    details: 'Conocerás la historia del cacao y su preparación ancestral, aprenderás sobre plantas medicinales y culminaremos con una caminata hasta la cascada del bosque para nadar en sus aguas frescas.',
  },
  {
    title: 'Bribri Cacao/Forest Immersion',
    location: 'Bribri',
    duration: '5 Hours',
    description: 'Una caminata entre selva primaria, historia Bribri, baño en aguas frescas y almuerzo local.',
    image: '/assets/images/4.jpg',
    tag: 'Aventura',
    price: 'Desde $95 USD',
    details: 'Caminaremos aproximadamente 1.5 horas por selva densa hasta una cascada sagrada de la reserva indígena Keköldi. Incluye interpretación sobre naturaleza, cultura e historia, tiempo para nadar y almuerzo local.',
  },
  {
    title: 'Bribri Community Immersion',
    location: 'Bribri',
    duration: 'Full-day',
    description: 'Navega por ríos llenos de vida, conoce comunidades y disfruta frutas tropicales junto al agua.',
    image: '/assets/images/5.jpg',
    tag: 'Naturaleza',
    price: '$111 USD',
    details: 'Recorre los ríos Telire, Yorkín y Lari en compañía de un guía local. Navegaremos entre comunidades y paisajes vivos, con paradas para nadar, descansar y disfrutar frutas tropicales.',
  },
  {
    title: 'Bribri River and Cultural Expedition',
    location: 'Bribri',
    duration: 'Full-day',
    description: 'Explora el mar Caribe con guías locales y descubre la vida marina de nuestras costas.',
    image: '/assets/images/3.jpg',
    tag: 'Mar',
    price: '$225 USD',
    details: 'Explora las aguas del Caribe en Cahuita o Manzanillo. La experiencia incluye acompañamiento local, orientación de seguridad y tiempo para observar la diversidad marina de la costa.',
  },
  {
    title: 'Jungle Immersion',
    location: 'Bribri',
    duration: '3–days',
    description: 'Activa tus sentidos y observa las especies que despiertan cuando cae la noche en el bosque.',
    image: '/assets/images/2.webp',
    tag: 'Fauna',
    price: '$600 USD',
    details: 'Adéntrate en la reserva Keköldi cuando el bosque cambia de ritmo. Observaremos especies nocturnas, escucharemos la vida de la selva y aprenderemos a movernos con respeto durante la caminata.',
  },
  {
    title: 'Bribri River Experience',
    location: 'Bribri',
    duration: 'half-day',
    description: 'Aprende a cultivar, cosechar y compartir una comida hecha con productos de la tierra.',
    image: '/assets/images/4.jpg',
    tag: 'Sabores',
    price: 'Desde $95 USD',
    details: 'Aprende sobre las técnicas Bribri para cultivar y cosechar la tierra. Cerraremos el recorrido compartiendo una comida preparada con productos locales y conversando sobre la relación con el territorio.',
  },
];
// Generate additional experiences with placeholder data
const additionalExperiences: Experience[] = Array.from({ length: 12 }, (_, index) => ({
  title: `Nueva experiencia ${index + 1}`,
  location: 'Por definir',
  duration: 'Por definir',
  description: 'Agrega aquí la descripción de esta experiencia.',
  image: '/assets/images/5.jpg',
  tag: 'Próximamente',
  price: 'Precio por definir',
  details: 'Agrega aquí la información completa, recomendaciones, inclusiones y condiciones de esta experiencia.',
}));

const allExperiences = [...experiences, ...additionalExperiences];

type GalleryItem = { type: 'image' | 'video'; src: string; title: string; description: string };
const galleryItems: GalleryItem[] = [
  { type: 'image', src: '/assets/images/1.jpg', title: 'Territorio Bribri', description: 'Paisajes y encuentros del territorio.' },
  { type: 'image', src: '/assets/images/2.webp', title: 'Vida del bosque', description: 'La naturaleza que acompaña cada recorrido.' },
  { type: 'image', src: '/assets/images/3.jpg', title: 'Caribe Sur', description: 'Mar, costa y biodiversidad.' },
  { type: 'image', src: '/assets/images/4.jpg', title: 'Caminos con raíz', description: 'Senderos para caminar sin prisa.' },
  { type: 'image', src: '/assets/images/5.jpg', title: 'Ríos vivos', description: 'Agua y comunidad compartiendo el mismo camino.' },
  ...Array.from({ length: 10 }, (_, index) => ({ type: 'video' as const, src: `/assets/video/${index + 1}.mp4`, title: `Diario de viaje ${String(index + 1).padStart(2, '0')}`, description: 'Momentos de nuestras experiencias.' })),
];
// Generate the gallery markup
const galleryMarkup = galleryItems.map((item) => `
  <article class="gallery-item" data-gallery-type="${item.type}">
    ${item.type === 'video' ? `<video controls preload="metadata"><source src="${item.src}" type="video/mp4" /></video>` : `<img src="${item.src}" alt="${item.title}" loading="lazy" />`}
    <div class="gallery-item__caption"><span>${item.type === 'video' ? 'Video' : 'Fotografía'}</span><h3>${item.title}</h3><p>${item.description}</p></div>
  </article>
`).join('');
// Generate the experiences markup
const experienceMarkup = allExperiences.map((experience, index) => `
  <article class="experience-card experience-card--color-${index % 6} ${index === 1 ? 'experience-card--featured' : ''}" data-experience-index="${index}">
    <img src="${experience.image}" alt="${experience.title}" loading="lazy" />
    <div class="experience-card__body">
      <span class="eyebrow">${experience.tag}</span>
      <h3>${experience.title}</h3>
      <p>${experience.description}</p>
      <div class="experience-card__meta"><span>${experience.location}</span><span>${experience.duration}</span></div>
      <strong class="experience-card__price">${experience.price}</strong>
      <button class="read-more" type="button" data-experience-index="${index}">Read more <span>↗</span></button>
    </div>
  </article>
`).join('');
// Insert the generated markup into the DOM
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
      <a href="#politicas">Politics and Policies</a>
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
        <div class="experience-grid">${experienceMarkup}</div>
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

    <section class="policies page-width" id="politicas"><div class="policies__heading"><span class="eyebrow">Información importante</span><h2>Politics<br /><em>&amp; policies.</em></h2></div><div class="policies__list"><details open><summary>Reservas</summary><p>Reserva con al menos un día de anticipación. Las actividades comienzan con un mínimo de dos personas.</p></details><details><summary>Qué llevar</summary><p>Agua, bloqueador solar, repelente no tóxico, ropa cómoda y calzado adecuado para actividades al aire libre.</p></details><details><summary>Seguridad y alimentos</summary><p>Indica cualquier alergia o condición relevante al reservar. Las actividades se realizan al aire libre y requieren seguir las recomendaciones del guía.</p></details></div></section>

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
      <div class="gallery-grid">${galleryMarkup}</div>
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
`;
// Handle menu toggle and navigation
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const nav = document.querySelector<HTMLElement>('.site-nav');
const closeMenu = () => {
  nav?.classList.remove('site-nav--open');
  menuButton?.setAttribute('aria-expanded', 'false');
};
menuButton?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('site-nav--open') ?? false;
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('pointerdown', (event) => {
  const target = event.target as Node;
  if (nav?.classList.contains('site-nav--open') && !nav.contains(target) && !menuButton?.contains(target)) closeMenu();
});

const heroVideo = document.querySelector<HTMLVideoElement>('#hero-video');
const muteButton = document.querySelector<HTMLButtonElement>('.video-mute-toggle');
const syncMuteButton = () => {
  if (!heroVideo || !muteButton) return;
  muteButton.setAttribute('aria-label', heroVideo.muted ? 'Activar sonido' : 'Silenciar video');
  muteButton.setAttribute('aria-pressed', String(heroVideo.muted));
  const icon = muteButton.querySelector('.video-mute-toggle__icon');
  if (icon) icon.textContent = heroVideo.muted ? '🔇' : '🔊';
};
if (heroVideo && muteButton) {
  heroVideo.volume = 0.5;
  heroVideo.muted = false;
  const attemptAudibleAutoplay = () => {
    heroVideo.play().catch(() => {
      // Browsers can block audible autoplay; keep playback working silently.
      heroVideo.muted = true;
      syncMuteButton();
    });
  };
  heroVideo.addEventListener('canplay', attemptAudibleAutoplay, { once: true });
  muteButton.addEventListener('click', () => { heroVideo.muted = !heroVideo.muted; syncMuteButton(); });
  syncMuteButton();
}

document.querySelectorAll<HTMLButtonElement>('[data-experience-filter]').forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.experienceFilter ?? 'all';
  document.querySelectorAll<HTMLButtonElement>('[data-experience-filter]').forEach((item) => item.classList.toggle('experience-filter--active', item === button));
  document.querySelectorAll<HTMLElement>('.experience-card').forEach((card) => {
    const cardExperience = allExperiences[Number(card.dataset.experienceIndex)];
    card.hidden = filter !== 'all' && cardExperience?.tag !== filter;
  });
}));

const siteMain = document.querySelector<HTMLElement>('.site-main');
const galleryView = document.querySelector<HTMLElement>('.gallery-view');
const siteFooter = document.querySelector<HTMLElement>('.site-footer');
const openGallery = (event?: Event) => {
  event?.preventDefault(); closeMenu();
  siteMain?.setAttribute('hidden', ''); siteFooter?.setAttribute('hidden', ''); galleryView?.removeAttribute('hidden');
  history.replaceState(null, '', '#gallery'); window.scrollTo({ top: 0, behavior: 'instant' });
};
const closeGallery = () => {
  galleryView?.setAttribute('hidden', ''); siteMain?.removeAttribute('hidden'); siteFooter?.removeAttribute('hidden');
  history.replaceState(null, '', '#inicio'); window.scrollTo({ top: 0, behavior: 'instant' });
};
document.querySelectorAll<HTMLElement>('[data-gallery-open]').forEach((link) => link.addEventListener('click', openGallery));
document.querySelectorAll<HTMLElement>('[data-gallery-close]').forEach((button) => button.addEventListener('click', closeGallery));
document.querySelectorAll<HTMLButtonElement>('[data-gallery-filter]').forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.galleryFilter ?? 'all';
  document.querySelectorAll<HTMLButtonElement>('[data-gallery-filter]').forEach((item) => item.classList.toggle('gallery-filter--active', item === button));
  document.querySelectorAll<HTMLElement>('.gallery-item').forEach((item) => { item.hidden = filter !== 'all' && item.dataset.galleryType !== filter; });
}));

const experienceModal = document.querySelector<HTMLElement>('.experience-modal');
const closeModal = () => { if (experienceModal) { experienceModal.hidden = true; document.body.classList.remove('modal-open'); } };
document.querySelectorAll<HTMLButtonElement>('.read-more').forEach((button) => button.addEventListener('click', () => {
  const experience = allExperiences[Number(button.dataset.experienceIndex)];
  if (!experienceModal || !experience) return;
  document.querySelector<HTMLElement>('#modal-tag')!.textContent = experience.tag;
  document.querySelector<HTMLElement>('#modal-title')!.textContent = experience.title;
  document.querySelector<HTMLElement>('#modal-description')!.textContent = experience.details;
  document.querySelector<HTMLElement>('#modal-location')!.textContent = experience.location;
  document.querySelector<HTMLElement>('#modal-duration')!.textContent = experience.duration;
  document.querySelector<HTMLElement>('#modal-price')!.textContent = experience.price;
  experienceModal.hidden = false;
  document.body.classList.add('modal-open');
}));
document.querySelectorAll<HTMLElement>('[data-close-modal]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeModal(); });

const experiencesToggle = document.querySelector<HTMLButtonElement>('.experiences-toggle');
experiencesToggle?.addEventListener('click', () => {
  const expanded = document.querySelector('.experiences')?.classList.toggle('experiences--expanded') ?? false;
  experiencesToggle.setAttribute('aria-expanded', String(expanded));
  experiencesToggle.firstChild!.textContent = expanded ? 'Ocultar experiencias ' : 'Ver todas las experiencias ';
});
