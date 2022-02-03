export const COLUMNS = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Symbol',
    accessor: 'symbol',
  },
  {
    Header: 'Rank',
    accessor: 'rank',
  },
  {
    Header: 'Type',
    accessor: 'type',
  },
  {
    Header: 'Active',
    accessor: 'isActive',
    Cell: ({ value }) => {
      if (value) {
        return 'Active';
      } else {
        return 'Non-Active';
      }
    },
  },
];
