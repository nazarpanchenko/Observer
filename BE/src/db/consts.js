const sessionCategories = Object.freeze({
  REGULAR: 'Regular',
  EVENT: 'Event',
});

const subjectTypes = Object.freeze({
  PLANET: 'Planet',
  MOON: 'Moon',
  SUN: 'Sun',
  SATELLITE: 'Satellite',
  COMET: 'Comet',
  GALAXY: 'Galaxy',
  NEBULA: 'Nebula',
  OPEN_STAR_CLUSTER: 'Open Star Cluster',
  GLOBULAR_STAR_CLUSTER: 'Globular Star Cluster',
});

const telescopeTypes = Object.freeze({
  REFLECTOR: 'Reflector',
  REFRACTOR: 'Refractor',
  CASSEGRAIN: 'Cassegrain',
});

const eyepieceSizeSchemas = Object.freeze({
  SMALL: `1.25''`,
  BIG: `2''`,
});

const eyepieceOpticalSchemas = Object.freeze({
  KELLNER: 'Kellner',
  PLOSSL: 'Plossl',
  ERFLE: 'Erfle',
  XWA: 'Extra Wide Angle',
});

const barlowLensSchemas = Object.freeze({
  DOUBLE: '2X',
  TRIPPLE: '3X',
});

const filterTypes = Object.freeze({
  NEBULA: 'Nebula',
  PLANETARY: 'Planetary',
  ASTROPHOTOGRAPHY: 'Astrophotography',
  SOLAR: 'Solar',
});

module.exports = {
  sessionCategories,
  subjectTypes,
  telescopeTypes,
  eyepieceSizeSchemas,
  eyepieceOpticalSchemas,
  barlowLensSchemas,
  filterTypes,
};
