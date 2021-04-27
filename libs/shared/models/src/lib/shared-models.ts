export interface Todo {
  id: string;
  title: string;
}

export interface TodoDetail extends Todo {
  detail: string;
}
