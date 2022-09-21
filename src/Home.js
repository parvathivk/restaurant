import React from 'react'
import {useState,useEffect} from 'react'
import {Row,Col} from 'react-bootstrap'
import RestaurantCard from './RestaurantCard'
import {listRestaurants} from './actions/restaurantAction'
import {useDispatch,useSelector} from 'react-redux'

function Home() {
    // const [restaurants,setRestaurants]=useState([])

    const dispatch= useDispatch()

    const restaurantData=useSelector(state=>state.restaurantReducer)

    const {restaurants}=restaurantData

    useEffect(() => {

      dispatch(listRestaurants())
      // async function fetchData(){
      //   await fetch('/restaurants.json')
      //   .then((data)=>data.json())
      //   .then((res)=>setRestaurants(res.restaurants))
      // }
      // fetchData()
    }, [])
    // console.log("My data is",restaurants);
  return (
    <Row>
        {restaurants.map(item=>(
            <Col sm={12} md={8} lg={6} xl={3}>
                <RestaurantCard item={item}/>
            </Col>
        ))}
    </Row>
  )
}

export default Home