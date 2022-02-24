/** @jsx jsx */
import { Fragment } from 'react';
import { jsx, Box, Container, Grid } from 'theme-ui';
import TrackVisibility from 'react-on-screen';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import StatItem from 'components/cards/stat-item';
import icon1 from 'assets/images/services/1.png';
import icon2 from 'assets/images/services/2.png';
import icon3 from 'assets/images/services/3.png';
import icon4 from 'assets/images/services/4.png';
import icon5 from 'assets/images/services/5.png';
import icon6 from 'assets/images/services/6.png';

const data = {
  services: [
    {
      id: 1,
      icon: icon1,
      title: 'Sponsor A Life',
      desc: `Help changing lives of those who can't have basic human needs`,
      link: 'javascript:void(0)',
    },
    {
      id: 2,
      icon: icon2,
      title: 'Donate to A Cause',
      desc: `Directly impact millions of people in need and be part of creating change`,
      link: 'javascript:void(0)',
    },
    {
      id: 3,
      icon: icon3,
      title: 'Heal Mother Earth',
      desc: `Take the time to heal the world and be a part of the change`,
      link: 'javascript:void(0)',
    },
    {
      id: 4,
      icon: icon4,
      title: 'Disaster Response',
      desc: `Restore, redevelop, and revitalize communities impacted by disaster`,
      link: 'javascript:void(0)',
    },
    {
      id: 5,
      icon: icon5,
      title: 'Protect Our Children',
      desc: `Protect our children from abuse, violence, and childhood neglect`,
      link: 'javascript:void(0)',
    },
    {
      id: 6,
      icon: icon6,
      title: 'Volunteer with us',
      desc: `Become a volunteer to help us help our communities and our future`,
      link: 'javascript:void(0)',
    },
  ],
  stats: [
    {
      id: 1,
      value: 250,
      suffix: 'M',
      title: 'people impacted',
    },
    {
      id: 2,
      value: 27654,
      suffix: '+',
      title: 'projects',
    },
    {
      id: 3,
      value: 750,
      suffix: 'M USD',
      title: 'donated',
    },
    {
      id: 4,
      value: 120000,
      suffix: '+',
      title: 'volunteers',
    },
  ],
};

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          slogan="Designed to do good"
          title="How You Can Help Us"
        />
        <Grid sx={styles.serviceGrid}>
          {data.services.map((item) => (
            <Service key={item.id} service={item} />
          ))}
        </Grid>
        <Grid sx={styles.statsGrid}>
          {data.stats.map((stat) => (
            <TrackVisibility key={stat.id} once>
              <StatItem stat={stat} />
            </TrackVisibility>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    pt: [8, null, null, 8, 10, null, 15],
    pb: [7, null, null, null, 10, null, 14],
  },
  serviceGrid: {
    backgroundColor: 'white',
    boxShadow: '0px 0px 25px rgba(54, 91, 125, 0.04)',
    borderRadius: 10,
    gap: [8, null, null, '60px 40px', '50px 30px', '60px 40px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(1, 250px)',
      null,
      null,
      'repeat(2, 260px)',
      'repeat(3, 258px)',
      'repeat(3, 300px)',
    ],
    pt: [8, null, null, 16],
    pb: [8, null, null, 15],
  },
  statsGrid: {
    gap: [6, null, null, '60px 30px', '60px 80px', '60px 110px'],
    justifyContent: 'center',
    gridTemplateColumns: [
      'repeat(2, 120px)',
      null,
      null,
      'repeat(4, 130px)',
      'repeat(4, 150px)',
    ],
    mt: [10],
  },
};
