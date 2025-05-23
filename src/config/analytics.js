import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-0CWSX8RNRH');
};

export const trackPaidStep = () => {
  ReactGA.event({
    category: 'Checkout',
    action: 'Purchase Completed',
    label: 'Paid Step',
  });
};
