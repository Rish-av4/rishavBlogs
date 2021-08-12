import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Post from "../components/Post";
import { sortByDate } from "../utils";
// import { FacebookShareButton,FacebookIcon } from "react-share";
// import {TwitterShareButton,TwitterIcon} from "react-share";



export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Rishav&apos;s Blog </title>
      </Head>
      <h1 className="description" >
        {/* Hey now you have come to some good place.It&apos;s gonna be fun ride
        together.So, T'is my Blog! */}
        I've got stories to tell and a life to realize.
        Welcome mate ;) 
      </h1>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      {/* <FacebookShareButton
        url={'https://github.com/next-share'}
        quote={'next-share is a social share buttons for your next React apps.'}
        hashtag={'#nextshare'}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton> */}

      {/* <TwitterShareButton
        url={'https://github.com/next-share'}
        title={'next-share is a social share buttons for your next React apps.'}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton> */}
   

    </div>
  );
}

export async function getStaticProps() {
  // Get files from the posts Directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and Frontmatter from posts

  const posts = files.map((filename) => {
    // Create Slug
    const slug = filename.replace(".md", "");

    // Get FrontMatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    // console.log(markdownWithMeta); *** instead of this, do as it is done in next line ***

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate), //will be passed to page component as props
    },
  };
}
