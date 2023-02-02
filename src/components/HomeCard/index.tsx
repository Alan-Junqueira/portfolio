import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import {
  DiCss3,
  DiJavascript,
  DiGit,
  DiNodejsSmall,
  DiSass
} from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiTypescript } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import {
  HomeCardContainer,
  CardLogo,
  DescriptionCardContainer
} from './styled';

interface IHomeCard extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  color: string;
  backgroundColor?: string;
  description: string;
}

const HomeCard = ({
  label,
  color,
  backgroundColor,
  description,
  ...props
}: IHomeCard) => {
  return (
    <div {...props}>
      <HomeCardContainer
        partialBgColor={color}
        background={backgroundColor}
        draggable
      >
        <div></div>
        <CardLogo borderColor={color}>
          <div>
            {label === 'html' && <AiFillHtml5 size={70} color={color} />}
            {label === 'css' && <DiCss3 size={70} color={color} />}
            {label === 'javascript' && <DiJavascript size={70} color={color} />}
            {label === 'git' && <DiGit size={70} color={color} />}
            {label === 'reactjs' && <GrReactjs size={70} color={color} />}
            {label === 'typescript' && <SiTypescript size={50} color={color} />}
            {label === 'nextjs' && <TbBrandNextjs size={70} color={color} />}
            {label === 'nodejs' && <DiNodejsSmall size={70} color={color} />}
            {label === 'github' && <AiFillGithub size={70} color={color} />}
            {label === 'sass' && <DiSass size={70} color={color} />}
          </div>
        </CardLogo>
        <DescriptionCardContainer buttonColor={color}>
          <span>{label.toUpperCase()}</span>
          <p>{description}</p>

          <button>Veja Mais</button>
        </DescriptionCardContainer>
      </HomeCardContainer>
    </div>
  );
};

export { HomeCard };
