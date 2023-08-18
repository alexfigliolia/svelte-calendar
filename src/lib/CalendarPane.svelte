<script lang="ts">
  import DayIndicators from "./DayIndicators.svelte";
  import Grid from "./Grid.svelte";
  import Header from "./Header.svelte";
</script>

<Header />
<div class="days">
  <DayIndicators />
</div>
<Grid />

<style lang="scss">
  .days {
    width: 100%;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e7e7e7;
    border-top: 1px solid #e7e7e7;
    margin-bottom: 10px;
  }
</style>
