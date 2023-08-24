import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {Icon} from 'leaflet';
import axios from 'axios';
import 'leaflet/dist/leaflet.css'; 
import customIconUrl from './images/map-icon.svg'


function CovidMap() {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    async function fetchCountriesData() {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountriesData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchCountriesData();
  }, []);

  const customIcon = new Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png', 
    iconSize: [20, 30],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
  

  return (
    <div className="map-container mt-3">
      <h3>Country-Wise cases</h3>
      <MapContainer center={[0, 0]} zoom={2} style={{width:'700px', height: '500px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {countriesData.map(country => (
          <Marker
            key={country.country}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            <Popup>
              <div>
                <h3>{country.country}</h3>
                <p>Cases: {country.cases}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      </div>
  );
}

export default CovidMap;
