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
    <>

      <div>

        <Head >
          <title>Rishav&apos;s Blog </title>
        </Head>
        <h1 className="description" >
          I have got stories to tell and a life to realize.
          Welcome mate ;)
        </h1>

        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>


        {/* <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div className="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div> */}
        <div className="circle  " style= {{textAlign:"center"}}>
          <div className="spinner-grow text-primary mx-2" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-secondary mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-success mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-danger mx-2 " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-warning mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {/* <div className="spinner-grow text-info mx-2" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-primary mx-2 " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow text-dark mx-2 " role="status">
            <span className="visually-hidden">Loading...</span>
          </div> */}

        </div>
      </div>
    </>
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
