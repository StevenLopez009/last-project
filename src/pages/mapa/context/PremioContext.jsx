import { createContext, useState, useContext, useEffect } from "react";
export const PremioContext = createContext();
import PropTypes from "prop-types";

export const usePremio = () => {
  return useContext(PremioContext);
};

export const PremioProvider = ({ children }) => {
  const [premio, setPremio] = useState(() => {
    return JSON.parse(localStorage.getItem("premiOne")) || false;
  });
  const [premioTwo, setPremioTwo] = useState(() => {
    return JSON.parse(localStorage.getItem("premiTwo")) || false;
  });
  const [premioThree, setPremioThree] = useState(() => {
    return JSON.parse(localStorage.getItem("premiThree")) || false;
  });
  const [premioFour, setPremioFour] = useState(() => {
    return JSON.parse(localStorage.getItem("premiFour")) || false;
  });

  useEffect(() => {
    localStorage.setItem("premiOne", JSON.stringify(premio));
  }, [premio]);

  useEffect(() => {
    localStorage.setItem("premiTwo", JSON.stringify(premioTwo));
  }, [premioTwo]);

  useEffect(() => {
    localStorage.setItem("premiThree", JSON.stringify(premioThree));
  }, [premioThree]);

  useEffect(() => {
    localStorage.setItem("premiFour", JSON.stringify(premioFour));
  }, [premioFour]);

  const updatePremio = (newPremio) => {
    setPremio(newPremio);
  };

  const updatePremioTwo = (newPremio) => {
    setPremioTwo(newPremio);
  };

  const updatePremioThree = (newPremio) => {
    setPremioThree(newPremio);
  };

  const updatePremioFour = (newPremio) => {
    setPremioFour(newPremio);
  };

  return (
    <PremioContext.Provider
      value={{
        premio,
        updatePremio,
        premioTwo,
        updatePremioTwo,
        premioThree,
        updatePremioThree,
        premioFour,
        updatePremioFour,
      }}
    >
      {children}
    </PremioContext.Provider>
  );
};

PremioProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
