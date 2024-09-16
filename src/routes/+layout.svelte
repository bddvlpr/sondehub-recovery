<script lang="ts">
  import { locale, locales, t } from '$lib/i18n';

  import '../app.pcss';

  const { children } = $props();
</script>

{@render children?.()}

<div class="flex justify-center">
  <select class="select select-bordered select-sm" bind:value={$locale}>
    {#each $locales as lang}
      <option value={lang}>{$t(`languages.${lang}`)}</option>
    {/each}
  </select>
</div>
