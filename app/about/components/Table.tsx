const Table = () => {
  const tableContent = [
    { number: "30+", label: "Years experience" },
    { number: "500+", label: "Homes styled" },
  ];
  return (
    <div className="grid grid-cols-2 border border-primary/20 rounded-lg overflow-hidden mb-14">
      {tableContent.map((stat, i) => (
        <div
          key={i}
          className="text-center py-6 px-4 border-r border-primary/20 last:border-r-0"
        >
          <p className="font-cormorant text-4xl text-primary font-light leading-none mb-1">
            {stat.number}
          </p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-white/40">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Table;
