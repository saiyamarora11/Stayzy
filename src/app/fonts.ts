import localFont from 'next/font/local';

export const poppins = localFont({
  src: [
    {
      path: '../fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/Poppins-Light.ttf',
      weight: '300',
      style: 'normal',
    },
  ],
  display: 'swap',
});


export const inter = localFont({
  src: '../fonts/Inter-VariableFont_opsz,wght.ttf',
  display: 'swap',
  weight: 'variable',
  style: 'normal',
});