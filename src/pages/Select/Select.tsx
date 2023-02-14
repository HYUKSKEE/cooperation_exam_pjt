import { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { postUserData } from '../../api/api';

function Select() {
  const [examType, setExamType] = useState('');
  const navigate = useNavigate();
  const selectExam = (e: React.MouseEvent<HTMLButtonElement>) => {
    switch (e.currentTarget.innerHTML) {
      case '백':
        setExamType('backend');
        break;

      case '프':
        setExamType('frontend');
        break;
    }
  };

  const goQuestionPage = () => {
    postUserData(1, '김진혁스키', examType, 0);
    navigate(`/${examType}/1`);
  };
  return (
    <Container>
      <SelectBtnBox>
        <SelectBtn
          onClick={selectExam}
          active={examType === 'backend' ? true : false}
        >
          백
        </SelectBtn>
        <SelectBtn
          onClick={selectExam}
          active={examType === 'frontend' ? true : false}
        >
          프
        </SelectBtn>
      </SelectBtnBox>
      {examType !== '' && <NextBtn onClick={goQuestionPage}>NEXT</NextBtn>}
    </Container>
  );
}

export default Select;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SelectBtnBox = styled.div`
  margin: 0px 0px 50px 0px;
`;

const SelectBtn = styled.button<{ active: boolean }>`
  width: 125px;
  height: 125px;
  margin: 0px 10px 0px 10px;
  font-size: 36px;
  color: white;
  background-color: ${({ active }) => (active ? '#81c147' : 'orange')};
  border: none;
  border-radius: 15px;
  cursor: pointer;

  :hover {
    transform: scale(1.02);
  }
`;

const NextBtn = styled.button`
  width: 270px;
  height: 100px;
  font-size: 36px;
  color: white;
  background-color: #2b5ff1;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
