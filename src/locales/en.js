import es from '../locales/es';

const t = key => {
  const split = key.split('.');

  return (
    split.reduce((acc, item) => {
      return acc[item];
    }, es) ?? key
  );
};

export default {
  register:{
    mainTitle:'Welcome Onboard!',
    mainText: 'Lets help you meet up your tasks.',
    button:'regiter',
    HighlightedText:'Already have an account?'
  }
};