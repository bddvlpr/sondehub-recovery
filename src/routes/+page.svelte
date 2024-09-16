<script lang="ts">
  import { t } from '$lib/i18n';
  import { type Context, RECOVERY_STEPS } from '$lib/steps';
  import ChevronLeft from 'lucide-svelte/icons/chevron-left';
  import ChevronRight from 'lucide-svelte/icons/chevron-right';

  let ctx: Context = $state({});
  let stepIndex = $state(0);

  let currentStep = $derived(RECOVERY_STEPS[stepIndex]);
</script>

<div class="m-5 rounded-lg bg-base-200 p-5">
  <div class="flex w-full justify-center">
    <ul class="steps">
      {#each RECOVERY_STEPS as { key }, index}
        <li class="step step-primary" class:step-primary={stepIndex >= index}>
          {$t(`steps.${key}.id`)}
        </li>
      {/each}
    </ul>
  </div>

  <div class="my-2">
    <currentStep.component bind:ctx />
  </div>

  <div class="flex flex-col gap-3 md:flex-row">
    <button
      class="btn btn-neutral md:mr-auto"
      disabled={stepIndex <= 0}
      onclick={() => stepIndex--}
    >
      <ChevronLeft />
      {$t('common.actions.back')}
    </button>
    <button
      class="btn btn-primary"
      disabled={currentStep.locked?.(ctx)}
      onclick={() => stepIndex++}
    >
      {$t('common.actions.next')}
      <ChevronRight />
    </button>
  </div>
</div>
