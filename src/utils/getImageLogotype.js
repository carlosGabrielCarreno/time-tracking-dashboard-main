import exercise from "../../images/icon-exercise.svg";
import play from "../../images/icon-play.svg";
import study from "../../images/icon-study.svg";
import work from "../../images/icon-work.svg";
import social from "../../images/icon-social.svg";
import selfCare from "../../images/icon-self-care.svg";

export const getImageLogotype = (name) => {
  switch (name) {
    case "work":
      return work;
    case "study":
      return study;
    case "play":
      return play;
    case "exercise":
      return exercise;
    case "social":
      return social;
    case "self-care":
      return selfCare;
    default:
      break;
  }
};
