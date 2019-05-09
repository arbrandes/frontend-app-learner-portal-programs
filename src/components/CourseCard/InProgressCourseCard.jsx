import React from 'react';
import PropTypes from 'prop-types';

import BaseCourseCard from './BaseCourseCard';

const InProgressCourseCard = (props) => {
  const renderButtonLink = () => (
    <a className="btn btn-outline-primary btn-course-link btn-xs-block" href={props.linkToCourse}>Continue Learning</a>
  );

  return (
    <BaseCourseCard buttonLink={renderButtonLink()} {...props} />
  );
};

InProgressCourseCard.propTypes = {
  linkToCourse: PropTypes.string.isRequired,
};

export default InProgressCourseCard;