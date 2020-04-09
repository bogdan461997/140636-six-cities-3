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

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
    this.map = null;
  }

  render() {
    return (
      <div ref={this._mapRef} style={{width: `100%`, height: `100%`}}></div>
    );
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const zoom = 12;
    this.map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: 12,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this.map);

    this.addPlacesToMap(this.props.offers, ICON_CONFIG);
    this.addPlacesToMap(this.props.activeOffers, ICON_ACIVE_CONFIG);
  }


  addPlacesToMap(places = [], iconConfig) {
    places.forEach((place) => {
      if (place.location && place.location.latitude && place.location.longitude) {
        leaflet
          .marker([place.location.latitude, place.location.longitude], {icon: leaflet.icon(iconConfig)})
          .addTo(this.map);
      }
    });
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
  activeOffers: PropTypes.array
};

export default Map;
