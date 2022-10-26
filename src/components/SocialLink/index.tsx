import * as C from './styled';
import React from 'react';
import {
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo,
  LinkedinLogo,
  FacebookLogo
} from 'phosphor-react';

type Props = {
  icon: 'instagram' | 'facebook' | 'linkedin' | 'twitter' | 'whatsapp';
  color: string;
};

export const SocialLink = ({ icon, color }: Props) => {
  return (
    <>
      {icon === 'instagram' && (
        <C.Container
          target={'_blank'}
          href={'https://www.instagram.com/allann.junnkh/'}
        >
          <InstagramLogo color={color} />
        </C.Container>
      )}

      {icon === 'facebook' && (
        <C.Container
          target={'_blank'}
          href={'https://www.facebook.com/Allann.Junnkh/'}
        >
          <FacebookLogo color={color} />
        </C.Container>
      )}
      {icon === 'linkedin' && (
        <C.Container
          target={'_blank'}
          href={'https://www.linkedin.com/in/alan-junqueira/'}
        >
          <LinkedinLogo color={color} />
        </C.Container>
      )}
      {icon === 'twitter' && (
        <C.Container target={'_blank'} href={'https://twitter.com/yaohuram'}>
          <TwitterLogo color={color} />
        </C.Container>
      )}
      {icon === 'whatsapp' && (
        <C.Container
          target={'_blank'}
          href={
            'https://api.whatsapp.com/message/ZX4Q6ANGVS42I1?autoload=1&app_absent=0'
          }
        >
          <WhatsappLogo color={color} />
        </C.Container>
      )}
    </>
  );
};
