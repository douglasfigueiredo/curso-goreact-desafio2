import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 260px;
  display: flex;
  padding-bottom: 25px;
  border-bottom: 1px solid #ddd;

  input {
    flex: 1;
    height: 45px;
    padding: 0 10px;
    background: #eee;
    text-align: center;
    font-size: 15px !important;
    color: #444;
    border-radius: 3px;

    border: ${({ withError }) => (withError ? '2px solid #F00' : 0)};
  }

  button {
    width: 45px;
    height: 45px;
    padding: 0 15px;
    margin-left: 10px;
    background: #59ea9a;
    color: #fff;
    border: 0;
    font-size: 15px;
    font-weight: bold;
    border-radius: 3px;

    &:hover {
      background: #52d89f;
      cursor: pointer;
    }
  }
`;
