"use client"

import { useState } from 'react';
import ColorPicker from '../components/ColorPicker';

export default function Home() {
  const [colors, setColors] = useState([
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000",
    "#000000"
  ]);

  function hexToBGRDecimal(hex: string): string {
    hex = hex.replace("#", "");

    if (hex.length !== 6) {
      throw new Error("Invalid hex color");
    }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    const bgr = (b << 16) | (g << 8) | r;

    return bgr.toString();
  }

  function downloadTheme() {
    const text = 
    "NoteColor0=" + hexToBGRDecimal(colors[0]) + "\n" +
    "NoteColor1=" + hexToBGRDecimal(colors[1]) + "\n" +
    "NoteColor2=" + hexToBGRDecimal(colors[2]) + "\n" + 
    "NoteColor3=" + hexToBGRDecimal(colors[3]) + "\n" + 
    "NoteColor4=" + hexToBGRDecimal(colors[4]) + "\n" + 
    "NoteColor5=" + hexToBGRDecimal(colors[5]) + "\n" + 
    "NoteColor6=" + hexToBGRDecimal(colors[6]) + "\n" + 
    "NoteColor7=" + hexToBGRDecimal(colors[7]) + "\n" + 
    "NoteColor8=" + hexToBGRDecimal(colors[8]) + "\n" +
    "NoteColor9=" + hexToBGRDecimal(colors[9]) + "\n" +
    "NoteColor10=" + hexToBGRDecimal(colors[10]) + "\n" + 
    "NoteColor11=" + hexToBGRDecimal(colors[11]) + "\n" + 
    "NoteColor12=" + hexToBGRDecimal(colors[12]) + "\n" + 
    "NoteColor13=" + hexToBGRDecimal(colors[13]) + "\n" + 
    "NoteColor14=" + hexToBGRDecimal(colors[14]) + "\n" + 
    "NoteColor15=" + hexToBGRDecimal(colors[15]); 

    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "CustomTheme.flstheme";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-900">
      <div className="grid grid-cols-4 grid-rows-4ç w-100 aspect-square bg-gray-500">
        {colors.map((color, index) => (
          <ColorPicker key={index} index={index} defaultValue={color} colors={colors} setColors={setColors}/>
        ))}
      </div>

      <button className='bg-white w-10 h-10' onClick={downloadTheme}/>
    </div>
  );
}
