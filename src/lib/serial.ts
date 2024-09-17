export type SondeType =
  | 'RS41-{SG,SGP,SGM,NG}'
  | 'RS92-SGP'
  | 'DFM-09'
  | 'DFM-17'
  | 'iMet-{50,54}'
  | 'iMS-100'
  | 'M{10,20}'
  | 'WxR-301';

export type Sonde = { id: string; type: SondeType; name: string };

export const types: Sonde[] = [
  {
    id: 'rs41',
    type: 'RS41-{SG,SGP,SGM,NG}',
    name: 'RS41-SG/SGP/SGM'
  },
  {
    id: 'rs41-ng',
    type: 'RS41-{SG,SGP,SGM,NG}',
    name: 'RS41-NG'
  },
  {
    id: 'rs92',
    type: 'RS92-SGP',
    name: 'RS92-SGP'
  },
  {
    id: 'dfm-09',
    type: 'DFM-09',
    name: 'DFM-09'
  },
  {
    id: 'dfm-17',
    type: 'DFM-17',
    name: 'DFM-17'
  },
  {
    id: 'm10',
    type: 'M{10,20}',
    name: 'M10'
  },
  {
    id: 'm20',
    type: 'M{10,20}',
    name: 'M20'
  },
  {
    id: 'imet-50',
    type: 'iMet-{50,54}',
    name: 'iMet-50'
  },
  {
    id: 'imet-54',
    type: 'iMet-{50,54}',
    name: 'iMet-54'
  },
  {
    id: 'ims-100',
    type: 'iMS-100',
    name: 'iMS-100'
  },
  {
    id: 'wxr-301',
    type: 'WxR-301',
    name: 'WxR-301'
  }
];

export const validators: { [type in SondeType]?: RegExp } = {
  'RS41-{SG,SGP,SGM,NG}': /^[A-Z][0-5][0-9][1-7][0-9]{4}$/,
  'RS92-SGP': /^[A-Z][0-5][0-9][1-7][0-9]{4}$/,
  'DFM-09': /^[0-9]{6}$/,
  'DFM-17': /^([0-9]{5}-[0-9]{6}|[0-9]{8})$/,
  'iMet-{50,54}': /^[0-9]{8}$/,
  'iMS-100': /^[0-9]{7}$/,
  'M{10,20}': /^[0-9]{3}[- ]?[0-9][- ]?[0-9]{5}$|^[0-9]{8}$/,
  'WxR-301': /^[0-9]{10}$/
};

export const transformators: { [type in SondeType]?: (arg: string) => string } = {
  'DFM-17': (arg: string) => (arg.length > 8 ? `${arg.slice(0, 2)}${arg.slice(6, 12)}` : arg),
  'M{10,20}': (arg: string) => {
    const raw = arg.replace(/[^0-9.]/g, '');
    return `${raw.slice(0, 3)}-${raw.slice(3, 4)}-${raw.slice(4, 9)}`;
  }
};
