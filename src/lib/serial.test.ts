import { assert, describe, it } from 'vitest';

import { type SondeType, transformators, validators } from './serial';

const validations: { [type in SondeType]?: { pass: string[]; fail: string[] } } = {
  'RS41-{SG,SGP,SGM,NG}': {
    pass: ['V3741903', 'G0160004'],
    fail: ['03741903', 'A6130384', 'A5109283', 'B31690E3', 'V374190', 'V374 1903']
  },
  'RS92-SGP': {
    pass: ['V3741903', 'G0160004'],
    fail: ['03741903', 'A6130384', 'A5109283', 'B31690E3', 'V374190', 'V374 1903']
  },
  'DFM-09': {
    pass: ['092731', '381623', '283741'],
    fail: ['A92112', '91222', '1384', '0129321']
  },
  'DFM-17': {
    pass: ['12345-123456', '20162-037039', '20037039'],
    fail: ['1234-123456', '1234567', '123456789']
  },
  'iMet-{50,54}': {
    pass: ['12345678', '98172494'],
    fail: ['1234567', '123456789', 'A1838401']
  },
  'iMS-100': {
    pass: ['1234567', '1983646'],
    fail: ['128472', '128347498', '192E318']
  },
  'M{10,20}': {
    pass: ['123-4-56789', '123 4 56789', '123456789', '123-4 56789'],
    fail: ['123-4-567890', '123 E 56789']
  },
  'WxR-301': {
    pass: ['1234567890', '5928374592'],
    fail: ['123456789', 'A123456789']
  }
};

const transformations: {
  [type in SondeType]?: {
    before: string;
    after: string;
  }[];
} = {
  'DFM-17': [
    { before: '20162-037039', after: '20037039' },
    { before: '20143-193421', after: '20193421' },
    { before: '20384772', after: '20384772' }
  ],
  'M{10,20}': [
    { before: '123-4-56789', after: '123-4-56789' },
    { before: '123 4 56789', after: '123-4-56789' },
    { before: '123456789', after: '123-4-56789' },
    { before: '123 456789', after: '123-4-56789' },
    { before: '123 4-56789', after: '123-4-56789' }
  ]
};

describe('validations', () => {
  Object.entries(validations).forEach(([type, { pass, fail }]) => {
    describe(type, () => {
      pass.forEach((arg) =>
        it(`should match ${arg}`, () => assert(validators[type as SondeType]!.test(arg)))
      );
      fail.forEach((arg) =>
        it(`shouldn't match ${arg}`, () => assert(!validators[type as SondeType]!.test(arg)))
      );
    });
  });
});

describe('transformators', () => {
  Object.entries(transformations).forEach(([type, cases]) => {
    describe(type, () => {
      cases.forEach(({ before, after }) => {
        it(`should transform ${before} to ${after}`, () => {
          assert.equal(transformators[type as SondeType]!(before), after);
        });
      });
    });
  });
});
