import { TodoDetail as TodoDetailInterface } from '@todos-workspace/shared/models';

export class TodoDetail implements TodoDetailInterface {
  id: string;
  title: string;
  detail: string;
}
