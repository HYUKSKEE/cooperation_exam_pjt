import { useEffect, useState } from 'react';
import styled from 'styled-components';

function Exam() {
  const [examList, setExamList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(res => res.json())
      .then(setExamList);
  }, []);
  return (
    <Container>
      <Wrap>
        {/* {examList.map(list => {
          return (
            <>
              <Question>{list.question}</Question>
              {list.answer.map(answer => {
                return <Answer key={answer.id}>{answer.text}</Answer>;
              })}
            </>
          );
        })} */}

        {/* test html structure */}
        <Question>{examList?.[0]?.question}</Question>
        {examList?.[0]?.answer.map(answer => {
          return (
            <Answer key={answer.id}>
              {answer.id}. {answer.text}
            </Answer>
          );
        })}
        <ButtonBox>
          <Btn>{`< PREV`}</Btn>
          <Btn>{`NEXT >`}</Btn>
        </ButtonBox>
      </Wrap>
    </Container>
  );
}

export default Exam;

const Container = styled.div`
  width: 40%;
  border-radius: 44px;
  background-color: #ebe9e9;
`;
const Wrap = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Question = styled.div`
  margin: 20px 0px 20px 0px;
`;
const Answer = styled.button`
  margin: 0px 0px 10px 0px;
  padding: 0px 0px 0px 10px;
  width: 100%;
  height: 35px;
  text-align: left;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: orange;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
const ButtonBox = styled.div`
  width: 100%;
  margin: 10px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Btn = styled.button`
  margin: 10px 0px 20px 0px;
  padding: 0px 10px 0px 10px;
  height: 30px;
  text-align: left;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: #2b5ff1;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;
