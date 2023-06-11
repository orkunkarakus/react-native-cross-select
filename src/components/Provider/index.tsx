import React from 'react';
import { PortalProvider } from '@gorhom/portal';
import type { ReactNode } from 'react';

const Provider = ({ children }:{children:ReactNode}) => (
  <PortalProvider>
    {children}
  </PortalProvider>

);

Provider.displayName = 'Provider';
export default Provider;
