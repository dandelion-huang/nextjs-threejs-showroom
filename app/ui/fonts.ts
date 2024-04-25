import localFont from 'next/font/local';

export const sourceSansPro = localFont({
  src: [
    {
      path: './../../public/fonts/source-sans-pro/SourceSansPro-ExtraLight.otf.woff2',
      weight: '200',
    },
    {
      path: './../../public/fonts/source-sans-pro/SourceSansPro-Light.otf.woff2',
      weight: '300',
    },
    {
      path: './../../public/fonts/source-sans-pro/SourceSansPro-Regular.otf.woff2',
      weight: '400',
    },
    {
      path: './../../public/fonts/source-sans-pro/SourceSansPro-Semibold.otf.woff2',
      weight: '600',
    },
  ],
  variable: '--font-source-sans-pro',
});
