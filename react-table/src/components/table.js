import React, {Component} from 'react';
import TableMui from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';

import TableItemRow from './table-row';
import TableHeader from './table-header';
import Toolbar from './table-toolbar';
import Empty from "./table-empty";

import "../assets/main.css"

export default class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            table_columns_names: [],
            table_data: [],
            edit_data: {},
            edit_mode_ids: []
        };
        this.handle_mode_change = this.handle_mode_change.bind(this);
        this.handle_cancel = this.handle_cancel.bind(this);
        this.handle_delete = this.handle_delete.bind(this);
        this.handle_input = this.handle_input.bind(this);
        this.handle_save = this.handle_save.bind(this);
        this.handle_add = this.handle_add.bind(this);
    }

    componentDidMount() {
        this.get_data();
    }

    handle_mode_change(id) {
        // if success answer from backend
        this.setState((state) => {
            state.edit_mode_ids.push(id);
            state.edit_data[id] = Object.assign({}, state.table_data.find((i) => i.id === id));
            return state;
        })
    }

    handle_cancel(id) {
        this.setState((state) => {
            state.edit_mode_ids.splice(state.edit_mode_ids.indexOf(id), 1);
            delete state.edit_data[id];
            return state;
        })
    }

    handle_save(id) {
        // if success answer from backend
        this.setState((state) => {
            const index = state.table_data.findIndex((i) => i.id === id);
            state.table_data[index] = Object.assign(state.table_data[index], state.edit_data[id]);
            delete state.edit_data[id];
            state.edit_mode_ids.splice(state.edit_mode_ids.indexOf(id), 1);
            return state;
        });
    }

    handle_delete(id) {
        // if success answer from backend
        this.setState((state) => {
            const index = state.table_data.findIndex((i) => i.id === id);
            state.table_data.splice(index, 1);
            state.edit_data[id] && delete state.edit_data[id];
            state.edit_mode_ids.indexOf(id) !== -1 && state.edit_mode_ids.splice(state.edit_mode_ids.indexOf(id), 1);
            return state;
        });
    }

    handle_add() {
        // if success answer from backend
        this.setState((state) => {
            let id = 1;
            if(state.table_data.length > 0) {
                id = state.table_data.slice(-1)[0].id + 1;
            }
            let new_element = {id};
            state.table_columns_names.forEach((item) => new_element[item] = "");
            state.table_data.push(new_element);
            state.edit_mode_ids.push(id);
            state.edit_data[id] = new_element;
            return state;
        });
    }

    handle_input(e, id) {
        const name = e.target.name,
            value = e.target.value;
        this.setState((state) => {
            state.edit_data[id][name] = value;
            return state;
        });
    }

    get_data() {
        const url = '/fake_server/json.txt';

        const settings = {
            "async": true,
            "crossDomain": true,
            "method": "GET",
        };

        fetch(url, settings)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.json().then((data) => {
                    this.setState((state) => {
                        state.table_data = data;
                        state.table_columns_names = Object.keys(data[0]).splice(1);
                        return state;
                    });
                });
            })
            .catch((error) => {
                console.log('Request failed', error);
            });
    }

    render() {
        const {table_data, edit_mode_ids, table_columns_names, edit_data} = this.state;

        const tableRows = table_data ? table_data.map((item) => {
            return (
                <TableItemRow
                    edit_mode={edit_mode_ids.indexOf(item.id) !== -1}
                    handle_mode_change={this.handle_mode_change}
                    table_columns_names={table_columns_names}
                    handle_cancel={this.handle_cancel}
                    handle_delete={this.handle_delete}
                    handle_input={this.handle_input}
                    handle_save={this.handle_save}
                    edit_data={edit_data[item.id]}
                    key={item.id}
                    {...item}/>
            );
        }) : null;

        return (
            <div>
                {tableRows ?
                    <div>
                        <Paper style={{marginBottom: 20, overflowX: "auto"}}>
                            <TableMui id="mainTable">
                                <TableHeader table_columns_names={table_columns_names}/>
                                <TableBody>
                                    {tableRows.length > 0 ? tableRows : <Empty length={table_columns_names.length + 1}/>}
                                </TableBody>
                            </TableMui>
                        </Paper>
                        <Toolbar handle_add={this.handle_add} />
                    </div>
                    :
                    "Wait, please, data is loading"
                }
            </div>
        );
    }
}