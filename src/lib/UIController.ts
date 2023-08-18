export class UIController {
  static grid(first: number, last: number) {
    const max = last + first;
    const grid: (number | string)[][] = [];
    for (let i = 0; i < 5; i++) {
      const row: (number | string)[] = [];
      for (let j = 0; j < 7; j++) {
        const position = j + i * 7;
        if (position >= first && position <= max) {
          row.push(position - first + 1);
        } else {
          row.push("");
        }
      }
      grid.push(row);
    }
    return grid;
  }
}
