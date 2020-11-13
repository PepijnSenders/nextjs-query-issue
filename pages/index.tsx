import React from 'react';

const Home: React.FC<{ hello: string }> = ({ hello }) => {
    return <h1>Hello {hello}</h1>
};

export const getServerSideProps = async ({ res }) => {
    res.setHeader('Cache-Control', 'public, max-age=7200')

    return {
        props: {
            hello: 'world',
        },
    };
}

export default Home;