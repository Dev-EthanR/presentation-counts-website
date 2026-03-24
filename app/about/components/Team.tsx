import React from "react";

const Team = () => {
  const team = [
    { name: "Ray Rodgers", role: "Director" },
    { name: "Tessa Lee", role: "Styling Manager" },
    { name: "Caroline Anderson", role: "Business Development Manager" },
  ];
  return (
    <div>
      <h2 className="text-yellow-400/80 text-sm tracking-[0.2em] mb-3">
        Meet the Team
      </h2>
      <div className="grid grid-cols-3 gap-x-4">
        {team.map((member) => (
          <div className="bg-yellow-400/5 rounded-lg p-5" key={member.name}>
            <p className="text-[11px] tracking-widest uppercase font-semibold text-yellow-400 mb-2">
              {member.name}
            </p>
            <p className="text-xs leading-relaxed text-white/60">
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
