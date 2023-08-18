export class UIController {
  static grid(first: number, last: number) {
    const depth = this.depth(first, last);
    const max = last + first;
    const grid: (number | string)[][] = [];
    for (let i = 0; i < depth; i++) {
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

  static depth(first: number, last: number) {
    return Math.ceil((last + 1 + first) / 7);
  }
}
