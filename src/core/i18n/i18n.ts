import en from './en.json';

let dict: any = {};

const flatten = (json: any, result = {}, prefix?: string) => {
  const innerResult: any = result;
  Object.keys(json)
    .forEach((key) => {
      const resKey = prefix ? `${prefix}.${key}` : key;
      const value = json[key];

      if (typeof value === 'string') {
        innerResult[resKey] = value;
      } else if (typeof value === 'object') {
        flatten(value, innerResult, resKey);
      }
    });

  return result;
};

export const loadDict = () => {
  dict = flatten(en);
};

export const i18n = (key: string, ...rest: string[]) => {
  let value = dict[key];

  if (!value) {
    return '-';
  }

  value = rest.reduce((val: string, param: any) => val.replace('%s', param), value);

  return value.replace(new RegExp('%s', 'g'), '');
};
