import CreationBottomBar from "@/app/component/CreationBottomBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Counter from "@/app/component/Counter";
import { CreateDescriptionPage } from "@/app/actions";

export default function DescriptionPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <form action={CreateDescriptionPage}>
        <input type="hidden" name="blogId" value={params.id} />
        <div className="w-3/5 mx-auto flex justify-between items-center ">
          <h2 className=" tracking-tight transition-colors text-3xl font-semibold">
            Let's review day ...
          </h2>

          <Counter name="day" />
        </div>
        <input type="hidden" name="blogId" value={params.id as string} />
        <div className="w-3/5 mx-auto flex flex-col gap-y-5 mb-36 mt-10">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              required
              placeholder="Question for the day?"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <Label>Learning</Label>
            <Textarea
              required
              name="learning"
              placeholder="What did you learn today?"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Create</Label>
            <Textarea
              required
              name="create"
              placeholder="What did you create today?"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Resources</Label>
            <Textarea
              required
              name="resources"
              placeholder="What were the resources you used?"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Reflection</Label>
            <Textarea
              required
              name="reflection"
              placeholder="Any personal thoguhts to share?"
            />
          </div>
        </div>

        <CreationBottomBar />
      </form>
    </>
  );
}
