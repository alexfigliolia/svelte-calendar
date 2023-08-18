<script lang="ts">
  import { getContext } from "svelte";
  import type { Options } from "./types";

  export let text: string | number;
  export let active: boolean = false;
  export let onClick: (e: Event) => void;

  const { buttonBG, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");
</script>

<button
  style="
	background-color: {active ? buttonBGActive : buttonBG};
	color: {active ? buttonLabelColorActive : buttonLabelColor};"
  class:active
  on:click={onClick}
>
  {text}
</button>

<style lang="scss">
  button {
    width: 33.333%;
    outline: none;
    border: none;
    background-color: transparent;
    padding: 10px 0;
    cursor: pointer;
    font-size: 0.9em;
    border-radius: 2.5px;
    font-weight: 400;
  }
</style>
