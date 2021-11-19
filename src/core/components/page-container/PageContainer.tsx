import {Outlet} from 'react-router';
import './PageContainer.sass';

export const PageContainer = () => {
  return (
    <div style={{backgroundColor: '#ebebeb', padding: '3rem'}}>
      <Outlet />
    </div>
  );
};
