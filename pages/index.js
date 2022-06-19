import { useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import { nanoid } from "nanoid";
import Card from "../components/Card";
import Body from "../components/Body";
import Button from "../components/Button";
import { getAdvice } from "../lib/getAdvice";

const URL = "https://api.adviceslip.com/advice";

const MainWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(218, 23%, 16%);
`;

export async function getStaticProps() {
  const newFetchData = await getAdvice(URL);
  const uniqueId = nanoid();
  const { id, advice } = newFetchData.slip;
  return {
    props: {
      newData: { id, advice, uniqueId },
    },
  };
}

export default function Home({ newData }) {
  const [newAdvice, setNewAdvice] = useState(newData);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Head>
        <title>Advice Generator</title>
        <meta name="description" content="Advice Generator" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <MainWrapper>
        <Card>
          <Body
            adviceNum={!isLoading ? newAdvice.id : "..."}
            advice={!isLoading ? newAdvice.advice : "..."}
          />
          <Button
            url={URL}
            getNewAdvice={setNewAdvice}
            setIsLoading={setIsLoading}
          />
        </Card>
      </MainWrapper>
    </>
  );
}
