import FilterTabs from "@/src/components/ui/filterTabs/FilterTabs";
import { TireProductContent } from "@/src/components/ui/favorites/TireProductContent";

export default function FavoritesPage() {
  return (
    <div>
      <FilterTabs />
      <TireProductContent />
    </div>
  );
}
