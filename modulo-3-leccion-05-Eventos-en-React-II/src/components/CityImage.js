import React from 'react';

class CityImage extends React.Component {
    constructor(props) {
        super(props);
        this.images = {
            Buenosaires:
                'https://consumocuidado.tv/wp-content/uploads/2020/02/Ciudades-mas-caras-de-America-Latina-Buenos-Aires-1280x640.jpg',
            Sydney:
                'https://www.australia.com/content/australia/en/places/sydney-and-surrounds/guide-to-sydney/jcr:content/hero/desktop.adapt.1920.high.jpg',
            Praga:
                'https://cdn1.guias-viajar.com/chequia/wp-content/uploads/2012/04/Praga-plaza-Ciudad-Vieja-FB-008.jpg',
            Boston:
                'https://media.nbcboston.com/2019/09/011120-warm-weather-boston.jpg?crop=0px%2C68px%2C2048px%2C1152px&resize=1200%2C675',
            Tokio:
                'https://stillmed.olympic.org/media/Images/OlympicOrg/News/2020/03/24/2020-03-24-tokyo-thumbnail-01.jpg',
        };
    }

    render() {
        return <img src={this.images[this.props.city]} alt="" />;
    }
}

export default CityImage;
