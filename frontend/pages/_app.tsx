import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import { store, persistor} from "@/redux/store";
import Main from '@/components/Main';
import { PersistGate } from 'redux-persist/integration/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';
import Menu from '@/components/Menu';

export default function App({ Component, pageProps }: AppProps) {
  const footerRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Navbar ref={navbarRef} />
        <Menu/>

        <Main navbarRef={navbarRef} footerRef={footerRef}>
          <Component {...pageProps} />
        </Main>

        <Footer ref={footerRef} />
      </PersistGate>
    </Provider>
  )
}
