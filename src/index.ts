export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response: Response) => response.json()) // response: Uint8Array
  .then((posts: Array<Post>) => console.log(posts));

(async () => {
  const response: Response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const body: Array<Post> = await response.json();
  console.log(body);
})();
