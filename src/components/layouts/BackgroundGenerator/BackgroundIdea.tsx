import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import AIIcon from '@/assets/AIIcon';
import UndoIcon from '@/assets/UndoIcon';
import RedoIcon from '@/assets/RedoIcon';
import AISecondaryIcon from '@/assets/AISecondaryIcon';

function BackgroundIdea() {
  return (
    <div>
      <h3 className="mb-[12px] font-semibold text-[14px] leading-[120%]">Background idea</h3>
      <div className="border border-[#F2F4F6] rounded-[12px] p-[16px] mb-[24px]">
        <Textarea className="font-medium text-[14px] leading-[140%] p-0 border-none resize-none !bg-transparent min-h-[116px]">
          Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden
          sparkles floating upward for a natural, radiant effect.
        </Textarea>
        <div className="flex justify-between">
          <div className="flex gap-[4px] items-center font-semibold text-[12px]">
            <AIIcon />
            Regenerate
          </div>
          <div className="flex gap-[8px]">
            <Button variant="ghost" className="cursor-pointer">
              <UndoIcon />
            </Button>
            <Button variant="ghost" className="cursor-pointer">
              <RedoIcon />
            </Button>
          </div>
        </div>
      </div>
      <Button className="w-full border rounded-[100px] h-[48px]">
        <AISecondaryIcon />
        Generate BG for 1 credit
      </Button>
    </div>
  );
}

export default BackgroundIdea;
