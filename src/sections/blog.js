/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import Masonry from 'react-masonry-component';
import SectionHeading from 'components/section-heading';
import BlogPost from 'components/cards/blog-post';
import thumb1 from 'assets/images/blog/1.png';
import thumb2 from 'assets/images/blog/2.png';
import thumb3 from 'assets/images/blog/3.png';
import thumb4 from 'assets/images/blog/4.png';

const data = [
  {
    id: 1,
    slug: '#how-to',
    thumbnail: thumb1,
    showDescription: true,
    title: `Education rights of children during war and armed conflicts`,
    description: `An essential right to citizenship, education has a vital role in safeguarding children from abuse or neglect`,
  },
  {
    id: 2,
    slug: '#how-to',
    thumbnail: null,
    showDescription: false,
    title: `Getting medical supplies where they’re needed most `,
    description: ``,
  },
  {
    id: 3,
    slug: '#how-to',
    thumbnail: thumb3,
    showDescription: false,
    title: `Education in Africa: What are we learning?`,
    description: ``,
  },
  {
    id: 4,
    slug: '#how-to',
    thumbnail: thumb2,
    showDescription: true,
    title: `UN Convention on the Rights of the Child`,
    description: `Every child has the right to rest and leisure, to engage in play and recreational activities`,
  },
  {
    id: 5,
    slug: '#how-to',
    thumbnail: thumb4,
    showDescription: false,
    title: `Nutrition as an engine for economic recovery`,
    description: ``,
  },
];

const masonryOptions = { originTop: true };

const Blog = () => {
  return (
    <Box as="section" id="blog" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Latest Newsfeed"
          title="Articles on we learn everyday"
        />
        <Masonry options={masonryOptions} sx={styles.postContainer}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [6, null, null, 9, null, 13],
    pb: [8, null, null, 9, null, 17],
    position: 'relative',
  },
  heading: {
    mb: [6, null, null, 9],
  },
};
