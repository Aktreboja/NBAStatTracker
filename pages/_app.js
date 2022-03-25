import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from '../Components/Layout/PageLayout';


function MyApp({ Component, pageProps }) {
  return <PageLayout>
      <Component {...pageProps} />
  </PageLayout>
}

export default MyApp
