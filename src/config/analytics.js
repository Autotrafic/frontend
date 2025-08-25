import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-0CWSX8RNRH');
};

export const trackPaidStep = () => {
  ReactGA.set({ debug_mode: true });
  ReactGA.event('purchase_completed', {
  category: 'Checkout',
  label: 'Paid Step'
});

  console.info('GA Event: Paid Step');
};
