const Team = () => {
  const team = [
    {
      name: "Ray Rodgers",
      role: "Director",
      description:
        "With over 30 years of experience in property presentation and interior styling, Ray has helped hundreds of Melbourne homes achieve outstanding sale results.",
    },
    {
      name: "Sally Rodgers",
      role: "Director",
      description:
        "Sally brings extensive experience in management and interiors, ensuring projects run smoothly and clients receive exceptional service",
    },
    {
      name: "Tessa Lee",
      role: "Styling Manager",
      description:
        "Tessa leads the styling team, carefully curating furniture and décor to ensure every home is presented beautifully for the market",
    },
    {
      name: "Caroline Anderson",
      role: "Business Development Manager",
      description:
        "Caroline works closely with agents and clients, ensuring every project runs smoothly and every property receives the attention it deserves",
    },
  ];
  return (
    <div>
      <h2 className="text-primary text-sm tracking-[0.2em] mb-3">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {team.map((member) => (
          <div className="bg-yellow-400/5 rounded-lg p-5" key={member.name}>
            <p className="text-[11px] tracking-widest uppercase font-semibold text-primary">
              {member.name}
            </p>
            <p className="text-xs leading-relaxed text-white/60 mb-3">
              {member.role}
            </p>
            <p className="text-xs leading-relaxed text-white/60">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
