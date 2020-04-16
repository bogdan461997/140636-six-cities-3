import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const ICON_CONFIG = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

const ICON_ACIVE_CONFIG = {
  iconUrl: `img/pin-active.svg`,
  iconSize: [30, 30]
};

const ZOOM = 12;
const CITY_GEOLOCATION = [52.38333, 4.9];

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this.markers = [];
  }

  render() {
    return (
      <div ref={this._mapRef} style={{width: `100%`, height: `100%`}}></div>
    );
  }

  componentDidMount() {
    this.initMap();
  }

  componentDidUpdate() {
    const {offers, activeOffers} = this.props;

    this.markers.forEach((marker) => this.map.removeLayer(marker));

    this.addPlacesToMap(offers, ICON_CONFIG);
    this.addPlacesToMap(activeOffers, ICON_ACIVE_CONFIG);
  }

  initMap() {
    this.map = leaflet.map(this._mapRef.current, {
      center: CITY_GEOLOCATION,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(CITY_GEOLOCATION, ZOOM);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);


    this.addPlacesToMap(this.props.offers, ICON_CONFIG);
    this.addPlacesToMap(this.props.activeOffers, ICON_ACIVE_CONFIG);
  }

  addPlacesToMap(places = [], iconConfig) {
    places.forEach((place) => {
      if (place.location && place.location.latitude && place.location.longitude) {
        const marker = leaflet
          .marker([place.location.latitude, place.location.longitude], {icon: leaflet.icon(iconConfig)})
          .addTo(this.map);

        this.markers.push(marker);
      }
    });
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOffers: PropTypes.array
};

export default Map;
