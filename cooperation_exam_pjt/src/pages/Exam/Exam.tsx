import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Exam() {
  const [examList, setExamList] = useState<examListData>();
  const [isLoading, setIsLoading] = useState(true);
  const [checkedNum, setCheckedNum] = useState<number>();
  const params = useParams();
  const navigate = useNavigate();

  console.log('id:', params);
  type examListData = {
    id: Number;
    title: string;
    question: string;
    imageUrl: string;
    answer: string[];
    isChecked: number;
  };

  const postAnswer = (CheckNum: number) => {
    setCheckedNum(CheckNum);

    fetch(`http://localhost:4000/${params.type}/${params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        isChecked: CheckNum,
      }),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
  };

  const goNextLink = () => {
    {
      Number(params) < 15
        ? navigate(`/question/${Number(params) + 1}`)
        : navigate('/result');
    }
  };

  const goPrevLink = () => {
    navigate(`/question/${Number(params) - 1}`);
  };

  useEffect(() => {
    fetch(`http://localhost:4000/frontend/${Number(params.id)}`)
      .then((res) => res.json())
      .then((data) => (setExamList(data), setCheckedNum(data.isChecked)))
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
              {`Q${examList?.id} . `}
              {examList?.question}
            </Question>
            {examList?.imageUrl && <Image src={examList?.imageUrl} alt="" />}
            {examList?.answer?.map((answer: any) => {
              return (
                <Answer
                  key={answer.id}
                  onClick={() => postAnswer(answer.id)}
                  active={answer.id === checkedNum ? true : false}
                >
                  {answer.id}. {answer.text}
                </Answer>
              );
            })}
            <ButtonBox>
              {Number(params.id) !== 1 && (
                <Btn onClick={goPrevLink}>{`< PREV`}</Btn>
              )}
              {checkedNum !== 0 && <Btn onClick={goNextLink}>{`NEXT >`}</Btn>}
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

const Answer = styled.button<{ active: boolean }>`
  margin: 0px 0px 10px 0px;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: ${({ active }) => (active ? '#81c147' : 'orange')};
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  margin: 10px 0px 20px 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Btn = styled.button`
  margin: 20px 50px;
  padding: 10px;
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
