import styled from 'styled-components';

export const Style = styled.div`
  .table {
    background-color: #ffffff;
    border-radius: 10px;
    padding: 1rem;
    h5 {
      color: #2569a5;
    }
    &-data {
      table {
        width: 100%;
        margin-top: 20px;
        thead {
          background: #3783c6;
          font-size: 20px;
          line-height: 21px;
          text-align: center;
          letter-spacing: 0.214286px;

          /* Gray 2 */

          color: #fff;
          th {
            padding: 10px;
          }
        } //thead

        tbody {
          text-align: center;
          font-size: 18px;
          line-height: 21px;
          text-align: center;
          letter-spacing: 0.214286px;

          /* Gray 2 */

          color: #4f4f4f;
          tr:hover {
            background-color: #e5e5e5;
          }
          td {
            padding: 10px 0px;
            .status-new {
              padding: 8px;
              background-color: #f1f6fe;
              color: #71a1f7;
              border-radius: 6px;
            }
            .status-draft {
              padding: 8px;
              background-color: #fdf7e5;
              color: #eaaa00;
            }
            .status-completed {
              padding: 8px;
              background-color: #f4f9f3;
              color: #91c788;
            }
          }
        } //tbody
      } //table
    } //data
  } //table
`;
