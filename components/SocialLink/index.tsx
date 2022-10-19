import * as C from './styled'
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
    <C.Container href="">
      {icon === 'instagram' && <InstagramLogo color={color} />}
      {icon === 'facebook' && <FacebookLogo color={color} />}
      {icon === 'linkedin' && <LinkedinLogo color={color} />}
      {icon === 'twitter' && <TwitterLogo color={color} />}
      {icon === 'whatsapp' && <WhatsappLogo color={color} />}
    </C.Container>
  );
};
