<script lang="ts">
  import { getContext } from "svelte";
  import { Dates } from "./Dates";
  import type { Options } from "./types";

  const { size } = getContext<Options>("options");

  export let style = "";
</script>

{#each Dates.days as day}
  <div class="day" style="{style} min-height: {size}px; min-width: {size}px">{day.slice(0, 1)}</div>
{/each}

<style lang="scss">
  .day {
    min-width: 30px;
    min-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7em;
    font-weight: 700;
    color: #b1b1b1;
  }
</style>
