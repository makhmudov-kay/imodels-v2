export interface Specification {
  title: string;
  list: List[];
}

export interface List {
  category: string;
  options: Options[];
}

export interface Options {
  title: string;
  value: string;
}
