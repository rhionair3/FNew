import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';

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
    state = {
        ftype: '',
        name: 'hai',
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    render() {
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
                                <TextField required id="price" label="Harga Satuan" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="cardNumber" label="Jumlah Gerobak" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                                <TextField required multiline rows="4" label="Jumlah Gerobak" fullWidth />
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
                                <TextField required id="price" label="Harga Satuan" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="cardNumber" label="Jumlah Gerobak" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                                <TextField required multiline rows="4" label="Jumlah Gerobak" fullWidth />
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
                                <FormControl style={{width:'100%'}}>
                                <InputLabel>Pilih Pengiriman</InputLabel>
                                <Select
                                    value={this.state.ftype}
                                    onChange={this.handleChange}
                                    inputProps={{
                                    name: 'ftype',
                                    }}
                                >
                                    <MenuItem value="">
                                    <em>Pilih</em>
                                    </MenuItem>
                                    <MenuItem value={20}>Diambil</MenuItem>
                                    <MenuItem value={30}>Diantar</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required id="tglPengambilan" label="Tanggal Pengambilan" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={12}>
                                <TextField required id="namaPenerima" label="Nama Penerima" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required id="noTelp" label="Nomor Telepon Penerima" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <TextField required id="noTelp" label="Nomor Telepon Seluler Penerima" fullWidth />
                            </Grid>
                            <Grid item xs={12} md={12} style={{marginBottom: 20}}>
                                <TextField required multiline rows="4" label="Alamat penerima" fullWidth />
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