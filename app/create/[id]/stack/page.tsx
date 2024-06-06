import CreationBottomBar from "@/app/component/CreationBottomBar";
import SelectStack from "@/app/component/SelectStack";
import { CreateTechStackPage } from "@/app/actions";

export default function StructureRoute({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
          Which Stack are you using?
        </h2>
      </div>
      <form action={CreateTechStackPage}>
        <input type="hidden" name="blogId" value={params.id} />
        <SelectStack />
        <CreationBottomBar />
      </form>
    </>
  );
}
