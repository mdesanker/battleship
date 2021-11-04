"use strict";

const Player = (name) => {
  const getName = () => {
    return name;
  };

  return { getName };
};

export { Player };
