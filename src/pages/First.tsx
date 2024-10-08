import { useEffect } from 'react';
import styled from 'styled-components';
import logoImage from '../images/logo_bgremoved.png';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function FirstPage() {
  const navigate = useNavigate();
  const { isloggedIn } = useAuthStore();

  useEffect(() => {
    if (isloggedIn) navigate('/main');
  }, [isloggedIn, navigate]);

  return (
    <FirstPageContainer>
      <Logo src={logoImage} alt="logo" />
      <Description>
        <p>
          <strong>Doktori</strong>는 웹 브라우저에서 언제든 사용할 수 있는 독서
          기록 서비스입니다.
        </p>
        <p>기록은 언제 어디서나 확인해 볼 수 있습니다.</p>
      </Description>
      <button onClick={() => navigate('/auth/login')}>시작해보기</button>
    </FirstPageContainer>
  );
}

const FirstPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  gap: 15px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.second};

  button {
    padding: 15px;
    background-color: ${({ theme }) => theme.color.first};
    color: ${({ theme }) => theme.color.background};
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 15%;
    font-size: 1.2rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    transition: all 200ms ease-in-out;
  }

  button:hover {
    background-color: ${({ theme }) => theme.color.third};
  }
`;

const Logo = styled.img`
  width: 250px; /* 예시로 크기 조정 */
  height: auto;
  margin-bottom: 20px;
`;

const Description = styled.div`
  text-align: center;

  p {
    margin: 10px 0;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.color.background};
  }
`;
