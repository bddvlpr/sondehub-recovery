import type { Component } from 'svelte';

import DetailsStep from './components/steps/details.svelte';
import IntroStep from './components/steps/intro.svelte';
import LocationStep from './components/steps/location.svelte';
import SerialStep from './components/steps/serial.svelte';
import TypeStep from './components/steps/type.svelte';

export const RECOVERY_STEPS: {
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
    locked: ({ type }) => !type
  },
  {
    key: 'serial',
    component: SerialStep,
    locked: ({ serial }) => !serial
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
  type?: string;
  serial?: string;
  location?: [number, number];
};
