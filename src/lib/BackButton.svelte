<script lang="ts">
  import { getContext } from "svelte";
  import Back from "./Back.svelte";
  import type { Options } from "./types";
  import { activePane } from "./Stores";

  const { size, buttonLabelColor, buttonBGActive } = getContext<Options>("options");

  let focused = false;

  class UIController {
    static onFocus = () => {
      focused = true;
    };

    static onBlur = () => {
      focused = false;
    };

    static onClick = () => {
      activePane.set("calendar");
    };
  }
</script>

<div class="container">
  <button
    class="back"
    on:blur={UIController.onBlur}
    on:click={UIController.onClick}
    on:focus={UIController.onFocus}
    style="
      color: {buttonLabelColor}; 
      font-size: {size / 1.9}px;
      border: 2px solid {focused ? buttonBGActive : 'transparent'};"
  >
    <div class="icon" style="height: {size / 2}px; width: {size / 2}px">
      <Back color={buttonLabelColor} />
    </div>
    <div>Back</div>
  </button>
</div>

<style lang="scss">
  .container {
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    & > .back {
      width: auto;
      outline: none;
      box-sizing: border-box;
      padding: 7.5px 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #eeeeee;
      border: none;
      cursor: pointer;
      border-radius: 2.5px;
      font-size: 1em;
      margin-bottom: 10px;
      & > .icon {
        width: 17.5px;
        height: 17.5px;
        margin-right: 5px;
      }
    }
  }
</style>
