import { createContext, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";

export const SectionsContext = createContext();

export const SectionsProvider = ({ children }) => {
  const [visibleTwo, setVisibleTwo] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleTwo")) || false;
  });
  const [visibleThree, setVisibleThree] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleThree")) || false;
  });
  const [visibleFour, setVisibleFour] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleFour")) || false;
  });
  const [visibleFive, setVisibleFive] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleFive")) || false;
  });
  const [visibleSix, setVisibleSix] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleSix")) || false;
  });
  const [visibleSeven, setVisibleSeven] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleSeven")) || false;
  });
  const [visibleEight, setVisibleEight] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleEight")) || false;
  });
  const [visibleNine, setVisibleNine] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleNine")) || false;
  });
  const [visibleTen, setVisibleTen] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleTen")) || false;
  });
  const [visibleEleven, setVisibleEleven] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleEleven")) || false;
  });
  const [visibleTwelve, setVisibleTwelve] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleTwelve")) || false;
  });
  const [visibleThirteen, setVisibleThirteen] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleThirteen")) || false;
  });
  const [visibleFourteen, setVisibleFourteen] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleFourteen")) || false;
  });
  const [visibleFifteen, setVisibleFifteen] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleFifteen")) || false;
  });
  const [visibleSixteen, setVisibleSixteen] = useState(() => {
    return JSON.parse(localStorage.getItem("visibleSixteen")) || false;
  });

  useEffect(() => {
    localStorage.setItem("visibleTwo", JSON.stringify(visibleTwo));
  }, [visibleTwo]);

  useEffect(() => {
    localStorage.setItem("visibleThree", JSON.stringify(visibleThree));
  }, [visibleThree]);

  useEffect(() => {
    localStorage.setItem("visibleFour", JSON.stringify(visibleFour));
  }, [visibleFour]);

  useEffect(() => {
    localStorage.setItem("visibleFive", JSON.stringify(visibleFive));
  }, [visibleFive]);

  useEffect(() => {
    localStorage.setItem("visibleSix", JSON.stringify(visibleSix));
  }, [visibleSix]);

  useEffect(() => {
    localStorage.setItem("visibleSeven", JSON.stringify(visibleSeven));
  }, [visibleSeven]);

  useEffect(() => {
    localStorage.setItem("visibleEight", JSON.stringify(visibleEight));
  }, [visibleEight]);

  useEffect(() => {
    localStorage.setItem("visibleNine", JSON.stringify(visibleNine));
  }, [visibleNine]);

  useEffect(() => {
    localStorage.setItem("visibleTen", JSON.stringify(visibleTen));
  }, [visibleTen]);

  useEffect(() => {
    localStorage.setItem("visibleEleven", JSON.stringify(visibleEleven));
  }, [visibleEleven]);

  useEffect(() => {
    localStorage.setItem("visibleTwelve", JSON.stringify(visibleTwelve));
  }, [visibleTwelve]);

  useEffect(() => {
    localStorage.setItem("visibleThirteen", JSON.stringify(visibleThirteen));
  }, [visibleThirteen]);

  useEffect(() => {
    localStorage.setItem("visibleFourteen", JSON.stringify(visibleFourteen));
  }, [visibleFourteen]);

  useEffect(() => {
    localStorage.setItem("visibleFifteen", JSON.stringify(visibleFifteen));
  }, [visibleFifteen]);

  useEffect(() => {
    localStorage.setItem("visibleSixteen", JSON.stringify(visibleSixteen));
  }, [visibleSixteen]);

  return (
    <SectionsContext.Provider
      value={{
        visibleTwo,
        setVisibleTwo,
        visibleThree,
        setVisibleThree,
        visibleFour,
        setVisibleFour,
        visibleFive,
        setVisibleFive,
        visibleSix,
        setVisibleSix,
        visibleSeven,
        setVisibleSeven,
        visibleEight,
        setVisibleEight,
        visibleNine,
        setVisibleNine,
        visibleTen,
        setVisibleTen,
        visibleEleven,
        setVisibleEleven,
        visibleTwelve,
        setVisibleTwelve,
        visibleThirteen,
        setVisibleThirteen,
        visibleFourteen,
        setVisibleFourteen,
        visibleFifteen,
        setVisibleFifteen,
        visibleSixteen,
        setVisibleSixteen,
      }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

SectionsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export const useSections = () => {
  return useContext(SectionsContext);
};
