import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { string } from 'yargs';
import Test from './Exam';

let container: any = null;
beforeEach(() => {
  // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // 기존의 테스트 환경을 정리합니다.
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders user data', async () => {
  type fakeData = {
    id: number;
    answer: string[];
    imageUrl: string;
  };

  const fakeData = {
    id: 1,
    answer: [
      { id: 1, text: '가능합니다 불가능하지 않아요 해봐요.' },
      { id: 2, text: '못해 안해 불가능해.' },
      { id: 3, text: '님이 해보셈.' },
      { id: 4, text: '오늘 그만 두겠습니다.' },
      { id: 5, text: '제가 알려줄테니까 해보실?' },
    ],
    imageUrl:
      'https://d1orkkc34keaka.cloudfront.net/images/2022/06/21/1655785851_9EDB26BqzeGDKUunhVJBSNKMtGWGrFSTVrhaQuAe.jpeg',
  };

  const spiedGetData = jest.spyOn(global, 'fetch');

  spiedGetData.mockImplementation((): any =>
    Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }),
  );

  // resolved promises를 적용하려면 `act()`의 비동기 버전을 사용하세요.
  await act(async () => {
    render(<Test />, container);
  });

  expect(container.querySelector('summary').textContent).toBe(fakeData.id);
  expect(container.querySelector('strong').textContent).toBe(fakeData.answer);
  expect(container.querySelector('strong').textContent).toBe(fakeData.imageUrl);
  //expect(container.textContent).toContain(fakeData.address);

  // 테스트가 완전히 격리되도록 mock을 제거하세요.
  spiedGetData.mockRestore();
});
