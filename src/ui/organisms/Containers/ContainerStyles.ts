"use client"
import styled from 'styled-components';

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
  gap: 20px; 
  margin: 16px auto; 
  padding: 20px;
  width: 100%;
  box-sizing: border-box; 
`;