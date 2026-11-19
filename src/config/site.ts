// Business details used across the site. Edit here, not in the pages.
export const site = {
  name: 'Just Wardrobes & Storage',
  shortName: 'Just Wardrobes',
  url: 'https://www.justwardrobes.com.au',
  phone: '07 5502 2444',
  phoneHref: 'tel:+61755022444',
  mobile: '0432 822 315',
  mobileHref: 'tel:+61432822315',
  email: 'sales@justwardrobes.com.au',
  address: {
    street: 'Unit 3 / 13 Hilldon Court',
    suburb: 'Nerang',
    state: 'QLD',
    postcode: '4211',
  },
  mapUrl: 'https://goo.gl/maps/s19xpMj3Tuj',
  qbcc: '1180459',
  facebook: 'https://www.facebook.com/justwardrobes/',
  googleReview: 'https://search.google.com/local/writereview?placeid=ChIJ74Bkb1YakWsRE2cRKPEPieA',
  gtmId: 'GTM-MFDWH4Z',
  areas: ['Gold Coast', 'Brisbane', 'Sunshine Coast', 'Northern NSW'],
  warranty: {
    install: '7 year',
    components: '7 year',
    slidingDoors: '2 year',
  },
};

// Quote form. Posts straight into the Just Wardrobes Salesforce org as a Lead
// (Web-to-Lead). Web-to-Lead must be enabled in Setup for this to work.
// Set `action` to another endpoint (e.g. Formspree) if you change providers.
export const quoteForm = {
  action: 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
  orgId: '00D7F000000yPEY',
  returnUrl: 'https://www.justwardrobes.com.au/thanks/',
  leadSource: 'Website',
};

export const nav = [
  { href: '/wardrobes/', label: 'Wardrobes' },
  { href: '/cabinetry/', label: 'Cabinetry' },
  { href: '/doors-and-finishes/', label: 'Doors & finishes' },
  { href: '/our-work/', label: 'Our work' },
  { href: '/about/', label: 'About' },
];
