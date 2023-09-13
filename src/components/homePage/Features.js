import React from "react";
import featureImg1 from '../../images/features/networkingwithnewentrepreneurs.jpg';
import featureImg2 from '../../images/features/collaborateonnewprojects.jpg';

const Features = () => {
  const data = [
    {
      id: 1,
      featureImg: featureImg1,
      featureOverLayTitle: "Connect with other entrepreneurs",
      featureOverLayDesc: "Find and connect with other entrepreneurs who share your interests and goals. ",
    },
    {
      id: 2,
      featureImg: featureImg2,
      featureOverLayTitle: "Find potential partners",
      featureOverLayDesc: "Search for potential partners based on their skills, experience, and interests. ",
    },
    {
      id: 3,
      featureImg: featureImg1,
      featureOverLayTitle: "Collaborate on projects",
      featureOverLayDesc: "Collaborate with other entrepreneurs on projects, ideas, and businesses. ",
    },
    {
      id: 4,
      featureImg: featureImg2,
      featureOverLayTitle: "Access resources and support",
      featureOverLayDesc: "Access a wealth of resources and support, such as articles, videos, and tutorials. ",
    },
    {
      id: 5,
      featureImg: featureImg1,
      featureOverLayTitle: "Build your network",
      featureOverLayDesc: "Grow your network of contacts and relationships with other entrepreneurs. ",
    },
    {
      id: 6,
      featureImg: featureImg2,
      featureOverLayTitle: "Get feedback and advice",
      featureOverLayDesc: "Get feedback and advice from other entrepreneurs, mentors, and experts. ",
    },
  ];

  const displayFeatures = data.map(
    (feature) => (
      <div className="featureImage">
        <img src={feature.featureImg} alt="" />
        <div className="overlay"></div>
        <div className="overLayDesc">
          <h3>{feature.featureOverLayTitle}</h3>
          <p>{feature.featureOverLayDesc}</p>
        </div>
      </div>
    )
  )


  return (
    <section className="FeaturesComponent">
      <div className="sectionHeader">
        <h3>Why Choose us?</h3>
      </div>

      <div className="featuresTop">
        <h2>The features that will help you connect, collaborate, and grow</h2>
        <p>Entrepreneur Connect is a platform that provides entrepreneurs with the tools and resources they need to connect with each other, find potential partners, collaborate on projects, and grow their businesses. With Entrepreneur Connect, you can:</p>
      </div>

      <div className="featuresImages">
        {displayFeatures}
      </div>
    </section>
  )
};

export default Features;