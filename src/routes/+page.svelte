<script>
  import "./reset.scss";
  import Calendar from "$lib/Calendar.svelte";
</script>

<Calendar
  buttonLabelColor="rgb(88, 88, 88)"
  buttonBGActive="#9e91fc"
  onSelect={(year, month, day) => {}}
/>

<style lang="scss">
  .gray {
    color: rgb(88, 88, 88);
  }
</style>
