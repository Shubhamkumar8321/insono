import { graphQLClient, GET_POST_BY_SLUG } from "@/lib/graphql";
import Image from "next/image";
import { NextSeo } from "next-seo";

interface BlogPageProps {
  params: { slug: string };
}

// Define the type of the GraphQL response
interface PostResponse {
  post: {
    title: string;
    content: string;
    date: string;
    author?: { node: { name: string } };
    featuredImage?: { node: { sourceUrl: string } };
    categories?: { nodes: { name: string }[] };
  } | null;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = params;

  let data: PostResponse;

  try {
    data = await graphQLClient.request<PostResponse>(GET_POST_BY_SLUG, {
      id: slug,
    });
  } catch (err) {
    console.error("Error fetching post:", err);
    return <p className="text-center py-10">Error fetching post</p>;
  }

  const post = data.post;

  if (!post) return <p className="text-center py-10">Post not found</p>;

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 pt-24">
      {post.featuredImage?.node?.sourceUrl && (
        <div className="relative w-full h-80 mb-6">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover rounded-md"
          />
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {post.author?.node?.name} • {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        className="prose max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}
