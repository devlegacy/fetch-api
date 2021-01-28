export class Post {
  userId: number = 0;
  id?: number = 0;
  title: string = '';
  body: string = '';

  constructor(title: string) {
    this.title = title;
  }
}
