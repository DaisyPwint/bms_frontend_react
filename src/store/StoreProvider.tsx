import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '.';

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
}
