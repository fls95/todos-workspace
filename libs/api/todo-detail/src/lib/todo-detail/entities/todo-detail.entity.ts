import { TodoDetail as TodoDetailInterface } from '@todos-workspace/shared/models';

export class TodoDetail implements TodoDetailInterface {
  id: string;
  title: string;
  completed: boolean;
  detail: string;
}
