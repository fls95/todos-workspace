import { Todo as TodoInterface } from '@todos-workspace/shared/models';

export class Todo implements TodoInterface {
  id: string;
  title: string;
}
