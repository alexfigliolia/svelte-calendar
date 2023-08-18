export type SelectFN = (year: number, month: number, day: number) => void;

export interface Options {
  size: number;
  onSelect: SelectFN;
  buttonBG: string;
  buttonBGActive: string;
  buttonLabelColor: string;
  buttonLabelColorActive: string;
}
