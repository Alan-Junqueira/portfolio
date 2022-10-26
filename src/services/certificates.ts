export type CertificateType = {
  banner: string;
  name: string;
  alt: string;
};

export const fetchCertificates = async () => {
  const certificates: CertificateType[] = await fetch(
    `${process.env.NEXT_PUBLIC_APIURL}/api/certificates`
  ).then((res) => res.json());
  return certificates;
};
