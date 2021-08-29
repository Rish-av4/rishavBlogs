import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script'

import '../styles/globals.css'
// import '../styles/Animations.css'

function MyApp({ Component, pageProps }) {
  return( 
  <> 
  <Header/>
  <main className='container'>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossOrigin="anonymous"></link>

  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"/>


  <Component {...pageProps} />
  </main>
  <Footer/>
  </>
  )
}

export default MyApp
