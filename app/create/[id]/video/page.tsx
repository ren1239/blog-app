import { CreateVideoPage } from "@/app/actions";
import CreationBottomBar from "@/app/component/CreationBottomBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function VideoPage({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <div className="w-3/5 mx-auto flex justify-between items-center ">
          <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
            Upload your video
          </h2>
        </div>
      </div>
      <form action={CreateVideoPage}>
        <input type="hidden" name="blogId" value={params.id} />
        <div className="w-3/6 mx-auto flex  flex-col gap-y-5 mb-36 mt-10">
          <div className="flex flex-col gap-y-2">
            <Label>Video</Label>
            <Input required name={"video"} type="file" />
          </div>
        </div>
        <CreationBottomBar />
      </form>
    </>
  );
}
