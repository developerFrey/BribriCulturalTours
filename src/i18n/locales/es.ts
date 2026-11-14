/**
 * Textos de la interfaz en español.
 *
 * Debe tener exactamente las mismas claves que `en.ts` (lo valida el tipo
 * `Dictionary`). El contenido de los tours está en src/data/experiences.
 */
import type { Dictionary } from './en';

export const es: Dictionary = {
  meta: {
    title: 'Bribri Cultural Tours | Experiencias auténticas en Costa Rica',
    description:
      'Descubre experiencias culturales Bribri, de bosque lluvioso y del Caribe de Costa Rica con guías locales. Turismo responsable desde Puerto Viejo.',
  },

  nav: {
    home: 'Bribri Cultural Tours, inicio',
    main: 'Navegación principal',
    openMenu: 'Abrir menú',
    menu: 'Menú',
    experiences: 'Experiencias',
    about: 'Sobre nosotros',
    gallery: 'Galería',
    policies: 'Políticas',
    contact: 'Contacto',
    planTrip: 'Planea tu viaje',
    switchLanguage: 'Switch the site to English',
  },

  hero: {
    titleAccent: 'Donde la cultura',
    titleEmphasis: 'se une a lo salvaje.',
    intro: 'Experiencias auténticas en territorio Bribri y el Caribe Sur, guiadas por las personas que llaman hogar a esta tierra.',
    cta: 'Explorar experiencias',
    note: 'Selva / cultura / mar',
    unmute: 'Activar sonido',
    mute: 'Silenciar video',
  },

  experiences: {
    eyebrow: 'Elige tu forma de explorar',
    title: 'Experiencias<br /><em>con raíces.</em>',
    intro: 'Grupos pequeños, historias reales y paisajes que te acompañan mucho después de volver a casa.',
    filtersLabel: 'Filtrar experiencias',
    viewAll: 'Ver todas las experiencias',
    hideAll: 'Ocultar experiencias',
    readMore: 'Leer más',
    categories: {
      all: 'Todas',
      culture: 'Cultura',
      nature: 'Naturaleza',
      adventure: 'Aventura',
      sea: 'Mar',
      wildlife: 'Vida silvestre',
      food: 'Gastronomía',
    },
  },

  intro: {
    label: 'El viaje empieza aquí',
    title: 'Conoce la tierra<br /><em>que nos sostiene.</em>',
    copy: 'Somos una iniciativa de turismo responsable nacida en territorio Bribri. Creamos encuentros honestos entre viajeros, cultura y naturaleza para que cada visita deje algo bueno en la comunidad.',
    link: 'Conoce nuestra historia',
    values: [
      { title: 'Guías locales', text: 'La experiencia comienza con las voces de nuestra comunidad.' },
      { title: 'Ritmo consciente', text: 'Viajamos respetando la tierra, sus ritmos y sus límites.' },
      { title: 'Impacto real', text: 'Cada reserva apoya proyectos y familias del territorio.' },
    ],
  },

  about: {
    eyebrow: 'Más que un tour. Una conexión con una cultura viva.',
    title: 'Sobre<br /><em>nosotros.</em>',
    paragraphs: [
      'Bribri Cultural Tours nació para conectar a los viajeros con el pueblo Bribri, su cultura, su territorio y el mundo natural de Costa Rica.',
      'Creemos que el turismo puede ser una forma de aprender, compartir y generar un impacto positivo.',
      'Nuestras experiencias se construyen a partir del conocimiento auténtico, las tradiciones vivas y el aprender haciendo — desde el cacao y las plantas medicinales hasta aventuras en el bosque lluvioso, los ríos y la vida en comunidad.',
      'Trabajamos para que el turismo sea una fuerza que apoye a las familias locales, respete el territorio y ayude a mantener viva la cultura Bribri.',
    ],
    tagline: 'Viaja con nosotros. Aprende de la tierra. Conecta con la cultura.',
    cta: 'Hablemos de tu viaje',
  },

  fieldNotes: {
    eyebrow: 'Postales desde el territorio',
    title: 'Lo que se siente<br /><em>al llegar.</em>',
    text: 'Hay lugares que no se visitan con prisa. Se escuchan, se caminan y se comparten con quienes realmente los conocen.',
    caption: 'Diario de viaje / 02',
    videoFallback: 'Tu navegador no soporta video HTML5.',
  },

  guide: {
    eyebrow: 'Conoce a tu guía',
    title: 'Roberth<br /><em>la persona detrás del viaje.</em>',
    imageAlt: 'Roberth, guía local Bribri',
    paragraphs: [
      'Hola, mi nombre es Roberth.',
      'Soy un hombre Bribri, profesional en turismo y alguien profundamente conectado con la cultura, el bosque y la tierra donde crecí.',
      'Me gradué de la universidad en Turismo y durante los últimos <strong>seis años he guiado viajeros y compartido el Caribe de Costa Rica</strong>: sus paisajes, su vida silvestre, su gente y su cultura.',
      'Pero para mí, el turismo es más que una profesión.',
      'Estoy comprometido con el rescate, la transmisión y la continuidad del conocimiento y las tradiciones Bribri. A través de mis experiencias comparto lo que he aprendido sobre vida silvestre, plantas, cacao, agricultura, historia Bribri y la forma en que nuestro pueblo entiende y se conecta con el mundo natural.',
      'Creo que la mejor forma de aprender es haciendo. Por eso mis experiencias no se tratan solo de visitar un lugar, sino de participar, hacer preguntas, conectar y ver el mundo desde otra perspectiva.',
    ],
    closing: 'Para mí, compartir la cultura no es mostrarte el pasado. Es compartir algo que todavía está vivo.',
    cta: 'Planea tu experiencia',
  },

  reviews: {
    eyebrow: 'Lo que dicen nuestros viajeros',
    title: 'Historias que<br /><em>se quedan contigo.</em>',
    link: 'Ver nuestras reseñas en Google',
  },

  policies: {
    eyebrow: 'Información importante',
    title: 'Políticas de<br /><em>reserva y tours.</em>',
    intro:
      'En <strong>Bribri Cultural Tours</strong> nos comprometemos a ofrecer experiencias significativas, seguras y respetuosas, apoyando a las comunidades locales, la cultura indígena y el entorno natural.',
    items: [
      {
        title: '1. Número mínimo de participantes',
        body: '<p>Todos los tours y actividades requieren un <strong>mínimo de 2 participantes</strong> para realizarse.</p>',
      },
      {
        title: '2. Reserva anticipada',
        body: '<p>Los tours deben reservarse <strong>con al menos 1 día de anticipación</strong>. Algunas experiencias pueden requerir más tiempo por transporte, coordinación con la comunidad, disponibilidad u otra logística.</p>',
      },
      {
        title: '3. Depósito de reserva',
        body: '<p>Se requiere un <strong>pago anticipado del 20%</strong> para confirmar tu reserva. El depósito asegura tu fecha, guía, transporte y los arreglos necesarios y, por lo general, no es reembolsable. El <strong>80% restante debe pagarse antes o al inicio del tour</strong>. La reserva queda confirmada únicamente al recibir el depósito.</p>',
      },
      {
        title: '4. Cambios de fecha',
        body: '<p>Contáctanos <strong>al menos 24 horas antes del inicio programado</strong> si necesitas cambiar tu fecha. Cuando sea posible, el depósito del 20% podrá transferirse una vez a una nueva fecha, sujeto a disponibilidad. Los cambios solicitados después de ese plazo pueden considerarse una cancelación y conllevar la pérdida del depósito.</p>',
      },
      {
        title: '5. Cancelaciones',
        body: '<p>El depósito del 20% generalmente <strong>no es reembolsable</strong>, ya que cubre la planificación, coordinación, transporte y preparativos de tu reserva. Ante una emergencia real o una circunstancia excepcional, contáctanos lo antes posible, preferiblemente con al menos 24 horas de anticipación. Podremos ofrecer un reembolso, un crédito o una fecha alternativa según cada caso. Las cancelaciones tardías o la no presentación pueden conllevar la pérdida del depósito.</p>',
      },
      {
        title: '6. Clima o condiciones de seguridad',
        body: '<p>Las experiencias pueden verse afectadas por el clima, el estado de los ríos, los senderos u otros factores ambientales. Por seguridad, Bribri Cultural Tours puede <strong>modificar, posponer o cancelar una actividad</strong>. Trabajaremos con el cliente para acordar una fecha alternativa o un reembolso adecuado del monto pagado, según las circunstancias.</p>',
      },
      {
        title: '7. Niños',
        body: '<p><strong>Niños de 0 a 5 años:</strong> sin costo.<br /><strong>Niños de 6 a 12 años:</strong> 50% del precio de adulto.<br /><strong>13 años en adelante:</strong> precio de adulto.<br />Algunas actividades pueden tener restricciones específicas de edad o seguridad.</p>',
      },
      {
        title: '8. Alergias y consideraciones especiales',
        body: '<p>Antes del tour, infórmanos sobre alergias o sensibilidades a alimentos, insectos, plantas o cualquier otro elemento presente durante la experiencia. Comparte también restricciones alimentarias, consideraciones de movilidad u otros requisitos especiales relevantes para la actividad.</p>',
      },
      {
        title: '9. Transporte y vehículos particulares',
        body: '<p>El transporte está incluido donde se indica. Si viajas en <strong>vehículo propio</strong>, puede aplicarse un descuento según el tour y los requisitos de transporte.</p>',
      },
      {
        title: '10. Pertenencias personales y equipo',
        body: '<p>Bribri Cultural Tours <strong>no se hace responsable por la pérdida, robo o daño de pertenencias personales, dispositivos electrónicos, ropa, equipo u otros artículos del cliente</strong>. Recomendamos llevar solo lo necesario y mantener tus pertenencias seguras durante toda la experiencia.</p>',
      },
      {
        title: '11. Actividades al aire libre y seguridad',
        body: '<p>Todas las experiencias se realizan <strong>al aire libre y en entornos naturales</strong>. Las condiciones pueden incluir terreno irregular, barro, rocas, ríos, pendientes, insectos, lluvia, calor y otras condiciones naturales. Los participantes deben seguir las instrucciones y recomendaciones de seguridad del guía e informarle de cualquier condición que pueda afectar su participación segura.</p>',
      },
      {
        title: '12. Qué llevar',
        body: '<p>Recomendamos llevar:</p><ul><li>Agua para beber</li><li>Repelente de insectos amigable con el ambiente</li><li>Protector solar, si es necesario</li><li>Ropa cómoda</li><li>Zapatos cerrados</li><li>Traje de baño, cuando aplique</li><li>Toalla o paño pequeño</li><li>Meriendas</li><li>Medicamentos personales, si los requieres</li></ul><p>Considera los requisitos específicos del tour que elijas.</p>',
      },
      {
        title: '13. Respeto por la naturaleza y las comunidades locales',
        body: '<p>Nuestras experiencias se basan en el <strong>respeto por la naturaleza, las comunidades locales, la cultura indígena y el conocimiento tradicional</strong>. Se espera que los visitantes respeten las costumbres locales, las normas comunitarias, la vida silvestre, las plantas, los espacios culturales y el entorno. No retires objetos culturales, plantas, animales ni recursos naturales sin permiso.</p>',
      },
      {
        title: '14. Turismo responsable',
        body: '<p>Al unirte a nuestras experiencias formas parte de un <strong>intercambio respetuoso entre visitantes, población local, cultura y tierra</strong>. Evita tirar basura, dañar áreas naturales, perturbar la vida silvestre o cualquier comportamiento que pueda afectar negativamente a las comunidades o lugares que visitamos.</p><p><strong>Gracias por viajar con respeto y apoyar la protección y continuidad de la cultura Bribri, su territorio y los medios de vida locales.</strong></p>',
      },
      {
        title: 'Nuestro compromiso',
        body: '<p>En <strong>Bribri Cultural Tours</strong> creemos que el turismo puede ser un puente entre culturas. Cada experiencia es una oportunidad para aprender, compartir y crear una conexión respetuosa con la tierra y las personas que la llaman hogar.</p><p><strong>Gracias por elegir vivir el Caribe y el territorio Bribri con nosotros.</strong></p>',
      },
    ],
  },

  contact: {
    eyebrow: '¿Listo para explorar?',
    title: 'Haz espacio<br /><em>para la aventura.</em>',
    text: 'Cuéntanos qué quieres descubrir y diseñaremos una experiencia a tu propio ritmo.',
    whatsapp: 'Escríbenos por WhatsApp',
    catalog: 'Descarga el catálogo completo de tours',
    instagram: 'También nos encuentras en Instagram · @bribri_cultural_tours',
  },

  gallery: {
    eyebrow: 'Imágenes y videos',
    title: 'Galería<br /><em>de experiencias.</em>',
    back: 'Volver al menú',
    filtersLabel: 'Filtrar galería',
    all: 'Todo',
    images: 'Imágenes',
    videos: 'Videos',
    photo: 'Foto',
    video: 'Video',
    photoTitle: 'Imagen de galería {n}',
    videoTitle: 'Diario de viaje {n}',
    photoDescription: 'Momentos de nuestro territorio y experiencias.',
    videoDescription: 'Momentos de nuestras experiencias.',
  },

  modal: {
    close: 'Cerrar información',
    cta: 'Consultar disponibilidad',
  },

  footer: {
    tagline: 'Viajes con raíces desde el Caribe Sur de Costa Rica.',
    social: 'Redes sociales',
  },

  whatsapp: {
    label: 'WhatsApp',
    aria: 'Escríbenos por WhatsApp',
  },
};
