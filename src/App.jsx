import React from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import PropsParent from './PropsParent.jsx'
import UserGreetingsParent from './UserGreetingsParent.jsx'
import GreetingCardParent from './GreetingCardParent.jsx'
import WeatherWidgetParent from './WeatherWidgetParent.jsx'



function App() {
  return(
    <>
      <Header/>
      <WeatherWidgetParent/>
      <GreetingCardParent/>
      <UserGreetingsParent/>
      <PropsParent/>
      <Card/>
      <Card/>
      <Food/>
      <Footer/>
    </>
  )
}

export default App
