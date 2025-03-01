
import { MainLayout } from "@/components/layouts/MainLayout";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyFilters } from "@/components/properties/PropertyFilters";

const Properties = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Properties</h1>
        </div>
        <PropertyFilters />
        <PropertyGrid />
      </div>
    </MainLayout>
  );
};

export default Properties;

