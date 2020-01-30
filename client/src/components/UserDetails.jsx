import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {};
      }


  render() {
      console.log(this.props);
    let tooltipInfo = JSON.parse(this.props.tooltip);
    let insurance = tooltipInfo.insurance;
    let banking = tooltipInfo.banking;
    let investing = tooltipInfo.investing;
    return (
      <div>
                <Tooltip title={<React.Fragment>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow className="user-details-tip">
                                    <TableCell >Interest</TableCell>
                                    <TableCell>Affinity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow className="user-details-tip">
                                    <TableCell>
                                        Insurance
                                    </TableCell>
                                    <TableCell>
                                        {insurance}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="user-details-tip">
                                    <TableCell>
                                        Banking
                                    </TableCell>
                                    <TableCell>
                                        {banking}
                                    </TableCell>
                                </TableRow>
                                <TableRow className="user-details-tip">
                                    <TableCell>
                                        Investing
                                    </TableCell>
                                    <TableCell>
                                        {investing}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </React.Fragment>} interactive placement="left">
                    <Avatar style={{ backgroundColor: this.props.color }}>{this.props.init}</Avatar>
                </Tooltip>
      </div>
    );
  }
}

export default UserDetails;


