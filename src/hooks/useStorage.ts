import { useCallback, useMemo } from 'react';

type TypeSessionType = 'local' | 'session';
type OptsType = {
  type: TypeSessionType;
  encrypt: boolean;
};

const defaultOpts: OptsType = {
  type: 'local',
  encrypt: true,
};

const resolveProvider: { session: Storage; local: Storage } = {
  local: window.localStorage,
  session: window.sessionStorage,
};

export const useStorage = <T>(key: string, opts?: Partial<OptsType>) => {
  const options = useMemo(() => {
    return {
      ...defaultOpts,
      ...opts,
    };
  }, [opts]);

  const setItem = useCallback(
    (value: T) => {
      try {
        let val;
        if (typeof value === 'object') {
          val = JSON.stringify(value);
        } else {
          val = value;
        }

        if (options.encrypt) {
          // encrypt value
        }

        resolveProvider[options.type].setItem(key, val as string);

        return true;
      } catch (e) {
        console.log(e);
        return false;
      }
    },
    [key, options],
  );

  const getItem = useCallback(() => {
    const value = resolveProvider[options.type].getItem(key) as
      | undefined
      | string
      | T;

    if (options.encrypt) {
      // encrypt value
    }

    if (!value) return null;

    try {
      return JSON.parse(value as string) as T | undefined;
    } catch (e) {
      return value as T | undefined;
    }
  }, [key, options]);

  const removeItem = useCallback(() => {
    try {
      resolveProvider[options.type].removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }, [key, options]);

  return useMemo(() => {
    return {
      setItem,
      getItem,
      removeItem,
    };
  }, [setItem, getItem, removeItem]);
};
