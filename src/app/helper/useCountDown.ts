import { useEffect, useRef, useState } from 'react';
import { AppState } from 'react-native';

import moment from 'dayjs';

export const useCountDown = (start: number, startCountDown: boolean) => {
  const now = moment().valueOf();

  const [timeCountDown, setCountDown] = useState<number>(start - now);

  const [timeInactive, setTimeInactive] = useState<{
    isSet: boolean;
    timeOut: number;
  }>({
    isSet: false,
    timeOut: 0,
  });

  const intervalRef = useRef<any>();

  const _tempTime = useRef<any>(0);

  const _onCountDown = () => {
    setCountDown(_time => {
      const newTime = _time && _time - 1000 - _tempTime.current;

      _tempTime.current = 0;

      if (newTime <= 0) {
        clearInterval(intervalRef.current);
      }

      return newTime;
    });
  };

  useEffect(() => {
    const appStateListener = AppState.addEventListener(
      'change',
      nextAppState => {
        setTimeInactive(_timeState => {
          if (nextAppState === 'active') {
            return {
              ..._timeState,
              isSet: true,
            };
          }

          if (nextAppState === 'inactive') {
            return {
              isSet: false,
              timeOut: moment().valueOf(),
            };
          }

          return _timeState;
        });

        if (nextAppState !== 'active') {
          clearInterval(intervalRef.current);
        }
      },
    );

    return () => {
      appStateListener?.remove();
    };
  }, []);

  useEffect(() => {
    if (timeInactive.isSet && timeInactive.timeOut) {
      _tempTime.current = moment().valueOf() - timeInactive.timeOut;
    }
  }, [timeInactive]);

  useEffect(() => {
    if (startCountDown) {
      intervalRef.current = setInterval(_onCountDown, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [start, now, startCountDown]);

  return timeCountDown;
};
