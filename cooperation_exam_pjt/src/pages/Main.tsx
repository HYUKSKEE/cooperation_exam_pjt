import { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <Container>
      <MainWrap>
        <Image src="images/hands.jpg" alt="" />
        <Input type="text" placeholder="이름 입력" />
        <Title> 당신의 협업 능력은 몇 점인가요?</Title>
        <Link to="/select">
          <Button>시작하기</Button>
        </Link>
      </MainWrap>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MainWrap = styled.div`
  display: flex;
  margin: 50px 0px 50px 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50px;
`;

const Input = styled.input`
  width: 240px;
  height: 50px;
  margin: 18px 0px 0px 0px;
  border-radius: 10px;
  border: 1px solid #2b5ff1;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 18px;
  margin: 18px 0px 0px 0px;
`;

const Button = styled.button`
  width: 240px;
  height: 50px;
  margin: 18px 0px 0px 0px;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #2b5ff1;
  cursor: pointer;
`;
