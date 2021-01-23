import Link from 'next/link'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <a href='/'>Home</a>
      <a href='/about'>About</a>

      <Component {...pageProps} />
      <footer> my footer </footer>

    </>
  )
}

export default MyApp
