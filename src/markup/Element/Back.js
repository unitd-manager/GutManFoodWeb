import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const BackRow = ({ backLink = "/", style = {} }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        ...style,
      }}
    >
      <Link
        to={backLink}
        style={{
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
          color: '#333',
        }}
      >
        <AiOutlineArrowLeft size={24} style={{ marginRight: '8px' }} />
      </Link>
    </div>
  );
};

export default BackRow;
