'use client';

import { ReactNode } from 'react';
import { store } from '@/appstore/store';
import { Provider } from 'react-redux';

type Props = {
  children: ReactNode;
};

const StateProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StateProvider;
