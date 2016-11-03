import React from 'react';

const shell = ({children}) =>
  <div>
      <div></div>
      <div></div>
      <div id="content" >
        {React.cloneElement(children)}
      </div>
  </div>

export default shell;
