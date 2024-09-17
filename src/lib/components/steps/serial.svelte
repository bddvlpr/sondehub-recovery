<script lang="ts">
  import type { Context } from '$lib/steps';

  const { ctx = $bindable() }: { ctx: Context } = $props();
</script>
