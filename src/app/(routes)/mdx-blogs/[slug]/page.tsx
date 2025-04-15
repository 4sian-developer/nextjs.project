//? NEXT.JS MODULES
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
//? NODE.JS MODULES
import path from "path";
import fs from "fs";
//? DATE FNS | Date Library
import { format, parseISO } from "date-fns";
//? GRAY MATTER
import matter from "gray-matter";
//? NEXT MDX REMOTE
import { compileMDX, MDXRemote } from "next-mdx-remote/rsc";
//? REACT ICONS | Icon Library
import { VscCalendar } from "react-icons/vsc";
//? LIBRARY 
import { getAllPosts, getPostBySlug } from "../../../../lib/post";
//? CUTOM UI
import Breadcrumbs from "@/app/(custom)/ui/breadcrumbs";

//? FORMAT THE DATE DAY/MONTH/YEAR AGO
function formateDate(date: string) {
  //* VAR: Store today's date
  const currentDate = new Date();
  //* VAR: Store target date
  const targetDate = new Date(date);
  //* VAR: Get current year - target date year
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  //* VAR: Get current month - target date month
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  //* VAR: Get current date - target date 
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  //* VAR: String to store the formatted date
  let formattedDate = "";

  //? CONDITIONAL STATEMENT: Checks if today/month/year ago
  if (yearsAgo > 0) { //* CONDITIONAL STATEMENT: Checks if it's more than a year ago
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) { //* CONDITIONAL STATEMENT: Checks if it's more than a month ago
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) { //* CONDITIONAL STATEMENT: Checks if it's more than a day ago
    formattedDate = `${daysAgo}d ago`;
  } else { //* CONDITIONAL STATEMENT: If none of the above conditions met, it's today
    formattedDate = 'Today';
  }
  
  //* VAR: Get the full date in a human-readable format
  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  //? Return the formatted date including the human-readable date and the time ago
  return `${fullDate} (${formattedDate})`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  //? Get slug from URL
  const  { slug } = await params;
  //? Get MDX content
  const { default: Post } = await import(`@/content/${slug}.mdx`);
  //? Build the path to the blog file based on the slug
  const filePath = path.join(process.cwd(), 'src/content', `${slug}.mdx`);  
  //? Read the file contents
  const source = fs.readFileSync(filePath, 'utf8'); 
  //? Use gray-matter to parse frontmatter and content
  const { content, data } = matter(source);
  //? Compile MDX using built-in support (server-side only)
  const { content: MDXContent } = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });
  //? DYNAMIC BREADCRUMBS
  const breadcrumbData = [
    { label: "Home", href: "/", active: false },
    { label: "Featured Blogs", href: "/mdx-blogs", active: false },
    { label: data.title, href: `/mdx-blogs/${data.slug}`, active: true },
  ];

  return  (
    <div className="display-flex-center__container">
      <div className="article__container">
        <div className="article__content">
          {/* BLOG TITLE */}
          <h1 className="display-1 mb-0">{data.title}</h1>
          {/* BREADCRUMBS BAR */}
          <Breadcrumbs breadcrumbs={breadcrumbData} />
          {/* BLOG PREVIEW IMAGE */}
          {data.image && (
            <Image
              src={data.image} 
              alt={data.title} 
              width={300}
              height={200}
              className="img-theme w-100 mb-4"
            />
          )}
          <div className="d-flex justify-content-between">
            {/* BLOG DATE */}
            <time
              className="d-block" 
              dateTime={data.publishedAt}
            >
              <div className="d-flex align-items-center mb-4">
                <VscCalendar style={{ width: '1rem', height: 'auto', marginRight: '0.2rem'}} />
                <span className="d-none d-md-block pl-3">Published on</span> 
                {/* BLOG DATE PUBLISHED */}
                {/* <span className="mx-1">{format(new Date(data.publishedAt), 'LLLL d, yyyy')}</span> */}
                {/* BLOG PUBLISHED X DAYS AGO */}
                <span>{formateDate(data.publishedAt)}</span>
              </div>
            </time>
          </div>
          <Post />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}