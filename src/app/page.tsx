import NewsCard from "@/components/NewsCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const getNews = async () => {
  const res = await fetch("https://api.hackerwebapp.com/news?page=1");
  return res.json();
};

async function page() {
  const news = await getNews();
  await console.log(news);
  return (
    <div className="p-10 h-screen gap-4 flex flex-col">
      {/* <pre>{JSON.stringify(news)}</pre> */}
      {news.map((items: any) => (
        <Link key={items.id} href={items.url}>
          <NewsCard title={items.title} score={items.points} />
        </Link>
      ))}
    </div>
  );
}

export default page;
