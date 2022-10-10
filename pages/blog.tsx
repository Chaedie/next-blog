import { InferGetStaticPropsType } from 'next';
import BlogPost from '../components/BlogPost';
import Container from '../components/Container';
import { allPosts } from 'contentlayer/generated';

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <div className={'mt-10 flex flex-col'}>
        {posts.map(post => (
          <BlogPost
            date={post.date}
            title={post.title}
            des={post.description}
            slug={post._raw.flattenedPath}
            key={post._id}
          />
        ))}
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const post = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
};

export default Blog;
