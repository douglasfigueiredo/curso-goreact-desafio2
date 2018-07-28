import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: -ms-flexbox;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-box;
  display: box;

  flex-direction: row;
  -webkit-box-orient: horizontal;
  -moz-box-orient: horizontal;
  -ms-box-orient: horizontal;
  box-orient: horizontal;
`;

export const Content = styled.div`
  flex-direction: column;
  -webkit-box-flex: 1;
`;

export const Sidebar = styled.div`
  background: #fff;
  position: relative;
  width: 320px;
  height: 100%;
  padding: 30px;
  -ms-flex: 0 100px;
  -webkit-box-flex: 0;
  -moz-box-flex: 0;
  -ms-box-flex: 0;
  box-flex: 0;
  box-shadow: 0px 0px 30px 0px #ccc;
`;

export const Menu = styled.div`
  ul li {
    display: flex;
    padding-top: 30px;

    button {
      display: flex;
      vertical-align: center;
      width: 100%;
      background: transparent;
      border: none;
      cursor: pointer;

      i {
        font-size: 35px;
        color: #ddd;
        line-height: 45px;
      }
      img {
        height: 45px;
      }
      .content-text {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 5px 20px;
        text-align: left;
        strong {
          font-size: 16px;
          color: #000;
        }
        small {
          font-size: 14px;
          color: #666;
          text-transform: capitalize;
        }
      }
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  padding: 30px;
  background: #fff;
  box-shadow: 20px 0px 30px 0px #ccc;

  .content-header {
    display: flex;
    flex-direction: row;
    width: 100%;

    img {
      width: 45px;
      height: 45px;
    }
    .content-text {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      strong {
        font-size: 24px;
      }
      small {
        font-size: 14px;
        color: #666;
        text-transform: capitalize;
      }
    }
  }
`;

export const IssuesContainer = styled.div`
  flex-direction: column;
  -webkit-box-flex: 1;
  padding: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;
  }
  ul li {
    display: flex;
    margin: 10px;
    background: #fff;
    font-size: 13px;
    width: 340px;
    padding: 20px;
    align-items: center;
    box-shadow: 0px 0px 10px 0px #ccc;

    .redondo {
      /* Agora a mágica */
      border-radius: 50%;
    }

    img {
      height: 64px;
    }

    .contentText {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
    }

    strong {
      font-weight: bold;
      font-size: 16px;
      white-space: nowrap;
      width: 210px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    small {
      color: #666;
      margin: 10px 0;
      font-size: 13px;
    }

    i {
      font-weight: bold;
      margin-right: 5px;
    }

    a {
      font-weight: 600;
      background: #b286d1;
      border-radius: 5px;
      width: 130px;
      font-size: 12px;
      text-align: center;
      color: #fff;
      text-transform: uppercase;
      padding: 5px;
    }
  }
`;
