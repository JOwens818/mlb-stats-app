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
  Button,
  OverflowMenu,
  OverflowMenuItem
} from 'carbon-components-react';



const MLBDataTable = (props) => {


  const viewPlayerProfile = (event) => {
    props.sendPlayerID(event.target.parentNode.id);
  }


    if (typeof props.tblHeaders === 'undefined' || typeof props.tblRows === 'undefined' || props.loading === true)
        return <DataTableSkeleton/>;


    return (
        <div className='topMargin'>
          <DataTable
            useZebraStyles={true}
            rows={props.tblRows}
            overflowMenuOnHover={true}
            headers={props.tblHeaders} isSortable>

              {({ rows, headers, getHeaderProps, getRowProps,
                getTableProps, onInputChange, getToolbarProps }) => (
              <TableContainer >
                
                  {
                    !props.profileMode &&
                    <TableToolbar {...getToolbarProps()}>
                      <TableToolbarContent>
                        <TableToolbarSearch
                          onChange={onInputChange}
                        />
                      </TableToolbarContent>
                    </TableToolbar>
                  }
                  
                <Table {...getTableProps()}>
                  <TableHead>
                      <TableRow>
                        {headers.map((header) => (
                            <TableHeader key={header.key} {...getHeaderProps({ header })}>
                                {header.header}
                            </TableHeader>
                        ))}
                        <TableHeader>

                        </TableHeader>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {rows.map((row) => (
                      <TableRow key={row.id} {...getRowProps({ row })}
                        onClick={(e) => {
                          row.isSelected = true;
                        }}
                      >
                        {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                        ))}
                        <TableCell>
                          {
                            !props.profileMode &&
                            <OverflowMenu flipped>
                              <OverflowMenuItem 
                                id={row.id}
                                itemText="View Player Profile" 
                                onClick={viewPlayerProfile}
                              />
                            </OverflowMenu>
                          }
                        </TableCell>
                      </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              )}
          </DataTable>
        </div>
 
    );
 
};

export default MLBDataTable;