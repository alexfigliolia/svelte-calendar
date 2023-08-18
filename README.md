# Svelte Calendar
A basic date picker for svelte applications

### Installation
```bash
npm i -S @figliolia/svelte-calendar
# or
yarn add @figliolia/svelte-calendar
```
## Usage

```html
<script lang="ts">
  import { Calendar } from "@figliolia/svelte-calendar";

  const onSelect = (date: string) => {
    console.log('Selection', date); // ISO time stamp
  }
</script>

<Calendar
  {onSelect}
  tileSize={30}
  buttonBG="#fff"
  buttonBGActive="#000"
  buttonLabelColor="#000"
  buttonLabelColorActive="#fff" />
```

### API

 `onSelect: (date: string) => void`

 A callback to run each time a date is selected

 `tileSize: number = 30`

 A size in pixels to render each date on the calendar. The size of the
 calendar component is equal to `7 * tileSize` 

 `buttonBG: string = "#fff"`

 A color string with used to style **inactive** button backgrounds

`buttonBGActive: string = "#000"`

 A color string with used to style **active** button backgrounds

`buttonLabelColor: string = "#000"`

 A color string with used to style **inactive** button text

`buttonLabelColorActive: string = "#fff"`

 A color string with used to style **active** button text
