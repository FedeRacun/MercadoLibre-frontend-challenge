import {SearchBox} from '../components/search-box/SearchBox';

import './Header.sass';

export const Header = () => {
  return (
    <header className="nav-header">
      <SearchBox />
      {/* <[example]-nav-header/> */}
    </header>
  );
};
