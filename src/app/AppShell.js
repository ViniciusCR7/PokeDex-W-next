import { AppRouter } from '../../components/AppRouter';


const AppShell = ({ Component, pageProps }) => {
  return (
    <AppRouter>
      <Component {...pageProps} />
    </AppRouter>
  );
};

export default AppShell;