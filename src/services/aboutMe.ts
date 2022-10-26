import { AboutMeType } from "../types/AboutMe";

export const fetchAboutMe = async () => {
  const aboutMe: AboutMeType[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/about-me`
  ).then((res) => res.json());
  return aboutMe;
};
