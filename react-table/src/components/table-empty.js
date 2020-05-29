import React from 'react';
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableRow from "@material-ui/core/TableRow/TableRow";

const Empty = ({length}) => {
    return (
        <TableRow>
            <TableCell align="center" colSpan={length}>There are no data, please add one</TableCell>
        </TableRow>
    );
};

export default Empty;