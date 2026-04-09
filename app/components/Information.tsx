import React from "react";
import Table from "../about/components/Table";
import Team from "../about/components/Team";
import Values from "../about/components/Values";

const Information = () => {
  return (
    <div className="font-robotomono">
      <p className="text-center text-base leading-relaxed text-white/80 mb-12">
        With over 20 years of experience, Presentation Counts specialises in
        styling homes for sale across Melbourne. From apartments and townhouses
        to family homes and developments, we create beautiful spaces that
        attract buyers.
      </p>

      <Table />
      <Values />
      <Team />
    </div>
  );
};

export default Information;
