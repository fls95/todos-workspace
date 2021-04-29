export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoDetail extends Todo {
  detail: string;
}
