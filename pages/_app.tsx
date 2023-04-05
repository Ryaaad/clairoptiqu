import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store } from '../store';
import Footer from '../Components/footer';
import 'tailwindcss/tailwind.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
  <Component {...pageProps} />
  {/* <Footer></Footer> */}
</Provider>
}
