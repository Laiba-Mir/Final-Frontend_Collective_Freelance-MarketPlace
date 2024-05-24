import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import Card from "../../components/Proposals/Proposalcard";

function Proposal() {
  const freelancerData = {
    name: "John Doe",
    location: "New York, USA",
    field: "Web Development",
    rate: 30,
    successRate: 95,
    amountEarned: 5000,
    skills: ["HTML", "CSS", "JavaScript"],
    description:
      "Experienced web developer with expertise in frontend technologies.",
    picture: "/path/to/freelancer-picture.jpg",
  };

  return (
    <div>
      <NewHeader />
      <h1>Proposals</h1>
      {/* Render the Card component and pass the freelancer data as props */}
      <Card freelancer={freelancerData} />
    </div>
  );
}

export default Proposal;
