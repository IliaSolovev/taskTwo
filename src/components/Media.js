export const extraSmall = null;
export const small = 576;
export const medium = 720;
export const large = 960;
export const extraLarge = 1140;

export const mediaPadding = {
  container: {
    padding: '0 140px'
  },
  [`@media (max-width: ${extraLarge}px)`]: {
    container: {
      padding: '0 140px'
    }
  },
  [`@media (max-width: ${medium}px)`]: {
    container: {
      padding: '0 80px'
    }
  },
  [`@media (max-width: ${small}px)`]: {
    container: {
      padding: '0 20px'
    }
  },
};