import React, { lazy, Suspense } from 'react';

const lazyLoadRoute = (component: string) => {
  const Route = lazy(
    () =>
      import(`../containers/${component.toLowerCase()}/${component}`)
  );

  return (
    <Suspense fallback="Loading...">
      <Route />
    </Suspense>
  );
};

export default lazyLoadRoute;
