import React from 'react';
import BeautyPlace from './BeautyPlace';
import { Table } from 'reactstrap';

const BeautyPlacesList = (props) => {
  const beautyPlaces = props.store.getState().beautyPlaces.map(
    (beautyPlace, index) => (<BeautyPlace key={index} beautyPlace={beautyPlace} />)
  );

  return (
    <Table striped>
      <tbody>
        {beautyPlaces}
      </tbody>
    </Table>
  );
}

export default BeautyPlacesList;
