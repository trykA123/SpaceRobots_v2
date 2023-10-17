import React from "react";
import MobileTitle from "../components/MobileTitle";
import TeamCard from "../components/TeamCard";
import { team } from "../utils/teamContants";

const Team = () => {
  return (
    <section id="team">
      <div className="h-screen roadmap-gradient flex flex-col items-center justify-center pt-24 md:pt-0">
        <MobileTitle title="Team" />
        <div className="flex flex-col w-full max-w-7xl h-[80%] justify-between overflow-hidden pt-24 xl:pt-0 xl:mt-10">
          <div className="flex md:grid md:grid-cols-2 xl:grid-cols-3 h-full mx-auto animate-slide">
            <TeamCard name={team.names.name1} role={team.roles.role1} />
            <TeamCard name={team.names.name2} role={team.roles.role2} />
            <TeamCard name={team.names.name3} role={team.roles.role3} />
            <TeamCard name={team.names.name4} role={team.roles.role4} />
            <TeamCard name={team.names.name5} role={team.roles.role5} />
            <TeamCard name={team.names.name6} role={team.roles.role6} />
            <TeamCard name={team.names.name1} role={team.roles.role1} />
            <TeamCard name={team.names.name2} role={team.roles.role2} />
            <TeamCard name={team.names.name3} role={team.roles.role3} />
            <TeamCard name={team.names.name4} role={team.roles.role4} />
            <TeamCard name={team.names.name5} role={team.roles.role5} />
            <TeamCard name={team.names.name6} role={team.roles.role6} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
