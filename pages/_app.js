import 'bootstrap/dist/css/bootstrap.min.css';
import PageLayout from '../Components/Layout/PageLayout';
import '../Stylesheets/index.scss'


function MyApp({ Component, pageProps }) {
  return <PageLayout>
      <Component {...pageProps} />
  </PageLayout>
}

export default MyApp
