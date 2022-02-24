/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import worldMap from 'assets/images/world-map.png';

const WorldMap = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Where we have provided support"
          description="As of now we provide aid and support to over 100 countries and territories, helping millions of people in the process. With your help it will be more."
        />
        <Box as="figure" sx={styles.illustration}>
          <Image width="847" height="418" src={worldMap} alt="worldMap" />
        </Box>
      </Container>
    </Box>
  );
};

export default WorldMap;

const styles = {
  section: {
    pt: [8, null, null, 8, null, null, 10],
    pb: [6, null, null, 8, null, null, 14],
  },
  heading: {
    mb: [8, null, null, 11],
  },
  illustration: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};
