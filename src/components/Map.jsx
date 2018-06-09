import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => <div>{text}</div>;

export default class Map extends Component {
  static defaultProps = {
    center: {
      lat: 2.7580805,
      lng: 101.7231082
    },
    zoom: 15
  }
  render() {
    return (<div className='google-map'>
      <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
        <AnyReactComponent lat={2.7594198} lng={101.7295888}/>
      </GoogleMapReact>
    </div>)
  }
}
