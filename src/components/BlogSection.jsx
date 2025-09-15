"use client";
import BlogCard from "./BlogCard";

export default function BlogSection() {
  const blogs = [
    {
      category: "Technology",
      title: "Why is the Tesla Cybertruck designed the way it is?",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      author: "Jerome Walton",
      date: "2h ago",
      image: "/blog/1.png",
    },
    {
      category: "Place",
      title: "Hot Air Ballooning in Nepal - 1 Day",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      author: "Lewis Daniels",
      date: "Yesterday",
      image: "/blog/2.png",
    },
    {
      category: "Travel",
      title: "New York City | Layout, People, Economy, Culture, & History",
      excerpt: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
      author: "Carrie Brewer",
      date: "23 Dec 2020",
      image: "/blog/3.jpg",
    },
    {
      category: "Health",
      title: "Digital Hearing Aids: The Future of Clear Hearing",
      excerpt: "Affordable solutions with advanced AI technology.",
      author: "Insono Team",
      date: "1 week ago",
      image: "/blog/4.jpg",
    },
  ];

  return (
    <section className="py-10 max-w-7xl mx-auto px-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Articles from our blog</h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {blogs.map((blog, i) => (
          <BlogCard key={i} {...blog} />
        ))}
      </div>
    </section>
  );
}
