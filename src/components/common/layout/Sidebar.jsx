import React from 'react';
import PropTypes from 'prop-types';

const Sidebar = props => (
  <aside className="col offset-lg-1">
    {props.children}
  </aside>
);

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sidebar;