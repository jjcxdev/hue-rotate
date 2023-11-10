type ColorFormatterType = {
  hex: string;
  setHex: React.Dispatch<React.SetStateAction<string>>;
  rgb: string;
  setRgb: React.Dispatch<React.SetStateAction<string>>;
  hsl: string;
  setHsl: React.Dispatch<React.SetStateAction<string>>;
  getCssColor: () => string;
};

export default function DesiredColor({
  hex,
  setHex,
  rgb,
  setRgb,
  hsl,
  setHsl,
  getCssColor,
}: ColorFormatterType) {
  return (
    <section className="flex h-fit w-fit flex-col  items-start justify-center rounded-lg bg-white p-6">
      <div className="pb-2 font-bold">Desired Color</div>
      <div className="flex h-fit w-fit flex-col items-center gap-6 sm:flex-row">
        <div id="color-out" className="flex h-fit flex-col gap-2 ">
          <div className="flex flex-row gap-2">
            HEX
            <input
              type="text"
              className="h-fit w-36 rounded-md border border-neutral-400 px-2"
              placeholder="#000000"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row gap-2">
            RGB
            <input
              type="text"
              className="h-fit w-36 rounded-md border border-neutral-400 px-2"
              placeholder="rgb(0, 0, 0)"
              value={rgb}
              onChange={(e) => setRgb(e.target.value)}
            ></input>
          </div>
          <div className="flex flex-row gap-2">
            HSL
            <input
              type="text"
              className="h-fit w-36 rounded-md border border-neutral-400 px-2"
              placeholder="hsl(0, 0%, 0%)"
              value={hsl}
              onChange={(e) => setHsl(e.target.value)}
            ></input>
          </div>
        </div>
        <div id="color-out-preview" className="flex h-full w-[125px]">
          <div
            className=" aspect-square rounded-md border border-neutral-400"
            style={{
              backgroundColor: getCssColor(),
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
