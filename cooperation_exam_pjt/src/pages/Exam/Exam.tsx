import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Exam() {
  const [examList, setExamList] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const [checkedNum, isCheckedNum] = useState(0);
  const { id } = useParams();

  type examList = {
    id: number;
    answer: string[];
    imageUrl: string;
  };

  const checkAnswer = (CheckNum: number) => {
    isCheckedNum(CheckNum);
  };

  const postAnswer = () => {
    if (checkedNum === 0) return;
    console.log(`post ${checkedNum}번`);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/frontend/${Number(id)}`)
      .then((res) => res.json())
      .then((data) => setExamList(data))
      .then(() => setIsLoading(false));
  }, [id, isLoading]);

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
            {examList.imageUrl && <Image src={examList.imageUrl} alt="" />}
            {examList?.answer?.map((answer: any) => {
              return (
                <Answer key={answer.id} onClick={() => checkAnswer(answer.id)}>
                  {answer.id}. {answer.text}
                </Answer>
              );
            })}
            <ButtonBox>
              <Link to={`/question/${Number(id) > 1 ? Number(id) - 1 : 1}`}>
                <Btn>{`< PREV`}</Btn>
              </Link>
              <Link
                to={`/question/${Number(id) < 15 ? Number(id) + 1 : '/result'}`}
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

const Image = styled.img`
  width: 100%;
  margin: 0px 0px 20px 0px;
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
    transform: scale(1.02);
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
