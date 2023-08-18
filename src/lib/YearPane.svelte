<script lang="ts">
  import { derived, get } from "svelte/store";
  import { activeDay, activeYear, activePane } from "./Stores";
  import { getContext, onMount } from "svelte";
  import type { Options } from "./types";
  import BackButton from "./BackButton.svelte";

  const { onSelect, buttonBG, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");

  const years = derived(activeYear, y => {
    const partition = new Array(50).fill("");
    const start: number[] = partition.map((_, i) => 50 - (i + 1) + y);
    const end: number[] = partition.map((_, i) => y - (i + 1));
    return [...start, ...end];
  });

  class UIController {
    static containerRef: HTMLDivElement;

    static onClickBack = () => {
      activePane.set("calendar");
    };

    static onSelectYear = (year: number) => {
      return () => {
        activeYear.set(year);
        activeDay.set(1);
        onSelect(year, get(activeYear), 1);
        activePane.set("calendar");
        this.setScrollPosition();
      };
    };

    static setScrollPosition() {
      if (this.containerRef) {
        const activeButton = UIController.containerRef.querySelector("button.active");
        if (activeButton) {
          UIController.containerRef.scrollTo({
            // @ts-ignore
            top: activeButton.offsetTop - ((activeButton.offsetHeight as number) + 10),
            behavior: "smooth",
          });
        }
      }
    }
  }

  onMount(() => {
    UIController.setScrollPosition();
  });
</script>

<div class="years">
  <BackButton />
  <div class="buttons" bind:this={UIController.containerRef}>
    {#each $years as year}
      <button
        style="
          background-color: {year === $activeYear ? buttonBGActive : buttonBG};
          color: {year === $activeYear ? buttonLabelColorActive : buttonLabelColor};"
        class:active={year === $activeYear}
        on:click={UIController.onSelectYear(year)}
      >
        {year}
      </button>
    {/each}
  </div>
</div>

<style lang="scss">
  .years {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-height: 100%;
    & > .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-height: 100%;
      overflow-y: scroll;
      scroll-behavior: smooth;
      -webkit-overflow-scrolling: touch;
      & > button {
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
    }
  }
</style>
