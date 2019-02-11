import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import format from 'date-fns/format';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    paddingPaper: {
        padding: 5
    }
});

class CartDetail extends React.Component {
    constructor(props) {
        super(props);
        const getDate = new Date();
        this.state = {
            ftype: '',
            name: 'hai',
            selectedDate: format(getDate, 'YYYY-MM-DD'),
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    render() {
        const { selectedDate } = this.state;
        return (
            <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Detail Gerobak
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding:20, marginTop: 20}}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                    Gerobak Dorong
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="price" label="Harga Satuan" fullWidth margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="cardNumber" label="Jumlah Gerobak" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                                <TextField required multiline rows="4" label="Jumlah Gerobak" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper style={{padding:20, marginTop: 20}}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                    Gerobak Sepeda
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="price" label="Harga Satuan" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="cardNumber" label="Jumlah Gerobak" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                                <TextField required multiline rows="4" label="Jumlah Gerobak" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Paper style={{padding:20, marginTop: 20}}>
                        <Grid container spacing={24}>
                            <Grid item xs={12} md={12}>
                                <Typography variant="h6" gutterBottom>
                                    Informasi Pengiriman Gerobak
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField
                                    value={this.state.ftype}
                                    onChange={this.handleChange}
                                    select
                                    inputProps={{
                                    name: 'ftype',
                                    }}
                                    margin = "dense"
                                    variant = "outlined"
                                    fullWidth
                                >
                                    <MenuItem value="">
                                    <em>Pilih</em>
                                    </MenuItem>
                                    <MenuItem value={20}>Diambil</MenuItem>
                                    <MenuItem value={30}>Diantar</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <DatePicker
                                        value={selectedDate}
                                        onChange={this.handleDateChange} 
                                        required 
                                        id="tglPengambilan" 
                                        label="Tanggal Pengambilan" 
                                        fullWidth 
                                        margin = "dense"
                                        variant = "outlined"
                                    />
                                </MuiPickersUtilsProvider>
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="namaPenerima" label="Nama Penerima" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required id="noTelp" label="Nomor Telepon Penerima" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required id="noTelp" label="Nomor Telepon Seluler Penerima" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                            <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                                <TextField required multiline rows="4" label="Alamat penerima" fullWidth  margin="dense" variant="outlined"/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            </React.Fragment>
        );
    }
}

CartDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartDetail);