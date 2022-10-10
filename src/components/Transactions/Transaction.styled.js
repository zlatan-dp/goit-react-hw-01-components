import styled from 'styled-components';

export const Wrap = styled.div`
  background-color: white;
  width: 500px;
  margin: 10px auto;
  box-shadow: 3px 3px 11px 0px rgba(0, 0, 0, 0.38);
  padding-bottom: 20px;
  padding-top: 20px;
`;

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
`;

export const TableBody = styled.tbody``;

export const TableHead = styled.thead`
  background-color: rgb(103, 190, 245);
  color: white;
  text-transform: uppercase;
`;

export const TableHeadData = styled.th`
  padding: 10px 20px;
  border: 1px solid #2a2a2a;
`;

export const TableRowData = styled.tr`
  text-align: center;
  :nth-child(even) {
    background-color: rgb(221, 220, 222);
  }
`;

export const TableData = styled.td`
  padding: 10px 20px;
  border: 1px solid #2a2a2a;
`;
