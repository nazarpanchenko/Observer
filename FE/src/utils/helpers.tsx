import React, { lazy, ReactElement, Suspense } from 'react';

import { useLoader } from '../hooks';

const lazyLoadRoute = (componentName: string): ReactElement => {
  const loader = useLoader();

  const Route = lazy(
    () =>
      import(
        `../containers/${
          componentName[0].toLowerCase() + componentName.slice(1)
        }/${componentName}`
      )
  );

  return (
    <Suspense fallback={loader}>
      <Route />
    </Suspense>
  );
};

export { lazyLoadRoute };
