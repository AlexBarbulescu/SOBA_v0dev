'use client'

import { useEffect } from 'react'

export default function BootstrapClient() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((bootstrap) => {
        // Bootstrap's JavaScript loaded and initialized
        console.log('Bootstrap JavaScript loaded');
      })
      .catch((err) => {
        console.error('Error loading Bootstrap JavaScript', err);
      });
  }, [])

  return null
}

