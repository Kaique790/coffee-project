import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: start;

    h1 {
      font-size: 3rem;
      font-family: "Baloo 2";
      font-weight: bolder;
      line-height: 1.3;

      color: ${(props) => props.theme["gray-700"]};
    }

    h1 + p {
      font-size: 1.25rem;
      font-weight: normal;

      color: ${(props) => props.theme["gray-500"]};

      margin-top: 1rem;
    }

    img {
      height: 22.5rem;
    }
  }
`;

export const ItemsContainer = styled.ul`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.5rem;

  & > li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;

const ItemIcon = styled.div`
  color: ${(props) => props.theme.white};
  display: flex;

  padding: 0.5rem;
  border-radius: 99999px;
`;

export const CartItem = styled(ItemIcon)`
  background-color: ${(props) => props.theme["yellow-700"]};
`;

export const PackageItem = styled(ItemIcon)`
  background-color: ${(props) => props.theme["gray-500"]};
`;

export const TimerItem = styled(ItemIcon)`
  background-color: ${(props) => props.theme["yellow-500"]};
`;

export const CoffeeItem = styled(ItemIcon)`
  background-color: ${(props) => props.theme["purple-400"]};
`;
