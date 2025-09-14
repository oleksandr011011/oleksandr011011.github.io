import BackgroundCard from '@/components/layouts/BackgroundGenerator/BackgroundCard';

const mockItems = [
  { id: '1', isLoading: true, progress: 25, timeLeft: '1 minute left', isDefault: false },
  { id: '2', isLoading: false, isDefault: true },
  { id: '3', isLoading: false, isDefault: false },
  { id: '4', isLoading: false, isDefault: false },
  { id: '5', isLoading: false, isDefault: false },
  { id: '6', isLoading: false, isDefault: false },
  { id: '7', isLoading: false, isDefault: false },
  { id: '8', isLoading: false, isDefault: false },
  { id: '9', isLoading: false, isDefault: false },
];

function YourBackgrounds() {
  return (
    <div>
      <h3 className="mb-[12px] font-semibold text-[14px] leading-[120%]">Your backgrounds</h3>
      <div className="grid grid-cols-3 gap-[12px]">
        {mockItems.map(({ isLoading, progress, timeLeft, isDefault }) => (
          <BackgroundCard
            isDefault={isDefault}
            isLoading={isLoading}
            progress={progress}
            timeLeft={timeLeft}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBackgrounds;
