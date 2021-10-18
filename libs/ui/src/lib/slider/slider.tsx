import { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SliderProps {}

export function Slider(props: SliderProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = [
    { value: 'Hello', bgColor: 'bg-pink-500' },
    { value: 'There', bgColor: 'bg-purple-500' },
    { value: 'Booya!', bgColor: 'bg-teal-500' },
  ];

  const limit = slide.length;

  const nextSlide = () => {
    setActiveSlide(prev => {
      if (prev + 1 === limit) {
        return prev;
      }
      return prev + 1;
    });
  };

  const previousSlide = () => {
    setActiveSlide(prev => {
      if (prev === 0) {
        return prev;
      }
      return prev - 1;
    });
  };

  return (
    <div className="relative">
      {slide.map(({ value, bgColor }, index) => {
        return (
          <div
            className={`absolute inset-0 w-screen h-screen ${bgColor} text-white flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform 
            ${index === activeSlide ? 'translate-x-0' : 'translate-x-full'}
            ${index === activeSlide - 1 && '-translate-x-full'}
            slide`}
          >
            {value}
          </div>
        );
      })}

      <div
        onClick={() => {
          nextSlide();
        }}
        className="fixed bottom-0 right-0 bg-white w-16 h-16 flex items-center justify-center text-black cursor-pointer"
      >
        &#x276F;
      </div>
      <div
        onClick={() => {
          previousSlide();
        }}
        className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 border-r border-gray-400 flex items-center justify-center text-black cursor-pointer"
      >
        &#x276E;
      </div>
    </div>
  );
}

export default Slider;
