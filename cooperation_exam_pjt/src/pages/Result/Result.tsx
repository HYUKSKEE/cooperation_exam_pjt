import styled from 'styled-components';

function Result() {
  return (
    <Container>
      <Wrap>
        <Title>결과 보기</Title>
        <MockList>100점</MockList>
        <MockList>상황 대처 : 25</MockList>
        <MockList>소프트 스킬 : 25</MockList>
        <MockList>타 업무 이해도 : 25</MockList>
        <MockList>친화력 : 25</MockList>
        <MockList>당신은 협업의 "신" 입니다</MockList>
      </Wrap>
      <ShareLinkBox>
        <MockBtn />
        <MockBtn />
        <MockBtn />
        <MockBtn />
      </ShareLinkBox>
    </Container>
  );
}

export default Result;

const Container = styled.div`
  width: 70%;
`;

const Wrap = styled.div`
  width: 100%;
  margin: 0px 0px 30px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  background-color: #ebe9e9;
`;

const MockList = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const ShareLinkBox = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #ebe9e9;
`;

const MockBtn = styled.button`
  width: 40px;
  height: 40px;
  margin: 0px 10px 0px 10px;
  background-color: white;
  border: none;
  border-radius: 100%;
  cursor: pointer;

  :hover {
    transform: scale(1.03);
  }
`;
