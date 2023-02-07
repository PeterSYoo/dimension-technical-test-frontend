import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen w-screen bg-[#E5E5E5] flex justify-center items-center">
      <Component {...pageProps} />
    </div>
  );
}
