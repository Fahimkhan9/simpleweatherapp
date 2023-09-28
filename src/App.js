import { useState } from "react";
import Datacard from "./components/Datacard";
import Nav from "./components/Nav";
import Searchbox from "./components/Searchbox";
import { Container, Row } from "react-bootstrap";


function App() {
  const [weatherresult, setWeatherresult] = useState(null)
  const [isloading, setIsloading] = useState(false)

  return (
    <div

    >
      <Nav />
      <Searchbox isloading={isloading} setIsloading={setIsloading} setWeatherresult={setWeatherresult} />

      {
        isloading && (
          <p>loading</p>
        )
      }
      {
        weatherresult && (
          <>
            <Container>
              <Row

              >
                <Datacard title='Current Weather conditions' data={weatherresult.currentConditions.conditions} />
                <Datacard title='Temperature' data={weatherresult.currentConditions.temp} />
                <Datacard title='Humidity' data={weatherresult.currentConditions.humidity} />
                <Datacard title='Wind Speed' data={weatherresult.currentConditions.windspeed} />
              </Row>

            </Container>

          </>



        )
      }
    </div>
  );
}

export default App;
