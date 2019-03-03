import React from 'react';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';

const ButtonsEdit = ({handle_save, handle_cancel, id}) => {
    const saveIceStyle = {
            backgroundColor: 'green',
            color: 'white'
        },
        cancelIconStyle = {
            marginLeft: 20,
            backgroundColor: 'tomato',
            color: 'white',
        };

    return (
      <React.Fragment>
          <Fab
              onClick={handle_save.bind(null, id)}
              style={saveIceStyle}
              size="small"
              label="Save">
              <SaveIcon/>
          </Fab>
          <Fab
              onClick={handle_cancel.bind(null, id)}
              style={cancelIconStyle}
              size="small"
              label="Cancel">
              <CancelIcon/>
          </Fab>
      </React.Fragment>
    );
};

ButtonsEdit.propTypes = {
    handle_save: PropTypes.func.isRequired,
    handle_cancel: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};

export default ButtonsEdit;