import React from 'react';
import { createPortal } from 'react-dom';

import { Loader } from '../components';

const useLoader = (): React.ReactPortal => {
  const loaderNode = document.getElementById('loader') as HTMLElement;
  const loaderPortal = createPortal(<Loader />, loaderNode);

  return loaderPortal;
};

export default useLoader;
