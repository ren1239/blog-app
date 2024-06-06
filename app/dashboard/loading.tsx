import SkeletonCard from "../component/SkeletonCard";

export default function DashboardLoading() {
  return (
    <div className="w-4/5 mx-auto">
      <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
        Daily Blog
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
}
