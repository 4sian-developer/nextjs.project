//? REACT Built-in
import { JSX, Suspense } from "react";
//? METADATA | [S.E.O] Search Engine Optimization
import type { Metadata } from "next";
//? Next.js Built-in
import Link from "next/link"; //? client-side navigation
import Image from "next/image";
//? DATE FNS | Date Library
import { format } from "date-fns";
//? REACT ICONS
import { VscCalendar } from "react-icons/vsc";
//? REACT BOOTSTRAP
import { Row, Col } from "react-bootstrap";
//? Import function to get all post metadata
import { getAllPosts } from "@/lib/post";
//? CUSTOM UI
import Breadcrumbs from "@/app/(custom)/ui/breadcrumbs";

//? METADATA TAGS | [S.E.O]
export const metadata: Metadata = {
  title: "Blogs - Featured",
  description: "Featured articulations on interested topics.",
};

//? TypeScript | Types
type Post = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  image?: string;
};

export default function MDXBlogsPage(): JSX.Element {

  //? Call function to get all posts from MDX files
  const posts: Post[] = getAllPosts();
  //? DYNAMIC BREADCRUMBS
  const breadcrumbData = [
    { label: "Home", href: "/", active: false },
    { label: "Featured Blogs", href: "/mdx-blogs", active: true },
  ];

  //? Render the blog post list
  return (
    <div className="container mt-5"> {/* Padding around content */}
      <small>NEXT MDX | Next Built-in Markdown Support</small>
      <h1 className="pt-0">FEATURED BLOGS</h1> {/* Title */}
      <Breadcrumbs breadcrumbs={breadcrumbData} />
      <Row>
        {/* Loop through each post and render a link */}
        {posts.map((post) => (
          <Col sm="12" md="6" lg="6" xl="4" className="preview-card__container mb-5" key={post.slug}> {/* Use slug as unique key */}
            {/* BLOG PREVIEW IMAGE */}
            {post.image && (
              <Image 
                src={post.image} 
                alt={post.title} 
                width={300}
                height={200} 
                className="img-theme w-100" 
              />
            )}
            <div className="preview-card__content">
              {/* Create a link to the individual blog post page */}
              {/* Show the title from frontmatter */}
              <h2><Link legacyBehavior href={`/mdx-blogs/${post.slug}`}><a>{post.title}</a></Link></h2>
              <time dateTime={post.publishedAt}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center mt-2">
                    <VscCalendar 
                      style={{ 
                        width: '1rem', 
                        height: 'auto', 
                        marginRight: '0.2rem'
                      }} 
                    />
                    {format(new Date(post.publishedAt), 'LLLL d, yyyy')}
                  </div>
                  {/*  */}
                </div>
              </time>
              <p>{post.description}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
