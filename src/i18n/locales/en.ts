/**
 * English UI copy (the reference dictionary).
 *
 * The shape of this object defines the `Dictionary` type: the Spanish file
 * must provide exactly the same keys, so a missing translation is a compile
 * error instead of a blank spot on the website.
 *
 * Strings may contain simple inline HTML (<em>, <strong>, <br />).
 * Tour content (cards + "Read more" details) lives in src/data/experiences.
 */
export const en = {
  meta: {
    title: 'Bribri Cultural Tours | Authentic Costa Rica Experiences',
    description:
      'Explore authentic Bribri cultural, rainforest and Caribbean experiences in Costa Rica with local guides. Book responsible travel in Puerto Viejo.',
  },

  nav: {
    home: 'Bribri Cultural Tours, home',
    main: 'Main navigation',
    openMenu: 'Open menu',
    menu: 'Menu',
    experiences: 'Experiences',
    about: 'About Us',
    gallery: 'Gallery',
    policies: 'Policies',
    contact: 'Contact',
    planTrip: 'Plan your trip',
    switchLanguage: 'Cambiar el sitio a español',
  },

  hero: {
    titleAccent: 'Where Culture',
    titleEmphasis: 'Meets The Wild.',
    intro: 'Authentic experiences in Bribri territory and the Southern Caribbean, guided by the people who call this land home.',
    cta: 'Explore experiences',
    note: 'Jungle / culture / sea',
    unmute: 'Turn sound on',
    mute: 'Mute video',
  },

  experiences: {
    eyebrow: 'Choose your way to explore',
    title: 'Rooted<br /><em>experiences.</em>',
    intro: 'Small groups, true stories and landscapes that stay with you long after you return.',
    filtersLabel: 'Filter experiences',
    viewAll: 'View all experiences',
    hideAll: 'Hide experiences',
    readMore: 'Read more',
    categories: {
      all: 'All',
      culture: 'Culture',
      nature: 'Nature',
      adventure: 'Adventure',
      sea: 'Sea',
      wildlife: 'Wildlife',
      food: 'Food',
    },
  },

  intro: {
    label: 'The journey starts here',
    title: 'Meet the land<br /><em>that sustains us.</em>',
    copy: 'We are a responsible tourism initiative born in Bribri territory. We create honest encounters between travelers, culture and nature so every visit leaves something good in the community.',
    link: 'Discover our story',
    values: [
      { title: 'Local guides', text: 'The experience begins with the voices of our community.' },
      { title: 'Conscious pace', text: 'We travel while respecting the land, its rhythms and its limits.' },
      { title: 'Real impact', text: 'Every booking supports projects and families in the territory.' },
    ],
  },

  about: {
    eyebrow: 'More than a tour. A connection to a living culture.',
    title: 'About<br /><em>Us.</em>',
    paragraphs: [
      'Bribri Cultural Tours was created to connect travelers with the Bribri people, their culture, territory and the natural world of Costa Rica.',
      'We believe tourism can be a way to learn, share and create a positive impact.',
      'Our experiences are built around authentic knowledge, living traditions and learning by doing — from cacao and medicinal plants to rainforest adventures, rivers and community life.',
      'We work to make tourism a force that supports local families, respects the territory and helps keep Bribri culture alive.',
    ],
    tagline: 'Travel with us. Learn from the land. Connect with the culture.',
    cta: 'Talk about your trip',
  },

  fieldNotes: {
    eyebrow: 'Postcards from the territory',
    title: 'What it feels like<br /><em>when you arrive.</em>',
    text: 'Some places are not meant to be visited in a hurry. They are heard, walked and shared with those who truly know them.',
    caption: 'Travel diary / 02',
    videoFallback: 'Your browser does not support HTML5 video.',
  },

  guide: {
    eyebrow: 'Meet your guide',
    title: 'Roberth<br /><em>the person behind the journey.</em>',
    imageAlt: 'Roberth, Bribri local guide',
    paragraphs: [
      'Hello, my name is Roberth.',
      'I am a Bribri man, a tourism professional, and someone deeply connected to the culture, rainforest and land where I grew up.',
      'I graduated from university with a degree in Tourism and have spent the past <strong>six years guiding travelers and sharing the Caribbean of Costa Rica</strong> — its landscapes, wildlife, people and culture.',
      'But for me, tourism is more than a profession.',
      'I am committed to the rescue, transmission and continuation of Bribri knowledge and traditions. Through my experiences, I share what I have learned about wildlife, plants, cacao, agriculture, Bribri history and the way our people understand and connect with the natural world.',
      'I believe the best way to learn is by doing. That is why my experiences are not simply about visiting a place. They are about participating, asking questions, connecting and seeing the world from a different perspective.',
      'I follow the Bribri principles of living consciously and in harmony with the Earth, with respect for the land, the people and everything around us.',
    ],
    closing: 'For me, sharing culture is not about showing you the past. It is about sharing something that is still alive.',
    cta: 'Plan your experience',
  },

  reviews: {
    eyebrow: 'What our travelers say',
    title: 'Stories that<br /><em>stay with you.</em>',
    link: 'See our Google reviews',
  },

  policies: {
    eyebrow: 'Important information',
    title: 'Booking<br /><em>&amp; tour policies.</em>',
    intro:
      'At <strong>Bribri Cultural Tours</strong>, we are committed to providing meaningful, safe and respectful experiences while supporting local communities, Indigenous culture and the natural environment.',
    items: [
      {
        title: '1. Minimum Number of Participants',
        body: '<p>All tours and activities require a <strong>minimum of 2 participants</strong> to operate.</p>',
      },
      {
        title: '2. Advance Booking',
        body: '<p>Tours must be booked <strong>at least 1 day in advance</strong>. Some experiences may require additional notice due to transportation, community coordination, availability or other logistics.</p>',
      },
      {
        title: '3. Reservation Deposit',
        body: '<p>A <strong>20% advance payment</strong> is required to confirm your reservation. The deposit reserves your date, guide, transportation and necessary arrangements and is generally non-refundable. The remaining <strong>80% must be paid before or at the beginning of the tour</strong>. A reservation is confirmed only once the deposit has been received.</p>',
      },
      {
        title: '4. Changes of Date',
        body: '<p>Contact us <strong>at least 24 hours before the scheduled start</strong> if you need to change your date. When possible, the 20% deposit may be transferred to a new date once, subject to availability. Changes requested later may be considered a cancellation and may result in loss of the deposit.</p>',
      },
      {
        title: '5. Cancellations',
        body: '<p>The 20% deposit is generally <strong>non-refundable</strong> because it covers planning, coordination, transportation arrangements and preparations made for your booking. In a genuine emergency or exceptional circumstance, contact us as soon as possible, preferably at least 24 hours before the activity. We may offer a refund, credit or alternative date on a case-by-case basis. Late cancellations or no-shows may result in loss of the deposit.</p>',
      },
      {
        title: '6. Weather or Safety Conditions',
        body: '<p>Experiences may be affected by weather, river conditions, trails or other environmental factors. For safety reasons, Bribri Cultural Tours may <strong>modify, postpone or cancel an activity</strong>. We will work with the client to arrange an alternative date or an appropriate refund of the amount paid, depending on the circumstances.</p>',
      },
      {
        title: '7. Children',
        body: '<p><strong>Children from 0 to 5 years old:</strong> Free of charge.<br /><strong>Children from 6 to 12 years old:</strong> 50% of the adult price.<br /><strong>13 years and older:</strong> Adult price.<br />Some activities may have specific age or safety restrictions.</p>',
      },
      {
        title: '8. Allergies &amp; Special Considerations',
        body: '<p>Before the tour, inform us of allergies or sensitivities to food, insects, plants or any other element present during the experience. Also share dietary restrictions, mobility considerations or other special requirements relevant to the activity.</p>',
      },
      {
        title: '9. Transportation &amp; Private Vehicles',
        body: '<p>Transportation is included where indicated. If you travel with your <strong>own vehicle</strong>, a discount may be applied depending on the tour and transportation requirements.</p>',
      },
      {
        title: '10. Personal Belongings &amp; Equipment',
        body: '<p>Bribri Cultural Tours is <strong>not responsible for the loss, theft or damage of personal belongings, electronic devices, clothing, equipment or other items brought by the client</strong>. We recommend bringing only what is necessary and keeping personal belongings secure throughout the experience.</p>',
      },
      {
        title: '11. Outdoor Activities &amp; Safety',
        body: "<p>All experiences take place <strong>outdoors and in natural environments</strong>. Conditions may include uneven terrain, mud, rocks, rivers, steep sections, insects, rain, heat and other natural conditions. Participants must follow the guide's instructions and safety recommendations and inform the guide of any condition that could affect safe participation.</p>",
      },
      {
        title: '12. What to Bring',
        body: '<p>We recommend bringing:</p><ul><li>Drinking water</li><li>Environmentally friendly insect repellent</li><li>Sunscreen, if needed</li><li>Comfortable clothing</li><li>Closed-toe shoes</li><li>Swimwear, when applicable</li><li>Towel or small cloth</li><li>Snacks</li><li>Personal medication, if required</li></ul><p>Please consider the specific requirements of your chosen tour.</p>',
      },
      {
        title: '13. Respect for Nature &amp; Local Communities',
        body: '<p>Our experiences are based on <strong>respect for nature, local communities, Indigenous culture and traditional knowledge</strong>. Guests are expected to respect local customs, community rules, wildlife, plants, cultural spaces and the environment. Please do not remove cultural objects, plants, animals or natural resources without permission.</p>',
      },
      {
        title: '14. Responsible Tourism',
        body: '<p>By joining our experiences, you become part of a <strong>respectful exchange between visitors, local people, culture and the land</strong>. Please avoid littering, damaging natural areas, disturbing wildlife or behavior that could negatively affect communities or places we visit.</p><p><strong>Thank you for traveling with respect and supporting the protection and continuation of Bribri culture, territory and local livelihoods.</strong></p>',
      },
      {
        title: 'Our Commitment',
        body: '<p>At <strong>Bribri Cultural Tours</strong>, we believe tourism can be a bridge between cultures. Every experience is an opportunity to learn, share and create a respectful connection with the land and the people who call it home.</p><p><strong>Thank you for choosing to experience the Caribbean and Bribri territory with us.</strong></p>',
      },
    ],
  },

  contact: {
    eyebrow: 'Ready to explore?',
    title: 'Make room<br /><em>for adventure.</em>',
    text: 'Tell us what you want to discover and we will design an experience at your own pace.',
    whatsapp: 'Write on WhatsApp',
    catalog: 'Download the complete tour catalog',
    instagram: 'You can also find us on Instagram · @bribri_cultural_tours',
  },

  gallery: {
    eyebrow: 'Images and videos',
    title: 'Gallery<br /><em>of experiences.</em>',
    back: 'Back to menu',
    filtersLabel: 'Filter gallery',
    all: 'All',
    images: 'Images',
    videos: 'Videos',
    photo: 'Photo',
    video: 'Video',
    photoTitle: 'Gallery image {n}',
    videoTitle: 'Travel diary {n}',
    photoDescription: 'Moments from our territory and experiences.',
    videoDescription: 'Moments from our experiences.',
  },

  modal: {
    close: 'Close information',
    cta: 'Check availability',
  },

  footer: {
    tagline: 'Rooted travel from the Southern Caribbean of Costa Rica.',
    social: 'Social media',
  },

  whatsapp: {
    label: 'WhatsApp',
    aria: 'Write on WhatsApp',
  },
};

/** Shape every language must follow. */
export type Dictionary = typeof en;
