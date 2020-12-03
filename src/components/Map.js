//import GoogleMapReact from 'google-map-react';

const Map = ({ center, zoom }) => {
  return(
    <div className="map">
      <h1>Map Here</h1>
    </div>
  )
}

Map.defaultProps = {
  center: {
    latitude: 42.3265,
    longitude: -122.8756
  },
  zoom: 6
}

export default Map

/**
<GoogleMapReact
  bootstrapURLKeys={{ key: 'API KEY HERE' }}
  defaultCenter={ center }
  defaultZoom={ zoom }
>
</GoogleMapReact>
 */