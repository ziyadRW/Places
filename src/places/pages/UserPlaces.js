import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Burj Almamlaka',
    description: 'Tallest Building in saudi !',
    imageUrl:
      'https://vid.alarabiya.net/images/2022/12/27/637032a5-4c37-44ec-bbf0-f132d927832d/637032a5-4c37-44ec-bbf0-f132d927832d_16x9_1200x676.jpeg?width=801&format=jpg',
    address: 'King Abdullah Rd, King Fahd, Riyadh 12271',
    location: {
      lat: 24.7311382,
      lng: 46.6700814
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Burj Almamlaka',
    description: 'Tallest Building in saudi !',
    imageUrl:
      'https://vid.alarabiya.net/images/2022/12/27/637032a5-4c37-44ec-bbf0-f132d927832d/637032a5-4c37-44ec-bbf0-f132d927832d_16x9_1200x676.jpeg?width=801&format=jpg',
    address: 'King Abdullah Rd, King Fahd, Riyadh 12271',
    location: {
      lat: 24.7311382,
      lng: 46.6700814
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
