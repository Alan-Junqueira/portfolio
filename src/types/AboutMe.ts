import { Certificate } from './Certificate';
import { Experience } from './Experience';
import { IdiomDomain } from './IdiomsDomain';
import { informatinsAboutMe } from './InformationsAboutMe';
import { Language } from './Language';
import { Portfolio } from './Portfolio';

export type AboutMeType = {
  name: string;
  informatinsAboutMe: informatinsAboutMe[];
  programingLanguages: Language[];
  portfolio: Portfolio[];
  idiomsDomain: IdiomDomain[];
  profissionalExperiences: Experience[];
  certificates: Certificate[]
};
