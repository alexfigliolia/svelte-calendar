<script lang="ts">
  import { get } from "svelte/store";
  import { Dates } from "./Dates";
  import { activeDay, activeMonth, activePane, activeYear } from "./Stores";
  import type { Options } from "./types";
  import { getContext } from "svelte";
  import BackButton from "./BackButton.svelte";
  import YearMonthButton from "./YearMonthButton.svelte";

  const { onSelect, buttonBG, buttonBGActive, buttonLabelColor, buttonLabelColorActive } =
    getContext<Options>("options");

  class UIController {
    static onClickBack = () => {
      activePane.set("calendar");
    };

    static onSelectMonth = (index: number) => {
      return () => {
        activeMonth.set(index);
        activeDay.set(1);
        onSelect(get(activeYear), index, 1);
        this.onClickBack();
      };
    };
  }
</script>

<div class="months">
  <BackButton />
  <div class="buttons">
    {#each Dates.months as month, index}
      <YearMonthButton
        text={month.slice(0, 3)}
        active={index === $activeMonth}
        onClick={UIController.onSelectMonth(index)}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .months {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    & > .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
</style>
