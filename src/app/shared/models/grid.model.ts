export interface Grid<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}
