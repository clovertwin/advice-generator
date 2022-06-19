import Image from "next/image";
import styled from "styled-components";

const AdviceNumber = styled.p`
  letter-spacing: 1.5px;
  color: hsl(150, 100%, 66%);
  font-weight: bold;
`;

const Advice = styled.h1`
  font-weight: bold;
  font-size: 24px;
  color: hsl(193, 38%, 86%);
  padding: 0 22px 0 22px;
`;

const MobileImage = styled.div`
  display: block;

  @media only screen and (min-width: 975px) {
    display: none;
  }
`;

const DesktopImage = styled.div`
  display: none;

  @media only screen and (min-width: 975px) {
    display: block;
  }
`;

export default function Body({ adviceNum, advice }) {
  return (
    <>
      <AdviceNumber>{`ADVICE #${adviceNum}`}</AdviceNumber>
      <Advice>{advice}</Advice>
      <MobileImage>
        <Image
          alt="mobile divider icon"
          src="/images/pattern-divider-mobile.svg"
          width={295}
          height={16}
        />
      </MobileImage>
      <DesktopImage>
        <Image
          alt="desktop divider icon"
          src="/images/pattern-divider-desktop.svg"
          width={444}
          height={16}
        />
      </DesktopImage>
    </>
  );
}
