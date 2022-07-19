import * as languages from 'translates';
import { useCallback, useMemo } from 'react';

export default function useTranslation(lang: 'es' | 'en' = 'es') {
  const templateLang = useMemo(() => {
    return languages[lang];
  }, [lang]);

  const t = useCallback(
    (key: string, defaultValue?: string) => {

      let output: string | object = '';
      const keyspoint = key.split('.');

      if (keyspoint.length) {
        keyspoint.forEach((text) => {
          if (output && typeof output === 'object') {
            // @ts-ignore
            output = output[text] ?? '';
          } else {
            // @ts-ignore
            output = templateLang[text] ?? '';
          }
        });
      }

      return output as string ?? defaultValue ?? key;
    },
    [templateLang]
  );

  return { lang, t };
}
