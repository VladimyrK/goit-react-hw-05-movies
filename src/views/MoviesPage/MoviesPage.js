import { Outlet } from 'react-router';

import PageHeading from '../../components/PageHeading';

export default function MoviesPage() {
  return (
    <>
      <PageHeading text="Movies" />;
      <Outlet />
    </>
  );
}
