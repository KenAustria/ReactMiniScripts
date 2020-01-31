import React from 'react';

// Link is a link with a callback.
// onClick() is a callback to invoke when the link is clicked.
const Link = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    disabled={active}
    style={{
      marginLeft: '4px'
    }}
  >
    {children}
  </button>
)

export default Link;