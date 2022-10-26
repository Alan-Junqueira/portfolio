export type IdiomDomainTipe = {
  idiom: string;
  domain: number;
};

export const fetchIdiomsDomain = async () => {
  const idioms: IdiomDomainTipe[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/idioms-domain`
  ).then((res) => res.json());
  return idioms;
};

export const idiomsDomain = async () => {
  const idioms = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/idioms-domain`
  ).then((res) => res.json());
  return idioms
};