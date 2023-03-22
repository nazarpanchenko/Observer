import React, { Component, ReactElement, lazy, Suspense } from 'react';

import { Loader } from '../components';

class ErrorBoundary extends Component<
  { fallback: ReactElement; children: ReactElement },
  { hasError: boolean; error: any; componentStack: any }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
      error: {},
      componentStack: {},
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}

const lazyLoadRoute = (componentName: string): ReactElement => {
  const Route = lazy(
    () =>
      import(
        `../containers/${
          componentName[0].toLowerCase() + componentName.slice(1)
        }/${componentName}`
      )
  );

  return (
    <Suspense fallback={<Loader />}>
      <Route />
    </Suspense>
  );
};

export { ErrorBoundary, lazyLoadRoute };
