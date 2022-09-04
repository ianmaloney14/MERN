import React, { useState } from "react";

const PersonCard = (props) => {
  const { firstName, lastName, age, hairColor } = props;
  const [getAge, setGetAge] = useState(age);
  return (
    <div>
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {getAge}</p>
      <p>Hair Color: {hairColor}</p>
      <button onClick={(event) => setGetAge(getAge + 1)}>
        Birthday Button for: {firstName} {lastName}
      </button>
    </div>
  );
};

export default PersonCard;
