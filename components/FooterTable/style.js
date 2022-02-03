import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-top: 30px;
  .prev-one {
    background-color: #d2eff3;
    border: none;
    width: 28px;
    height: 28px;
    color: #71a1f7;
    font-size: 14px;
    margin: 5px;
    cursor: pointer;
  }
  .page-count {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      strong {
        border: none;
        width: 28px;
        height: 28px;
        color: #71a1f7;
        font-size: 14px;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .current {
        background-color: #71a1f7;
        color: #d2eff3;
        width: 28px;
        height: 28px;
        font-size: 14px;
        margin: 5px;
      }
    }
  }
`;
