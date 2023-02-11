import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#E5E5E5]">
      <Component {...pageProps} />
    </div>
  );
}
