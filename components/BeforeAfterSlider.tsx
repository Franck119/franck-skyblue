import React, { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, position)));
  };

  return (
    <div 
      className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden cursor-ew-resize select-none border-4 border-white shadow-2xl"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e)}
      onTouchMove={handleMove}
      onMouseDown={handleMove}
    >
      {/* After Image (Background) */}
      <img src={afterImg} alt="After" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Before Image (Overlay) */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img src={beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover filter grayscale-[0.5] brightness-[0.7]" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Slider Line */}
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
          <MoveHorizontal className="w-6 h-6 text-sky-600" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-1 rounded-lg text-xs font-bold tracking-widest uppercase">Before</div>
      <div className="absolute bottom-6 right-6 bg-sky-500/80 backdrop-blur-md text-white px-4 py-1 rounded-lg text-xs font-bold tracking-widest uppercase">SkyBlue Clean</div>
    </div>
  );
};

export default BeforeAfterSlider;