import { useEffect } from 'react';
import styled from 'styled-components';

function Exam() {
  useEffect(() => {}, []);
  return (
    <Container>
      <Wrap>
        <Question>Question</Question>
        <Answer>dd</Answer>
        <ButtonBox>
          <Btn>dd</Btn>
          <Btn>dd</Btn>
        </ButtonBox>
      </Wrap>
    </Container>
  );
}

export default Exam;

const Container = styled.div``;
const Wrap = styled.div``;
const Question = styled.div``;
const Answer = styled.button``;
const ButtonBox = styled.div``;
const Btn = styled.button``;
