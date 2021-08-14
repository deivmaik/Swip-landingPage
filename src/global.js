
// Colors
export const colors = {
    background:'#2D3332',
    buttonText: '#F3F3F3',
    DarkTone: '#030303',
    SecondaryText: '#464646',
}

// Screen sizes to be used in the media variable 
export const sizes = {
    tablet: 768,
    desktop: 992,
    wideScreen: 1170,
  }
  
  // em in breakpoints works better cross-browser
  
  export const media = {

    handheld:   `@media(max-width: ${(sizes.tablet - 1) / 16}em)`,
    tablet:     `@media(min-width: ${sizes.tablet / 16}em)`,
    tabletOnly: `@media(min-width: ${sizes.tablet / 16}em) and (max-width: ${(sizes.desktop - 1) / 16}em)`,
    desktop:    `@media(min-width: ${sizes.desktop / 16}em)`,
    wideScreen: `@media(min-width: ${sizes.giant / 16}em)`,
  }