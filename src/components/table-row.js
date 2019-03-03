import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRowMui from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';

import Content from './table-cell-content';
import Edit from './table-cell-edit';
import ButtonsEdit from './table-buttons-edit';

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
                        handle_input={handle_input}/>
                    :
                    <Content>{row_data[item]}</Content>}
            </TableCell>
        );
    });

    return (
        <TableRowMui>

            {TableCells}

            <TableCell>
                <div style={{display: "flex"}}>
                    {edit_mode ?
                        <ButtonsEdit
                            id={row_data.id}
                            handle_save={handle_save}
                            handle_cancel={handle_cancel}
                        />
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

TableRow.propTypes = {
    table_columns_names: PropTypes.arrayOf(PropTypes.string),
    handle_mode_change: PropTypes.func.isRequired,
    handle_cancel: PropTypes.func.isRequired,
    handle_delete: PropTypes.func.isRequired,
    handle_save: PropTypes.func.isRequired,
    handle_input: PropTypes.func.isRequired,
};

export default TableRow;