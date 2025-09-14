import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import BackgroundIdea from '@/components/layouts/BackgroundGenerator/BackgroundIdea';
import YourBackgrounds from '@/components/layouts/BackgroundGenerator/YourBackgrounds';

function BackgroundGenerator() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Change background</Button>
      </SheetTrigger>
      <SheetContent className="flex gap-[24px] p-[20px] w-[400px] overflow-scroll">
        <SheetHeader className="p-0">
          <SheetTitle className="font-bold text-[22px] leading-[120%]">
            Change background
          </SheetTitle>
        </SheetHeader>

        <div className="flex gap-[40px] flex-col">
          <BackgroundIdea />
          <YourBackgrounds />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default BackgroundGenerator;
