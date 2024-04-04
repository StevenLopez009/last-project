import { Link } from "react-router-dom";
import "./Mapa.css";
import { useSections } from "./context/SectionContext";

const ComponentSections = () => {
  const {
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
  } = useSections();

  return (
    <div className="sections">
      <Link to="/seccion1" className="seccion seccion__one">
        <section className="section1">seccion 1</section>
      </Link>
      {visibleTwo && (
        <Link to="/seccion2" className="seccion seccion__two">
          <section className="section2">seccion 2</section>
        </Link>
      )}
      {visibleThree && (
        <Link to="/seccion3" className="seccion seccion__three">
          <section className="section3">seccion 3</section>
        </Link>
      )}
      {visibleFour && (
        <Link to="/seccion4" className="seccion seccion__four">
          <section className="section4">seccion 4</section>
        </Link>
      )}
      {visibleFive && (
        <Link to="/seccion5" className="seccion seccion__five">
          <section className="section5">seccion 5</section>
        </Link>
      )}
      {visibleSix && (
        <Link to="/seccion6" className="seccion seccion__six">
          <section className="section6">seccion 6</section>
        </Link>
      )}
      {visibleSeven && (
        <Link to="/seccion7" className="seccion seccion__seven">
          <section className="section7">seccion 7</section>
        </Link>
      )}
      {visibleEight && (
        <Link to="/seccion8" className="seccion seccion__eight">
          <section className="section8">seccion 8</section>
        </Link>
      )}
      {visibleNine && (
        <Link to="/seccion9" className="seccion seccion__nine">
          <section className="section9">seccion 9</section>
        </Link>
      )}
      {visibleTen && (
        <Link to="/seccion10" className="seccion seccion__ten">
          <section className="section10">seccion 10</section>
        </Link>
      )}
      {visibleEleven && (
        <Link to="/seccion11" className="seccion seccion__eleven">
          <section className="section11">seccion 11</section>
        </Link>
      )}
      {visibleTwelve && (
        <Link to="/seccion12" className="seccion seccion__twelve">
          <section className="section12">seccion 12</section>
        </Link>
      )}
      {visibleThirteen && (
        <Link to="/seccion13" className="seccion seccion__thirteen">
          <section className="section13">seccion 13</section>
        </Link>
      )}
      {visibleFourteen && (
        <Link to="/seccion14" className="seccion seccion__fourteen">
          <section className="section14">seccion 14</section>
        </Link>
      )}
      {visibleFifteen && (
        <Link to="/seccion15" className="seccion seccion__fifteen">
          <section className="section15">seccion 15</section>
        </Link>
      )}
      {visibleSixteen && (
        <Link to="/seccion16" className="seccion seccion__sixteen">
          <section className="section16">seccion 16</section>
        </Link>
      )}
    </div>
  );
};

export default ComponentSections;
