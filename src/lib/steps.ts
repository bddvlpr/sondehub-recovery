import type { Component } from 'svelte';

import DetailsStep from './components/steps/details.svelte';
import IntroStep from './components/steps/intro.svelte';
import LocationStep from './components/steps/location.svelte';
import SerialStep from './components/steps/serial.svelte';
import TypeStep from './components/steps/type.svelte';
import { type Sonde, validators } from './serial';

export const recoverySteps: {
  key: string;
  component: Component<{ ctx: Context }>;
  locked?: (ctx: Context) => boolean;
}[] = [
  {
    key: 'intro',
    component: IntroStep
  },
  {
    key: 'type',
    component: TypeStep,
    locked: ({ sonde }) => !sonde
  },
  {
    key: 'serial',
    component: SerialStep,
    locked: ({ serial, sonde }) => !serial || !validators[sonde!.type]?.test(serial)
  },
  {
    key: 'location',
    component: LocationStep,
    locked: ({ location }) => !location
  },
  {
    key: 'details',
    component: DetailsStep
  }
];

export type Context = {
  sonde?: Sonde;
  serial?: string;
  location?: [number, number];
};
