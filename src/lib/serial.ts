export type SondeType =
  | 'RS41-{SG,SGP,SGM,NG}'
  | 'RS92-SGP'
  | 'DFM-09'
  | 'DFM-17'
  | 'iMet-{50,54}'
  | 'iMS-100'
  | 'LMS6'
  | 'M{10,20}'
  | 'WxR-301';

export type Sonde = { id: string; type: SondeType; name: string };

export const types: Sonde[] = [
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
    id: 'imet-1',
    type: 'iMet-{50,54}', // TODO: !!!
    name: 'iMet-1'
  },
  {
    id: 'imet-4',
    type: 'iMet-{50,54}', // TODO: !!!
    name: 'iMet-4'
  },
  {
    id: 'imet-54',
    type: 'iMet-{50,54}',
    name: 'iMet-54'
  },
  {
    id: 'lms6',
    type: 'iMet-{50,54}', // TODO: !!!
    name: 'LMS6'
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
    id: 'rs41-sge',
    type: 'RS41-{SG,SGP,SGM,NG}',
    name: 'RS41-SGE'
  },
  {
    id: 'rs41-sg',
    type: 'RS41-{SG,SGP,SGM,NG}',
    name: 'RS41-SG'
  },
  {
    id: 'rs92-sgp',
    type: 'RS92-SGP',
    name: 'RS92-SGP'
  },
  {
    id: 'wxr301',
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
  LMS6: /^[0-9]{7}$/,
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
