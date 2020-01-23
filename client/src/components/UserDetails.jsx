import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';


class UserDetails extends Component {



  render() {

    return (
      <div>
                <Tooltip title={this.props.tooltip} interactive placement="left">
                    <Avatar style={{ backgroundColor: this.props.color }}>{this.props.init}</Avatar>
                </Tooltip>
      </div>
    );
  }
}

export default UserDetails;


