"use client";

import DesiredColor from "@/app/components/DesiredColor";
import InitialColor from "@/app/components/InitialColor";
import { useColorFormatter } from "@/app/utils/useColorFormatter";
import { toHsl, calculateHueRotation } from "../utils/colorUtils";
import { FaRegCopy } from "react-icons/fa6";
import { use, useState } from "react";

export default function Color() {
  const initialColor = useColorFormatter();
  const desiredColor = useColorFormatter();

  const initialColorHsl = toHsl(initialColor.getCssColor());
  const desiredColorHsl = toHsl(desiredColor.getCssColor());

  let hueRotateValue: number | string = "--";

  if (initialColorHsl && desiredColorHsl) {
    const calculateValue = calculateHueRotation(
      initialColorHsl,
      desiredColorHsl,
    );
    hueRotateValue = isNaN(calculateValue) ? "--" : calculateValue;
  }

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const copyToClipboard = () => {
    if (hueRotateValue !== "--") {
      navigator.clipboard
        .writeText(hueRotateValue.toString())
        .then(() => {
          console.log("Copied to clipboard");
          setPopupMessage("Copied to clipboard");
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text to clipboard", err);
          setPopupMessage("Failed to copy!");
          setShowPopup(true);
          setTimeout(() => {
            setShowPopup(false);
          }, 2000);
        });
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-6 pb-8">
      <div className="flex flex-col gap-6 md:flex-row">
        <InitialColor {...initialColor} />
        <DesiredColor {...desiredColor} />
      </div>
      <div className="flex w-[232.533px] flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 font-bold">
        Hue Rotate Degrees:
        <div className="flex flex-row gap-2 font-normal">
          {hueRotateValue !== "--" ? `${hueRotateValue}` : hueRotateValue}

          <button aria-label="button" onClick={copyToClipboard}>
            <FaRegCopy />
          </button>
        </div>
        <div
          className={`fixed bottom-0 left-0 right-0 bg-black py-2 text-center text-white transition-transform duration-500 ${
            showPopup ? "translate-y-0" : "translate-y-full"
          }`}
        >
          {popupMessage}
        </div>
      </div>
    </section>
  );
}
