import React from 'react';
import { PortalProvider } from '@gorhom/portal';
import type { ReactNode } from 'react';
import { ClickOutsideProvider } from 'react-native-click-outside';

const Provider = ({ children }:{children:ReactNode}) => (
  <ClickOutsideProvider>
    <PortalProvider>
      {children}
    </PortalProvider>
  </ClickOutsideProvider>

);

Provider.displayName = 'Provider';
export default Provider;
