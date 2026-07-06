const items = [
  "NABL Accredited",
  "ISO/IEC 17025",
  "Temperature Calibration",
  "Humidity Calibration",
  "Thermal Mapping",
  "Pan-India Service",
  "Est. 2020",
];

export default function Marquee() {
  const track = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-ink-950/8 bg-ink-950 py-4">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {track.map((item, i) => (
              <span key={`${copy}-${i}`} className="flex items-center px-6 text-sm font-medium uppercase tracking-[0.15em] text-white/40">
                {item}
                <span className="ml-6 h-1 w-1 rounded-full bg-brand" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
