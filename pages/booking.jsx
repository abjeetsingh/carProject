import React, {useState, useRef} from 'react'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars'
import { GoogleMap, useJsApiLoader, Autocomplete, DirectionsRenderer } from '@react-google-maps/api'
function booking() {

  const center = {
  lat: -3.745,
  lng: -38.523
};
  const  lib = ['places']
  const isLoaded  = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCm98XhplYJedgz4TeoH152lKXPqoe7L1s",
    libraries: lib
  })


  const containerStyle = {
  width: '80vw',
  height: '70vh'
};

  const [Name, setName] = useState(" ")
  const [Phone, setPhone] = useState(0)
  const [Email, setEmail] = useState(" ")
  const [Car, setCar] = useState("")
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const pick = useRef()
  /** @type React.MutableRefObject<HTMLInputElement> */
  const drop = useRef()

  const [Direction, setDirection] = useState(0)
  const [DirectionResponse, setDirectionResponse] = useState(null)


  async function calculateRoute(e){
    e.preventDefault();
    if(pick.current.value==="" || drop.current.value === "" || !isLoaded.isLoaded)
      return
    else{
      const dirser = new google.maps.DirectionsService
      const direction = await dirser.route({
        origin:pick.current.value,
        destination:drop.current.value,
        travelMode: google.maps.TravelMode.DRIVING
      })
      setDirectionResponse(direction)
      setDirection(direction.routes[0].legs[0].distance.text)
    }
  }

  if(isLoaded.isLoaded) 
  return (
    <div className = "px-12">
      <div>
        <h1 className = " text-center font-bold text-2xl text-amber-600">Booking Form</h1>
      </div>
  
      <form>
      <div className="space-y-12">
        

        <div className=" pb-12">

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 p-1.5 text-amber-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange = {(e)=>{setName(e.target.value)}}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="Phone" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="Phone"
                  id="Phone"
                  autoComplete="family-name"
                  onChange = {(e)=>{setPhone(e.target.value)}}
                  className="block w-full rounded-md border-0 p-1.5 text-amber-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange = {(e)=>{setEmail(e.target.value)}}
                  className="block w-full rounded-md border-0 p-1.5 text-amber-600 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="CarSelect" className="block text-sm font-medium leading-6 text-gray-900">
                Vehical Type
              </label>
              <div className="my-2">
                <select
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  onChange = {(e)=>{setCar(e.target.value)}}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Lorem, ipsum.</option>
                  <option>Lorem.</option>
                  <option>Lorem, ipsum.</option>
                </select>
              </div>
            </div>
          </div>

          <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Pick Up
              </label>
              <div className="my-2">
                <Autocomplete>
                    <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    ref={pick}
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </Autocomplete>
              </div>
          </div>
          <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Drop off
              </label>
              <div className="my-2">
                <Autocomplete>
                    <input
                    id="drop"
                    name="drop"
                    type="text"
                    ref = {drop}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                  />
                </Autocomplete>
              </div>
          </div>
          <button className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 "
          onClick = {(e)=>calculateRoute(e)}
          > Calculate Route</button>
          <p>{`Distance to cover ${Direction}`}</p>
        </div>

      </div>

      
      </form>
  
      <div className=" flex justify-center ">
        {isLoaded.isLoaded && <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={16}
          options={{
            zoomControl:false,
            streetViewControl:false,
            mapTypeControl: false,
            fullscreenControl:false
          }}
        >
          {DirectionResponse && (<DirectionsRenderer directions={DirectionResponse}/>)}
        </GoogleMap>}
      </div>
      <div className="my-6 flex items-center gap-x-6 justify-center">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 "
        >
          Book Now
        </button>
      </div>
    </div>
  )

  else{
    return <> <div>heleo</div> </>
  }
}

export default booking




