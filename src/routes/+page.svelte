<script lang="ts">
  import { type Context, RECOVERY_STEPS } from '$lib/steps';

  let ctx: Context = $state({});
  let stepIndex = $state(0);

  let currentStep = $derived(RECOVERY_STEPS[stepIndex]);
</script>

<div class="m-5 rounded-lg bg-base-200 p-5">
  <div class="flex w-full justify-center">
    <ul class="steps">
      {#each RECOVERY_STEPS as { title }, index}
        <li class="step step-primary" class:step-primary={stepIndex >= index}>
          {title}
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
      Back
    </button>
    <button
      class="btn btn-primary"
      disabled={currentStep.locked?.(ctx)}
      onclick={() => stepIndex++}
    >
      Next
    </button>
  </div>
</div>
