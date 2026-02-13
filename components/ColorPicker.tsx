'use client';

import { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

type ColorButtonProps = {   
  defaultValue?: string;
  setColors: (colors: string[]) => void;
  colors: string[]
  index: number
};

export default function ColorButton({ colors, index, setColors, defaultValue = '#ff0000' }: ColorButtonProps) {
  const [open, setOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  function setColor(newColor: string) {
    const updateColors = [...colors]
    updateColors[index] = newColor
    setColors(updateColors)
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <button
        ref={buttonRef}
        className="rounded border w-full h-full"
        style={{ backgroundColor: colors[index]}}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div
          ref={pickerRef}
          className="absolute mt-2 z-10 shadow-lg p-2 bg-white rounded"
        >
          <HexColorPicker color={colors[index]} onChange={setColor} />
        </div>
      )}
    </div>
  );
}
