import React from 'react';

const Wrapper = function Wrapper({ children }) {

  return(
    <div className="flex justify-center items-center h-100">
      {children}
    </div>
  )
}

export default Wrapper;
