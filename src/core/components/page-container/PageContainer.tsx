import {Outlet} from 'react-router';
import './PageContainer.sass';

export const PageContainer = () => {
  return (
    <div className="page-container">
      <Outlet />
    </div>
  );
};
