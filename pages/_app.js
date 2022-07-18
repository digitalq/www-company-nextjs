import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.css'
import '../public/assets/css/vendor/bootstrap.min.css'
import '../public/assets/css/vendor/magnific-popup.css'
import '../public/assets/css/vendor/owl.carousel.min.css'
import '../public/assets/css/vendor/owl.theme.default.min.css'
import '../public/assets/css/main.css'
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return <>
   <Head>

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <script
       async
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
       > </script>
      </Head>
   <Component {...pageProps} />

  </>}

export default MyApp
