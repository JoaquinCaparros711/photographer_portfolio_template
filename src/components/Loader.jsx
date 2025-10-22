import { forwardRef } from 'react';

const Loader = forwardRef(({ progress }, ref) => (
  <div className="loader df aic jcc" ref={ref}>
    <div className="loader__inner">
      <h1 className="loader__title">Loading</h1>
      <h2 className="loader--text">{progress}%</h2>
    </div>
  </div>
));

Loader.displayName = 'Loader';

export default Loader;
