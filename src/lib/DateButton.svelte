<script lang="ts">
  import type { Options } from "./types";
  import { getContext } from "svelte";

  export let day: number;
  export let onClick: (e: MouseEvent) => void;

  const { size, buttonLabelColor, buttonLabelColorActive } = getContext<Options>("options");

  let focused = false;

  class UIController {
    static onFocus = () => {
      focused = true;
    };

    static onBlur = () => {
      focused = false;
    };

    static onClick = (e: MouseEvent) => {
      this.onBlur();
      onClick(e);
    };
  }
</script>

<button
  on:blur={UIController.onBlur}
  on:focus={UIController.onFocus}
  on:click={UIController.onClick}
  style="
	font-size: {size / 2.25}px;
	background-color: {focused ? 'lightgray' : 'transparent'};"
>
  {day}
</button>

<style lang="scss">
  button {
    outline: none;
    color: inherit;
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
</style>
