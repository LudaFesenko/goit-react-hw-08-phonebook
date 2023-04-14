import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import AppBar from 'components/AppBar';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <CircularProgress
            sx={{ position: 'fixed', top: '50%', left: '50%' }}
          />
        }
      >
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
