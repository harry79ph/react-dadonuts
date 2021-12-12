import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #cf6e9e;
  color: #fff;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  padding: 1rem 0;
  width: 250px;
`;

export const ProductImg = styled.img`
  height: 200px;
  display: block;
  min-width: 200px;
  max-width: 100%;
  margin: 0 auto;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 2rem 0;
  text-align: center;
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 1.6rem;
  border: none;
  border-radius: 1px;
  background: #ff00b2;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    color: #000;
  }
`;