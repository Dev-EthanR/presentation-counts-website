const Table = () => {
  const tableContent = [
    {
      title: "0406 988 011",
      phone: "For all your styling needs",
      name: "Tess",
    },
    {
      title: "0420 254 767",
      phone: "For all your trade needs",
      name: "Caroline",
    },
  ];
  return (
    <div className="grid grid-cols-2 border border-primary/20 rounded-lg overflow-hidden mb-14">
      {tableContent.map((stat) => (
        <div
          key={stat.phone}
          className="text-center py-6 px-4 border-r border-primary/20 last:border-r-0"
        >
          <p className="text-4xl text-primary font-light leading-none mb-1">
            {stat.title}
          </p>
          <p className="text-lg uppercase text-white/80">{stat.name}</p>
          <p className="text-[10px] tracking-[0.15em] uppercase text-white/40">
            {stat.phone}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Table;
