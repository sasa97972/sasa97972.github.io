import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRowMui from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import Fab from '@material-ui/core/Fab';

import Content from './table-cell-content';
import Edit from './table-cell-edit';

const TableRow = ({
                      table_columns_names,
                      handle_mode_change,
                      handle_cancel,
                      handle_delete,
                      handle_input,
                      handle_save,
                      edit_mode,
                      edit_data,
                      ...row_data
                  }) => {

    const TableCells = table_columns_names.map((item, index) => {
        return (
            <TableCell key={index}>
                {edit_mode ?
                    <Edit
                        id={row_data.id}
                        value={edit_data[item]}
                        name={item}
                        handle_input={handle_input} />
                    :
                    <Content>{row_data[item]}</Content>}
            </TableCell>
        );
    });

    return (
        <TableRowMui>

            {TableCells}

            <TableCell>
                <div>
                {edit_mode ?
                    <span>
                        <Fab
                            onClick={handle_save.bind(null, row_data.id)}
                            style={{backgroundColor: 'green', color: 'white'}}
                            size="small"
                            label="Save">
                            <SaveIcon/>
                        </Fab>
                        <Fab
                            onClick={handle_cancel.bind(null, row_data.id)}
                            style={{backgroundColor: 'tomato', color: 'white', marginLeft: 20}}
                            size="small"
                            label="Cancel">
                            <CancelIcon/>
                        </Fab>
                    </span>
                    :
                    <Fab
                        onClick={handle_mode_change.bind(null, row_data.id)}
                        color="primary"
                        size="small"
                        label="Edit">
                        <EditIcon/>
                    </Fab>
                }
                <Fab
                    onClick={handle_delete.bind(null, row_data.id)}
                    style={{marginLeft: 20}}
                    color="secondary"
                    size="small"
                    label="Delete">
                    <DeleteIcon/>
                </Fab>
                </div>
            </TableCell>

        </TableRowMui>
    );
};

export default TableRow;