import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

const ICON_CONFIG = {
  iconUrl: `img/pin.svg`,
  iconSize: [30, 30]
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this._mapRef = createRef();
  }

  render() {
    return (
      <section ref={this._mapRef} className="cities__map map">
      </section>
    );
  }

  componentDidMount() {
    const city = [52.38333, 4.9];

    const icon = leaflet.icon(ICON_CONFIG);

    const zoom = 12;
    const map = leaflet.map(this._mapRef.current, {
      center: city,
      zoom: 12,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(map);

    this.props.offers.forEach((offer) => {
      if (offer.location && offer.location.latitude && offer.location.longitude) {
        leaflet
        .marker([offer.location.latitude, offer.location.longitude], {icon})
        .addTo(map);
      }
    });
  }
}

Map.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default Map;
