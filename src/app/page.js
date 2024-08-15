import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Featured />
      <CategoryList />
    </div>
  );
}
