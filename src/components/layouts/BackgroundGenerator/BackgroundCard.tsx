import background from '@/assets/background.png';
import ProgressCircle from '@/assets/ProgressCircle';

interface Props {
  isDefault?: boolean;
  isLoading?: boolean;
  progress?: number;
  timeLeft?: string;
}

function BackgroundCard({ isDefault = false, isLoading = false, progress = 0, timeLeft }: Props) {
  const activeStyles = isDefault ? 'border-[#000000] border-[2px]' : null;

  if (isLoading) {
    return (
      <div className="flex flex-col border rounded-[16px] items-center justify-between pt-[68px] w-full h-full bg-black text-white pb-[13px]">
        <ProgressCircle progress={progress} size={65} />
        <span className="text-[12px] font-semibold">{timeLeft}</span>
      </div>
    );
  }

  return (
    <div
      className={`relative w-[112px] h-[198px] border rounded-[16px] overflow-hidden cursor-pointer ${activeStyles}`}
    >
      {isDefault && (
        <span className="absolute top-[8px] left-[8px] w-[50px] h-[19px] bg-[#FFFFFF] font-bold text-[10px] border rounded-[5px] flex items-center justify-center">
          DEFAULT
        </span>
      )}
      <img src={background} className="w-full h-full" alt="background-card" />
    </div>
  );
}

export default BackgroundCard;
