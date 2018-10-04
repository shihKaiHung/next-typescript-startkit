import * as React from "react";
import styled from "styled-components";
import {Container} from "../Common/commonLayout";

const Header: React.SFC<{}> = () => (
  <Wrap>
    <Container>
      <LogoWrap />
      <NavWrap>
        购彩大厅
      </NavWrap>
    </Container>
  </Wrap>
);

export default Header;

const Wrap = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c81823;
`;

const LogoWrap = styled.div`
  width: 300px;
  flex: 1 1 300px;
`;

const NavWrap = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
`;
