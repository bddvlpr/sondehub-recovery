<script lang="ts">
  import type { Context } from '$lib/steps';

  import { t } from '$lib/i18n';
  import { types } from '$lib/serial';
  import CircleChevronRight from 'lucide-svelte/icons/circle-chevron-right';

  const { ctx = $bindable() }: { ctx: Context } = $props();
</script>

<div class="flex flex-wrap justify-center gap-4">
  {#each types as type}
    {@const { id, name } = type}
    {@const selected = ctx.sonde?.id === id}
    <div class="card w-2/3 bg-base-100 shadow-xl">
      <div class="card-body flex flex-row">
        <div>
          <h2 class="card-title font-bold">
            {name}
          </h2>
          <p>
            <b>
              {$t('common.labels.location')}
            </b>
            {$t(`steps.type.card.${id}.location`)}
          </p>
          <p>
            <b>
              {$t('common.labels.format')}
            </b>
            {$t(`steps.type.card.${id}.format`)}
          </p>
        </div>
        <div class="ml-auto self-center">
          <button
            class="btn btn-circle"
            class:btn-ghost={!selected}
            class:btn-primary={selected}
            onclick={() => {
              ctx.sonde = type;
            }}
          >
            <CircleChevronRight />
          </button>
        </div>
      </div>
      <figure>
        <img alt="Photo of a {name} radiosonde." src="/img/{id}.jpeg" />
      </figure>
    </div>
  {/each}
</div>
