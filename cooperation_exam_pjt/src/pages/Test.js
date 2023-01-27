import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Test() {
  return (
    <Container>
      <Header />
      <MainWrap>
        <Image src="images/hands.jpg" alt="" />
        <Input type="text" placeholder="이름 입력" />
        <Title> 당신의 협업 능력은 몇 점인가요?</Title>
        <Button>시작하기</Button>
      </MainWrap>
      <Footer />
    </Container>
  );
}

export default Test;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const MainWrap = styled.div`
  display: flex;
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
  width: 220px;
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
  width: 220px;
  height: 50px;
  margin: 18px 0px 0px 0px;
  font-size: 20px;
  color: white;
  border: none;
  border-radius: 10px;
  background-color: #2b5ff1;
  cursor: pointer;
`;
