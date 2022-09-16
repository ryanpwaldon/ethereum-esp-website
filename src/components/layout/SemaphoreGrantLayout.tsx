import { Box, Stack } from '@chakra-ui/react';
import { FC } from 'react';

import semaphoreHero from '../../../public/images/semaphore-meadow.png';
import semaphoreHeroMobile from '../../../public/images/semaphore-meadow-mobile.png';

import { GrantsHero } from '../UI';

// Workaround to add a dimmed background on the header to make contrast with the
// hero image
const DimLayer = () => (
  <Box
    display={{ base: 'none', md: 'block' }}
    position='absolute'
    top={0}
    left={0}
    right={0}
    width='full'
    height='130px'
    bg='rgba(255,255,255,0.4)'
    zIndex={1}
  />
);

export const SemaphoreGrantLayout: FC = ({ children }) => {
  return (
    <Box>
      <DimLayer />
      <GrantsHero
        colorBrandConstant='semaphoreGrantHero'
        desktopImage={{
          alt: 'People making shadow plays in a field of grass',
          src: semaphoreHero
        }}
        mobileImage={{
          alt: 'People making shadow plays in a field of grass',
          src: semaphoreHeroMobile
        }}
        title='Semaphore Community Grant Round'
      >
        TODO?
      </GrantsHero>

      <Stack>{children}</Stack>
    </Box>
  );
};
