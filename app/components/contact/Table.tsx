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
    <div className="flex flex-col justify-between   mb-14 h-full">
      {tableContent.map((stat) => (
        <div
          key={stat.phone}
          className="text-center py-6 px-4 border  border-primary/20 h-full flex flex-col justify-center rounded-lg"
        >
          <a
            href={`tel:${stat.title.replace(/\s/g, "")}`}
            className="text-4xl text-primary font-light leading-none mb-1 hover:underline"
          >
            {stat.title}
          </a>
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
