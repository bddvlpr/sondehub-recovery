<script lang="ts">
  import type { Context } from '$lib/steps';

  import { t } from '$lib/i18n';
  import CircleChevronRight from 'lucide-svelte/icons/circle-chevron-right';

  const { ctx = $bindable() }: { ctx: Context } = $props();

  const types: {
    id: string;
    name: string;
    image?: string;
  }[] = [
    { id: 'rs41', name: 'RS41-SG/SGP/SGM', image: 'rs41.jpeg' },
    { id: 'rs41-ng', name: 'RS41-NG', image: 'rs41.jpeg' }
    // { id: '', name: 'RS92-SGP', image: 'rs92.jpeg' },
    // { id: '', name: 'DFM-17', image: 'dfm17.jpeg' },
    // { id: '', name: 'DFM-09', image: 'dfm09.jpeg' }
  ];
</script>

<div class="flex flex-wrap justify-center gap-4">
  {#each types as { id, name, image }}
    {@const selected = ctx.type === id}
    <div
      class="card w-2/3 bg-base-100 shadow-xl"
      class:bg-primary={selected}
      class:text-primary-content={selected}
    >
      <div class="card-body flex flex-row">
        <div>
          <h2 class="card-title font-bold">{name}</h2>
          <p>
            <b>{$t('common.labels.location')}</b>
            {$t(`steps.type.card.${id}.location`)}
          </p>
          <p>
            <b>{$t('common.labels.format')}</b>
            {$t(`steps.type.card.${id}.format`)}
          </p>
        </div>
        <div class="ml-auto self-center">
          <button class="btn btn-circle btn-ghost" onclick={() => (ctx.type = id)}>
            <CircleChevronRight />
          </button>
        </div>
      </div>
      <figure>
        <img alt="Photo of a {name} radiosonde." src="/img/{image}" />
      </figure>
    </div>
  {/each}
</div>
