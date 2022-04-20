import { Icon } from 'leaflet'
import markerIconPng from 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/leaflet.css'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
    const position = [21.42421767683566, 91.97971921966322]

    return (
        <MapContainer
            center={position}
            zoom={17}
            scrollWheelZoom={false}
            style={{ width: '80%', height: '83%', marginLeft: 'auto', border: 'none' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
                position={position}
                icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}
            >
                <Popup>Cox's Bazar</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
