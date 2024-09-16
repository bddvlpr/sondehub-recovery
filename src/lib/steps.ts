import type { Component } from 'svelte';

import DetailsStep from './components/steps/details.svelte';
import IntroStep from './components/steps/intro.svelte';
import LocationStep from './components/steps/location.svelte';
import SerialStep from './components/steps/serial.svelte';
import TypeStep from './components/steps/type.svelte';

export const RECOVERY_STEPS: {
  title: string;
  component: Component<{ ctx: Context }>;
  locked?: (ctx: Context) => boolean;
}[] = [
  {
    title: 'Intro',
    component: IntroStep
  },
  {
    title: 'Type',
    component: TypeStep,
    locked: ({ type }) => !type
  },
  {
    title: 'Serial',
    component: SerialStep,
    locked: ({ serial }) => !serial
  },
  {
    title: 'Location',
    component: LocationStep,
    locked: ({ location }) => !location
  },
  {
    title: 'Details',
    component: DetailsStep
  }
];

export type Context = {
  type?: string;
  serial?: string;
  location?: [number, number];
};
