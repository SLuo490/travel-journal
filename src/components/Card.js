import '../style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
  return (
    <div className='card-container'>
      <img
        className='location-img'
        src={props.item.imageUrl}
        alt='pic of place'
      />
      <div className='info'>
        <div className='location'>
          <FontAwesomeIcon className='fa-location-icon' icon={faLocationDot} />
          <span className='location-country'>{props.item.location}</span>
          <a href={props.item.googleMapsUrl}>View on Google Map</a>
        </div>
        <div className='location-info'>
          <h1 className='location-title'>{props.item.title}</h1>
          <h3 className='date'>
            <span className='startDate'>{props.item.startDate}</span>-
            <span className='endDate'>{props.item.endDate}</span>
          </h3>
          <p className='description'>{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}

/*
    title: 'Mount Fuji',
    location: 'Japan',
    googleMapsUrl: 'https://goo.gl/maps/1DGM5WrWnATgkSNB8',
    startDate: '12 Jan, 2021',
    endDate: '24 Jan, 2021',
    description:
      'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    imageUrl: 'https://source.unsplash.com/WLxQvbMyfas',
*/
