import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat, Crimson_Pro, Work_Sans } from 'next/font/google';

export const metadata = {
  title: 'Joan Sung - Real Estate Agent',
  description: 'Joan Sung - Real Estate Agent at Compass',
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'fallback',
  variable: '--montserrat-font',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  display: 'fallback',
  variable: '--crimson-pro-font',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'fallback',
  variable: '--work-sans-font',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Joan Sung Real Estate</title>
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
