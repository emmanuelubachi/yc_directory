import { auth } from "@/auth";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: "1",
        name: "John Doe",
      },
      _id: "1",
      description: "This is a description",
      image:
        "https://th.bing.com/th/id/OIP.MI1ZbnQtisDhvnfwHEj0igHaEK?rs=1&pid=ImgDetMain",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading rounded-lg">
          Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts?.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="">No Startups Found</p>
          )}
        </ul>
      </section>
    </>
  );
}
