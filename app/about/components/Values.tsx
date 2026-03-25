const Values = () => {
  const values = [
    {
      title: "Attention to Detail",
      description:
        "Every room is considered from every angle — especially how it photographs.",
    },
    {
      title: "Buyer Psychology",
      description: "We style for the target buyer, not personal taste.",
    },
    {
      title: "Full Service",
      description:
        "Vacant or occupied, we work with what's there or bring everything.",
    },
    {
      title: "Proven Results",
      description: "Styled homes consistently sell faster and above reserve.",
    },
  ];
  return (
    <div>
      <p className="text-[10px] tracking-[0.2em] uppercase text-primary mb-4">
        Our Approach
      </p>
      <p className="text-sm leading-loose text-white/70 mb-14">
        A professionally styled home stands out online and at inspections,
        helping attract more interest and maximise your sale result. We
        understand Melbourne&apos;s property market and know exactly what buyers
        are looking for in every suburb and price bracket.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
        {values.map((v) => (
          <div key={v.title} className="bg-yellow-400/5 rounded-lg p-5">
            <p className="text-[11px] tracking-widest uppercase font-semibold text-primary mb-2">
              {v.title}
            </p>
            <p className="text-xs leading-relaxed text-white/60">
              {v.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
