import styled from "styled-components";

const CardBackgroundWrapper = styled.div`
  background-color: hsl(217, 19%, 24%);
  border-radius: 12px;
  height: 350px;
  width: 90%;
  max-width: 350px;
  margin-bottom: 10px;

  @media only screen and (min-width: 975px) {
    max-width: 600px;
  }
`;

// change justify-content to space-between
const CardWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  height: 400px;
  width: 90%;
  max-width: 350px;
  padding-top: 55px;
  z-index: 1;

  @media only screen and (min-width: 975px) {
    max-width: 600px;
    padding-right: 40px;
    padding-left: 40px;
  }
`;

export default function Card({ children }) {
  return (
    <>
      <CardBackgroundWrapper />
      <CardWrapper>{children}</CardWrapper>
    </>
  );
}
