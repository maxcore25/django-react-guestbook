import React from 'react';

export default function Note({ title, content, onclick }) {
  return (
    <div className='note'>
      <div className='note-header'>
        <div>
          <p className='note-title'>{title}</p>
        </div>
        <div>
          <a href='/#' className='close' onClick={onclick}>
            X
          </a>
        </div>
      </div>
      <div className='note-content'>
        <p>{content}</p>
      </div>
    </div>
  );
}
