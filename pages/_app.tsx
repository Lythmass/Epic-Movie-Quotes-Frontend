import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { store } from '../store';
import { Provider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({ Component, pageProps }: AppProps) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </QueryClientProvider>
  );
}

export default appWithTranslation(App);
