import CardList, { getData } from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";

export default async function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  const POSTS_PER_PAGE = 2;
  const { count } = await getData(page);
  const hasPrev = page > 1;
  const hasNext = page * POSTS_PER_PAGE < count;

  return (
    <div>
      <Navbar />
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row justify-between gap-8 px-4 md:px-8 py-8">
        <div className="w-full md:w-2/3">
          <CardList page={page} />
        </div>
        <div className="w-full md:w-1/3">
          <Menu />
        </div>
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
      <Footer />
    </div>
  );
}
