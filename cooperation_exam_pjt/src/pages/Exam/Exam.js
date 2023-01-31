import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Exam() {
  const [examList, setExamList] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [checkedNum, isCheckedNum] = useState(0);
  const params = useParams();

  const checkAnswer = CheckNum => {
    isCheckedNum(CheckNum);
  };

  const postAnswer = () => {
    if (checkedNum === 0) return;
    console.log(`post ${checkedNum}번`);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/frontend/${params.id}`)
      .then(res => res.json())
      .then(data => setExamList(data))
      .then(() => setIsLoading(false));
  }, [params, isLoading]);

  return (
    <Container>
      <Wrap>
        {isLoading ? (
          <Loading>Loading..</Loading>
        ) : (
          <>
            <Question>
              {`Q${examList.id} . `}
              {examList?.question}
            </Question>
            {examList?.answer?.map(answer => {
              return (
                <Answer key={answer.id} onClick={() => checkAnswer(answer.id)}>
                  {answer.id}. {answer.text}
                </Answer>
              );
            })}
            <ButtonBox>
              <Link
                to={`/question/${params.id > 1 ? Number(params.id) - 1 : 1}`}
              >
                <Btn>{`< PREV`}</Btn>
              </Link>
              <Link
                to={`/question/${params.id < 15 ? Number(params.id) + 1 : 15}`}
              >
                <Btn onClick={postAnswer}>{`NEXT >`}</Btn>
              </Link>
            </ButtonBox>
          </>
        )}
      </Wrap>
    </Container>
  );
}

export default Exam;

const Container = styled.div`
  width: 70%;
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

const Loading = styled.h1`
  margin: 30px;
  font-size: 30px;
  font-weight: 900;
  color: white;
`;

const Question = styled.div`
  margin: 20px 0px 20px 0px;
  white-space: pre-wrap;
`;

const Answer = styled.button`
  margin: 0px 0px 10px 0px;
  padding: 10px;
  width: 100%;
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
