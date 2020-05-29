import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';

const TableHeader = ({table_columns_names}) => {
    const Cells = table_columns_names.map((item, index) => {
        const bigLetter = item.charAt(0).toUpperCase();
        return <TableCell key={index}>{bigLetter + item.slice(1)}</TableCell>
    });

    return (
        <TableHead>
            <TableRow>
                {Cells}
                <TableCell>Action</TableCell>
            </TableRow>
        </TableHead>
    );
};

export default TableHeader;