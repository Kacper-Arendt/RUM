const size = {
    small: '530px',
    medium: '768px',
    big: '992px',
    large: '1200px',
    xLarge: '1400px',
};

export const device: typeof size = {
    small: `(min-width: ${size.small})`,
    medium: `(min-width: ${size.medium})`,
    big: `(min-width: ${size.big})`,
    large: `(min-width: ${size.large})`,
    xLarge: `(min-width: ${size.xLarge})`,
};