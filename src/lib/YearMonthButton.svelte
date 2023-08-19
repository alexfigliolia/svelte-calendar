<script lang="ts">
  import { getContext } from "svelte";
  import type { Options } from "./types";

  export let text: string | number;
  export let active = false;
  export let onClick: (e: Event) => void;

  let focused = false;

  class UIController {
    static onFocus = () => {
      focused = true;
    };

    static onBlur = () => {
      focused = false;
    };
  }

  const { size, buttonBG, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");
</script>

<button
  style="
  font-size: {size / 2.1}px;
  border: 2px solid {focused ? buttonBGActive : 'transparent'};
	background-color: {active ? buttonBGActive : buttonBG};
	color: {active ? buttonLabelColorActive : buttonLabelColor};"
  class:active
  on:click={onClick}
  on:blur={UIController.onBlur}
  on:focus={UIController.onFocus}
>
  {text}
</button>

<style lang="scss">
  button {
    outline: none;
    width: 33.333%;
    box-sizing: border-box;
    background-color: transparent;
    padding: 10px 0;
    cursor: pointer;
    font-size: 0.9em;
    border-radius: 2.5px;
    font-weight: 400;
  }
</style>
