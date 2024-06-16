import React, { createRef, forwardRef, memo, useImperativeHandle } from 'react';

import { useDispatch, useStore } from 'react-redux';

import { RootState } from '@store/all-reducers';

type ActionBase<T = undefined> = T extends undefined
  ? {
    type: string;
  }
  : {
    type: string;
    payload: T;
  };

const RXStoreComponent = forwardRef((_, ref) => {
  // state
  const dispatchRx = useDispatch();

  const { getState: store } = useStore<RootState>();

  // effect
  useImperativeHandle(
    ref,
    () => ({
      dispatch: (action: ActionBase) => {
        dispatchRx(action);
      },
      getState: (state: keyof RootState) => {
        return store()[state];
      },
    }),
    [dispatchRx, store],
  );

  return null;
});

type RXStoreType = {
  dispatch: (action: ActionBase) => void;
  getState: <K extends keyof RootState>(selector: K) => RootState[K];
};

const storeRef = createRef<RXStoreType>();

export const RXStore = memo(
  () => <RXStoreComponent ref={storeRef} />,
  () => true,
);

export function dispatch<T = undefined>(action: ActionBase<T>) {
  if (storeRef.current) {
    storeRef.current.dispatch(action);
  }
}

export function getState<K extends keyof RootState>(selector: K): RootState[K] {
  if (storeRef.current) {
    return storeRef.current.getState(selector);
  }

  return {} as RootState[K];
}
