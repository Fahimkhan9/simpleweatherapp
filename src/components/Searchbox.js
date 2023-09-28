import axios from 'axios'
import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

function Searchbox({ setWeatherresult, setIsloading, isloading }) {
  const [input, setInput] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [tempunit, setTempunit] = useState()
  const handleSearchSubmit = async (e) => {
    e.preventDefault()
    if (!tempunit) {
      alert('Please select a temperature unit')
    }
    setIsloading(true)
    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=6K3P2J82HW2MMNFXWGC2KTNSA`)

      .then(result => {
        setLatitude(result.data.latitude)
        setLongitude(result.data.longitude)
        setWeatherresult(null)
        getWeatherData()
        setInput('')

      })


  }
  const getWeatherData = async () => {

    axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?unitGroup=${tempunit}&key=6K3P2J82HW2MMNFXWGC2KTNSA`)

      .then(result => {
        setWeatherresult(result.data)

        setIsloading(false)
      })
      .catch(err => {
        if (err.response.status == 400) {
          alert('Failed to Load Data')
        }
        alert(err.message)
        setIsloading(false)
      })



  }
  return (
    <Container
      style={{ width: "50rem", padding: "3rem", textAlign: 'center' }}
    >
      <Form onSubmit={handleSearchSubmit} >
        <Form.Group className="mb-3" controlId="search">

          <Form.Control required onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter City Name" />

        </Form.Group>
        <Form.Select required onChange={(e) => setTempunit(e.target.value)} >
          <option>Select Temperature Unit</option>
          <option value="uk">Celcius</option>
          <option value="us">Fahreinheit</option>

        </Form.Select>
        <Button disabled={isloading} className='mt-2 ' style={{ width: '200px' }} variant="dark" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  )
}

export default Searchbox