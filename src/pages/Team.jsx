import React from "react";
import MobileTitle from "../components/MobileTitle";
import TeamCard from "../components/TeamCard";
import { team } from "../utils/teamContants";

const Team = () => {
  return (
    <section id="team">
      <div className="flex h-screen flex-col items-center justify-center md:pt-0">
        <MobileTitle title="Team" />

        <div className="container flex w-full flex-col justify-between overflow-hidden pt-24 lg:justify-center xl:mt-14 xl:pt-0 items-center">
          <p className="font-chakraPetch text-2xl uppercase text-accent-color">
            Team
          </p>
          <h2 className="mb-12">Hard Working Robots</h2>
          <div className="w-full h-full flex justify-center">
            <TeamCard name={team.names.name1} role={team.roles.role1} />
            <TeamCard name={team.names.name2} role={team.roles.role2} />
            <TeamCard name={team.names.name3} role={team.roles.role3} />
            <TeamCard name={team.names.name4} role={team.roles.role4} />
            <TeamCard name={team.names.name5} role={team.roles.role5} />
            <TeamCard name={team.names.name6} role={team.roles.role6} />
          </div>
          <div className="mx-auto flex  max-w-fit animate-slide overflow-x-auto 2xl:hidden">
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
