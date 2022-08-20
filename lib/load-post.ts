import { PostType } from "../types/PostType";

// from a `lib/` directory
export async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export async function getAllPostIds() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return posts.map((post: PostType) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = await res.json()
  return {
    post
  }
}

export async function fetchCosmosData() {
  console.log('🚀 ~ file: crud-page.tsx ~ line 6 ~ connectCosmos ~ res1 test'); 
  try {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await fetch('/api/connect_cosmos');
      console.log('🚀 ~ file: crud-page.tsx ~ line 6 ~ connectCosmos ~ res', res); 
      resolve(res)
    } catch (error) {
      console.log("🚀 ~ file: load-post.ts ~ line 41 ~ returnnewPromise ~ error", error)
      reject(error)
    }
  })  
  } catch (error) {
  console.log("🚀 ~ file: load-post.ts ~ line 48 ~ fetchCosmosData ~ error", error)
    
  }
  
}