import Link from "next/link";
// import { Provider, LikeButton, ClapButton } from "@lyket/react";
// import { Provider, ClapButton } from "@lyket/react";


export default function Post({ post }) {
  // post is prop here
  return (
    <div className="card">

      <img className="card-ty" id="yo" src={post.frontmatter.cover_image}  alt="" />

      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>

      {/* <Provider apiKey="pt_96710d8402af31d477df4b1846e147">
        <LikeButton
          namespace="my-blog-post"
          id="how-to-beat-me-at-chess"
        />
      </Provider> */}


    </div>
  );
}
