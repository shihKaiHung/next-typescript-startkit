import * as React from "react";
import styled from "styled-components";
import {Container} from "../Common/commonLayout";

const Header: React.SFC<{}> = () => (
  <Wrap>
    <Container>
      <LogoWrap />
      <NavWrap>
        <a href="">购彩大厅</a>
        <a href="">手机购彩</a>
        <a href="">优惠活动</a>
        <a href="">走势图表</a>
        <a href="">开奖资讯</a>
        <a href="">在线客服</a>
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
  a {
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    margin-left: 30px;
    &:first-child {
      margin: 0;
    }
  }
`;

