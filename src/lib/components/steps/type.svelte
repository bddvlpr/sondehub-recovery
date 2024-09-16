<script lang="ts">
  import type { Context } from '$lib/steps';

  const { ctx = $bindable() }: { ctx: Context } = $props();

  const types = [
    // TODO: Images and swap these to cards.
    { type: 'RS41' },
    { type: 'DFM' },
    { type: 'M10' },
    { type: 'M20' },
    { type: 'iMet-4' },
    { type: 'iMet-50' },
    { type: 'iMet-54' },
    { type: 'LMS6-400' },
    { type: 'LMS6-1680' },
    { type: 'MRZ' },
    { type: 'MTS01' },
    { type: 'iMS-100' }
  ];
</script>

<div class="flex justify-center flex-wrap">
  {#each types as { type }}
    <div>
      <button
        class="btn btn-block max-w-32"
        class:btn-primary={ctx.type === type}
        onclick={() => (ctx.type = type)}
      >
        {type}
      </button>
    </div>
  {/each}
</div>
