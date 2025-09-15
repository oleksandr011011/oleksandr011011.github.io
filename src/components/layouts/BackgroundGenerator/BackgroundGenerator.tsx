import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import BackgroundIdea from '@/components/layouts/BackgroundGenerator/BackgroundIdea';
import YourBackgrounds from '@/components/layouts/BackgroundGenerator/YourBackgrounds';
import CloseIcon from '@/assets/CloseIcon';

function BackgroundGenerator() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Change background</Button>
      </SheetTrigger>
      <SheetContent className="flex gap-[24px] p-[20px] pt-[32px] w-[400px] overflow-scroll">
        <SheetHeader className="p-0">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-bold text-[22px] leading-[120%]">
              Change background
            </SheetTitle>
            <SheetClose className="cursor-pointer">
              <CloseIcon />
            </SheetClose>
          </div>
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
