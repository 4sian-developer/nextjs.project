/* //? NEXT GOOGLE FONTS | Optimized Fonts 
- next/font includes built-in automatic self-hosting for any font file
- optimally load web fonts with zero layout shift, thanks to the 
  underlying CSS size-adjust property used 
*/
import { Roboto, Nunito } from "next/font/google";
//? NEXT LOCAL FONTS | Offline Fonts
import localFont from "next/font/local"; 

/* 
//* variable: Specifies the CSS variable name to be used for the font.
//* weight: Specifies font weights to be included.
//* subsets: Specifies the character subsets to include.
*/

//? GOOGLE FONTS | Online
export const googleroboto = Roboto({
  variable: '--font-roboto', 
  weight: ['300'],
  subsets: ['latin'],
});

export const googlenunito = Nunito({ 
  variable: '--font-nunito',
  weight: ['400', '700'],
  subsets: ['latin'],
});

//? LOCAL FONTS | Offline
export const roboto = localFont({
  variable: '--font-roboto', 
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
})

export const nunito = localFont({
  variable: '--font-nunito',
  src: [
    {
      path: './Nunito-ExtraLight.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Nunito-ExtraLightItalic.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
})