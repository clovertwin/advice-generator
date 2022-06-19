import Image from "next/image";
import styled from "styled-components";
import { nanoid } from "nanoid";
import { getAdvice } from "../lib/getAdvice";

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: hsl(150, 100%, 66%);
  color: hsl(193, 38%, 86%);
  border: none;
  border-radius: 50%;
  transition: background-color 500ms ease-in-out;

  &:hover {
    filter: drop-shadow(0 0 0.75rem hsl(150, 100%, 66%));
  }

  &:active {
    transform: scale(0.9);
  }
`;

export default function Button({ url, getNewAdvice, setIsLoading }) {
  const handleClick = async () => {
    setIsLoading(true);
    const newAdvice = await getAdvice(url);
    const uniqueId = nanoid();
    const { id, advice } = newAdvice.slip;
    getNewAdvice({ id, advice, uniqueId });
    setIsLoading(false);
  };

  return (
    <ButtonWrapper onClick={handleClick}>
      <Image
        alt="dice icon"
        src="/images/icon-dice.svg"
        width={24}
        height={24}
      />
    </ButtonWrapper>
  );
}
