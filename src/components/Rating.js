import React from 'react';
import FullStar from './FullStar';
import HalfStar from './HalfStar';
import EmptyStar from './EmptyStar';

const Rating = ({ rating = 0 }) => {
    const ceil = Math.ceil(rating)
    const floor = Math.floor(rating)
    const fractional = rating - floor

    const renderStars = [...Array(5)].map((star, index) =>  {
      if (floor >= index + 1) {
        return <FullStar key={index} />
      } else if (fractional >= 0.5 && ceil === index + 1) {
        return <HalfStar key={index} />
      }

      return <EmptyStar key={index} />
    });

    return (
      <div className="rating d-inline">
        {renderStars}
      </div>
    );
}

export default Rating;
