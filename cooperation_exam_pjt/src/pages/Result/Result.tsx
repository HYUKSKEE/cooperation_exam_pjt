import styled from 'styled-components';

function Result() {
  return (
    <Container>
      <Wrap>
        <Title>결과 보기</Title>
      </Wrap>
    </Container>
  );
}

export default Result;

const Container = styled.div`
  width: 70%;
  background-color: #ebe9e9;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ;
`;

const Title = styled.h1`
  font-size: 30px;
`;
