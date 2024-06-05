import SelectCategory from "@/app/component/SelectCategory";
import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { CreateCategoryPage } from "@/app/actions";
import CreationBottomBar from "@/app/component/CreationBottomBar";

export default function StructureRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
          Are you posting a daily vlog?
        </h2>
      </div>
      <form action={CreateCategoryPage}>
        <input type="hidden" name="blogId" value={params.id} />
        <SelectCategory />
        <CreationBottomBar />
      </form>
    </>
  );
}
