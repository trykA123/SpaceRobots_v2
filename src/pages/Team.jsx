import React from "react";
import TeamCard from "../components/TeamCard";
import TypewriteParagraph from "../components/TypewriteParagraph";
import { team } from "../utils/teamContants";

const Team = () => {
  return (
    <section id="team">
      <div className="flex flex-col items-center justify-center xl:my-12 xl:py-4">
        <div className="container flex w-full flex-col items-center justify-between overflow-hidden pt-24 lg:justify-center xl:mt-14 xl:pt-0">
          <TypewriteParagraph
            firstWord="Incoming transmission..."
            secondWord="...initialize"
            thirdWord="Team"
          />
          <h2 className="mx-auto mb-12 text-center">Hard Working Robots</h2>
          <div className="flex h-full w-full flex-col justify-center lg:flex-row">
            <TeamCard
              name={team.names.name1}
              role={team.roles.role1}
              image={team.images.image1}
            />
            <TeamCard
              name={team.names.name2}
              role={team.roles.role2}
              image={team.images.image2}
            />
            <TeamCard
              name={team.names.name3}
              role={team.roles.role3}
              image={team.images.image3}
            />
            <TeamCard
              name={team.names.name4}
              role={team.roles.role4}
              image={team.images.image4}
            />
            <TeamCard
              name={team.names.name5}
              role={team.roles.role5}
              image={team.images.image5}
            />
            <TeamCard
              name={team.names.name6}
              role={team.roles.role6}
              image={team.images.image6}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
