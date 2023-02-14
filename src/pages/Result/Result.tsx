import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Result() {
  const [resultList, setResultList] = useState([]);
  const params = useParams();

  const totalScore = resultList
    .map((el: { score: number }) => el.score)
    .reduce((acc, cur) => acc + cur, 0);

  const USER_NAME = 'Hyukskee';

  const gradeLevel = (score: number, user: string) => {
    if (score === 0) return;

    if (score < 16) {
      return <MockList>{`${user}님은 꼭 혼자 일하세요..하..`}</MockList>;
    } else if (score < 30) {
      return <MockList>{`${user}님은 저희와 함께할 수 없습니다.`}</MockList>;
    } else if (score < 60) {
      return <MockList>{`${user}님은 같이 일하고 싶은 사람입니다.`}</MockList>;
    } else {
      return <MockList>{`${user}님은 협업의 신 입니다.`}</MockList>;
    }
  };

  useEffect(() => {
    fetch(`http://localhost:4000/${params.type}`)
      .then((res) => res.json())
      .then((data) =>
        setResultList(
          data.map(
            (list: { isChecked: number; answer: { id: number }[] }) =>
              list.answer.filter((el) => el.id === list.isChecked)[0],
          ),
        ),
      );
  }, []);

  return (
    <Container>
      <Wrap>
        <Title>결과 보기</Title>
        <MockList>{gradeLevel(totalScore, USER_NAME)}</MockList>
        {/* <MockList>상황 대처 : 25</MockList>
        <MockList>소프트 스킬 : 25</MockList>
        <MockList>타 업무 이해도 : 25</MockList>
        <MockList>친화력 : 25</MockList>
        <MockList>당신은 협업의 "신" 입니다</MockList> */}
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
  width: 100%;
  margin: 20px 0px 10px 0px;
  text-align: center;
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
