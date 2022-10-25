import { useState } from 'react';

import localeJSON from '../locale.json';

export const useTranslate = () => {
  const [language, setLanguage] = useState('kr');
  const locale: any = localeJSON;

  const t = (key: string) => {
    return locale[language][key];
  };

  return {
    setLanguage,
    t,
  };
};
