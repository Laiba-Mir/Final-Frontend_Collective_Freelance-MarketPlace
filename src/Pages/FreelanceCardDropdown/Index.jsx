import React from "react";
import Card from "../../components/FreelancerCards";
import JobDropdwon from "../../svg components/index";
import "./style.scss";

const FreelancerCards = ()=>{
  

  return (
    <div className="container">
      <div className="header">
        <h3 className="headerItem">
          Skills
          <JobDropdwon />
        </h3>
        <h3 className="headerItem">
          Categories
          <JobDropdwon />
        </h3>
        <h3 className="headerItem">
          Availability
          <JobDropdwon />
        </h3>
        <h3 className="headerItem">
          Location
          <JobDropdwon />
        </h3>
        <h3 className="headerItem lastHeaderItem">
          Ratings
          <JobDropdwon />
        </h3>
      </div>

      {/* <div className="cardsWrapper">
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="cardWrapper">
            <Card freelancer={freelancer} />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default FreelancerCards;
