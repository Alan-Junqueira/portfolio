import styled from 'styled-components';

type ConteinerProps = {
  backgroundColor: string;
};

export const Container = styled.section<ConteinerProps>`
  position: fixed;
  top: 0;
  left: 0;

  width: 245px;
  height: 100vh;
  background-color: ${(props) => props.backgroundColor};

  display: block;
  padding: 350px 30px 120px 30px;
  overflow-y: scroll;
  overflow-x: hidden;

  transition: all ease 0.3s;
`;

type PerfilFixedProps = {
  backgroundColor: string;
};

export const PerfilFixed = styled.div<PerfilFixedProps>`
  position: fixed;
  top: 0px;
  padding-top: 30px;

  width: 180px;
  height: 350px;
  background-color: #060e26;
  position: fixed;
  bottom: 0;
  z-index: 1;

  background-color: ${(props) => props.backgroundColor};
  transition: all ease 0.3s;

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #f23827;
    margin-top: 1rem;
  }
`;

type DeveloperFrontEndProps = {
  color: string;
};

export const DeveloperFrontEnd = styled.h4<DeveloperFrontEndProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  margin-top: 12px;

  color: ${(props) => props.color};
  transition: all ease 0.3s;
`;

export const ContainerPerfil = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 180px;
  border: 2.5px solid #04bf68;
  border-radius: 50%;
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const Line = styled.hr`
  border: 1px solid #727273;
`;

export const AboutMeArea = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;

type IdiomsProps = {
  color: string;
};

export const Idioms = styled.div<IdiomsProps>`
  margin-block: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  h2 {
    color: ${(props) => props.color};
    transition: all ease 0.3s;
  }
`;

export const IdomsCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

type TechnologiesProps = {
  color: string;
};

export const Technologies = styled.div<TechnologiesProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 2rem;

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1rem;
    color: ${(props) => props.color};
    transition: all ease 0.3s;
  }
`;

export const TechnologiesPercentage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

type VirtualCurriculumProps = {
  backgroundColor: string;
};

export const VirtualCurriculum = styled.div<VirtualCurriculumProps>`
  width: 235px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  position: fixed;
  bottom: 0;
  left: 0;

  transition: all ease .3s;
`;
