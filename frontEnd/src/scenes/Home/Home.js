import React from 'react'
import SwipeDrawer from '../../components/common/Header/SwipeDrawer'
import Map from '../../components/Map/map'
import RouteDetails from '../routeDetails/routeDetails'


const Home = () => {
  return (
    <div>
    <SwipeDrawer/>
    <RouteDetails/>
    <Map/>
    </div>
  )
}

export default Home