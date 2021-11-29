import './LoaderSpinner.sass';

export const SpinerComponent = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
      <span>Cargando...</span>
    </div>
  );
};
