import { createContext, useState, useContext } from "react";

export const SectionsContext = createContext();

export const SectionsProvider = ({ children }) => {
  const [visibleTwo, setVisibleTwo] = useState(false);
  const [visibleThree, setVisibleThree] = useState(false);
  const [visibleFour, setVisibleFour] = useState(false);
  const [visibleFive, setVisibleFive] = useState(false);
  const [visibleSix, setVisibleSix] = useState(false);
  const [visibleSeven, setVisibleSeven] = useState(false);
  const [visibleEight, setVisibleEight] = useState(false);
  const [visibleNine, setVisibleNine] = useState(false);
  const [visibleTen, setVisibleTen] = useState(false);
  const [visibleEleven, setVisibleEleven] = useState(false);
  const [visibleTwelve, setVisibleTwelve] = useState(false);
  const [visibleThirteen, setVisibleThirteen] = useState(false);
  const [visibleFourteen, setVisibleFourteen] = useState(false);
  const [visibleFifteen, setVisibleFifteen] = useState(false);
  const [visibleSixteen, setVisibleSixteen] = useState(false);

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

export const useSections = () => {
  return useContext(SectionsContext);
};
