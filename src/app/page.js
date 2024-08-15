import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Featured />
      <CategoryList />
      <div className="flex flex-col md:flex-row justify-between gap-8 px-4 md:px-8 py-8">
        <div className="w-full md:w-2/3">
          <CardList />
        </div>
        <div className="w-full md:w-1/3">
          <Menu />
        </div>
      </div>
      <Pagination />
    </div>
  );
}
