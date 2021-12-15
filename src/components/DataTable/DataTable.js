import React, { useState } from 'react';

import {
  DataTable,
  DataTableSkeleton,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableSelectAll,
  TableSelectRow,
  Pagination,
  TableToolbar,
  TableBatchAction,
  TableBatchActions,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarAction,
  TableToolbarMenu,
  Button
} from 'carbon-components-react';
import { Delete16 as Delete } from '@carbon/icons-react';
import { Save16 as Save } from '@carbon/icons-react';


const MLBDataTable = (props) => {

    const [firstRowIndex, setFirstRowIndex] = useState(0);
    const [currentPageSize, setCurrentPageSize] = useState(25);


    if (typeof props.tblHeaders === 'undefined' || typeof props.tblRows === 'undefined' || props.loading === true)
        return <DataTableSkeleton/>;


    return (
        <div className='topMargin'>
          <DataTable
            useZebraStyles={true}
            rows={
              props.tblRows.slice(
                  firstRowIndex,
                  firstRowIndex + currentPageSize
              )}
            headers={props.tblHeaders} isSortable>

              {({ rows, headers, getHeaderProps, getRowProps,
                getTableProps, getSelectionProps, getToolbarProps,
                getBatchActionProps, selectedRows, batchActionClick }) => (
              <TableContainer >
                <TableToolbar {...getToolbarProps()}>
                  <TableBatchActions {...getBatchActionProps()}>
                    <TableBatchAction
                      tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                      renderIcon={Delete}
                      //onClick={batchActionClick(selectedRows)}
                      >
                      Delete
                    </TableBatchAction>
                    <TableBatchAction
                      tabIndex={getBatchActionProps().shouldShowBatchActions ? 0 : -1}
                      renderIcon={Save}
                      //onClick={batchActionClick(selectedRows)}
                      >
                      Update
                    </TableBatchAction>
                  </TableBatchActions>
                  <TableToolbarContent
                    aria-hidden={getBatchActionProps().shouldShowBatchActions}>
                    <TableToolbarSearch
                      persistent="true"
                      tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                      //onChange={onInputChange}
                    />
                    <TableToolbarMenu
                      tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}>
                      <TableToolbarAction onClick={() => alert('Exporting to CSV')}>
                        Export to CSV
                      </TableToolbarAction>
                      <TableToolbarAction onClick={() => alert('Exporting to XLSX')}>
                        Export to XLSX
                      </TableToolbarAction>
                    </TableToolbarMenu>
                    <Button
                      tabIndex={getBatchActionProps().shouldShowBatchActions ? -1 : 0}
                      onClick={() => alert('Create new record modal')}
                      size="small"
                      kind="primary">
                      Create Record
                    </Button>
                  </TableToolbarContent>
                </TableToolbar>
                <Table {...getTableProps()}>
                  <TableHead>
                      <TableRow>
                        <TableSelectAll {...getSelectionProps()} />
                        {headers.map((header) => (
                            <TableHeader key={header.key} {...getHeaderProps({ header })}>
                                {header.header}
                            </TableHeader>
                        ))}
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                      <TableRow key={row.id} {...getRowProps({ row })}>
                        <TableSelectRow
                          {...getSelectionProps({ row })}
/*                             onSelect={(evt) => {
                            action('TableSelectRow onSelect')(evt);
                            getSelectionProps({ row }).onSelect(evt);
                          }} */
                        />
 
                        {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                      </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              )}
          </DataTable>
          <Pagination
              totalItems={props.tblRows.length}
              backwardText="Previous page"
              forwardText="Next page"
              pageSize={currentPageSize}
              pageSizes={[10, 25, 50, 100]}
              itemsPerPageText="Items per page"
              onChange={({ page, pageSize }) => {
                  if (pageSize !== currentPageSize) {
                  setCurrentPageSize(pageSize);
                  }
                  setFirstRowIndex(pageSize * (page - 1));
              }}
              />  
        </div>
 
    );
 
};

export default MLBDataTable;