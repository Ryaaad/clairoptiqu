import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store';
import 'tailwindcss/tailwind.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    import('react-facebook-pixel')
      .then((ReactPixel) => {
        ReactPixel.default.init('186022710735781'); // facebookPixelId
        ReactPixel.default.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.default.pageView();
        });
      })
      .catch((error) => {
        console.log('Error loading Facebook Pixel:', error);
      });
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
