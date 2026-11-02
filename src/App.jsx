import './App.css'
import { useEffect, useState } from 'react'
import Header from './componant/Header'
import HeroSection from './componant/HeroSection'
import HeroGride from './componant/HeroGrid'
import CardHero from './componant/CardHero'
import InformationHero from './componant/InformationHero'
import LogoCarousel from './componant/LogoCarousel'
import CustomerReviews from './componant/CustomerReviews'
import Footer from './componant/Footer'
import AuthPage from './componant/AuthPage'
import CarInsurance from './componant/CarInsurance'
import PromotionSection from './componant/PromotionSection'
import NewsSection from './componant/NewsSection'
import ContactUs from './componant/ContactUs'

// No routing library is installed, so we use a tiny hash-based route.
// "#/login" and "#/register" show the auth page on its own
// (no navbar/footer); every other hash shows the normal website.
function getHashRoute() {
  return window.location.hash.replace('#/', '') || 'home'
}

function App() {
  const [route, setRoute] = useState(getHashRoute)

  // Stay in sync with the browser URL (back/forward buttons, links).
  useEffect(() => {
    function onHashChange() {
      setRoute(getHashRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  // The auth page renders alone, without the site's header and footer.
  if (route === 'login' || route === 'register') {
    // key={route} forces a fresh mount when the URL changes between
    // login/register, so initialMode is always applied.
    return (
      <AuthPage
        key={route}
        initialMode={route === 'register' ? 'register' : 'login'}
      />
    )
  }

  // Contact page reuses the existing Navbar + Footer.
  if (route === 'contact') {
    return (
      <>
        <Header />
        <ContactUs />
        <Footer />
      </>
    )
  }

  // Car Insurance page reuses the existing Navbar + Footer.
  if (route === 'car-insurance') {
    return (
      <>
        <Header />
        <CarInsurance />
        <Footer />
      </>
    )
  }

  // Promotions page reuses the existing Navbar + Footer.
  if (route === 'promotions') {
    return (
      <>
        <Header />
        <PromotionSection />
        <Footer />
      </>
    )
  }

  // News page reuses the existing Navbar + Footer.
  if (route === 'news') {
    return (
      <>
        <Header />
        <NewsSection />
        <Footer />
      </>
    )
  }

  return (
    <>
    <Header/>
    <HeroSection />
    <HeroGride/>
    <CardHero/>
    <InformationHero/>
    <LogoCarousel/>
    <CustomerReviews/>
    <Footer/>
    </>
  )
}

export default App
