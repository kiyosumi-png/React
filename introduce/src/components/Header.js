import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <MenueGroup>
        <div>Model S</div>
        <div>Model X</div>
        <div>Model Y</div>
      </MenueGroup>
      <RightMenue>
        <div>a</div>
        <div>a</div>
      </RightMenue>
    </Container>
  )
}

export default Header

const Container = styled.div` 
  color: red;
  text-decoreation: underline
`;

const MenueGroup = styled.div`
  color: red;
  text-decoreation: underline
`;
const RightMenue = styled.div`
  color: red;
  text-decoreation: underline
`;