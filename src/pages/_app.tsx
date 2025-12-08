import type { AppProps } from 'next/app';
import { Inter, Fira_Code } from 'next/font/google';
import '../styles/globals.css';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${firaCode.variable} font-sans`}>
      <SEO />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
