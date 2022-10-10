import Head from 'next/head';
import metadata from '../data/metadata';
import Nav from './Nav';

const Container = props => {
  return (
    <div className={'w-full flex flex-col items-center p-3'}>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header className={'w-full max-w-3xl flex flex-row justify-between items-center my-1'}>
        <Nav />
      </header>
      <main>{props.children}</main>
    </div>
  );
};

export default Container;
