import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
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


class FranchiseOwnerDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        open: true,
        id: "", name:"", address:"", mobileNo: "", status: "",
        };
        console.log(this.props.df);
    }
    handleChange = () => event => {
        const state = this.state;
        state[event.target.name] = event.target.value;
        this.setState(state);
    // console.log(event.target.name);
    }

    render() {
        const { classes } = this.props;
        console.log(this.props.df);
          return (
            <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Profil Franchise
            </Typography>
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <TextField
                        id="status"
                        name="status"
                        select
                        label="Pilih Tipe Franchise"
                        value={this.state.status}
                        onChange={this.handleChange('status')}
                        fullWidth
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        margin="dense"
                        variant="outlined"
                    >
                        <MenuItem value="">
                        <em>Pilih</em>
                        </MenuItem>
                        <MenuItem value={10}>Pribadi</MenuItem>
                        <MenuItem value={20}>Perusahaan</MenuItem>
                        <MenuItem value={30}>Internal</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="name"
                    label="Name"
                    name="name"
                    value={this.props.df.name}
                    onChange={this.handleChange('name')}
                    fullWidth
                    margin="dense"
                    variant="outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Nama Belakang"
                    value={this.props.df.name}
                    onChange={this.handleChange('lastName')}
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id = "name"
                    name = "names"
                    label="name Penanggung Jawab Perusahaan"
                    fullWidth
                    value={this.props.df.name}
                    onChange={this.handleChange('names')}
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="address"
                    name="address"
                    label="Alamat Perusahaan"
                    value={this.props.df.address}
                    onChange={this.handleChange('address')}
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="No. KTP / Identitas Diri"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="No. NPWP ( Wajib Diisi Bila Perusahaan )"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="No. Telepon"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="No. Telepon Seluler"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
                <Grid item xs={12} sm={12}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Alamat Email ( Untuk Verifikasi Pembuatan Akun )"
                    fullWidth
                    margin = "dense"
                    variant = "outlined"
                />
                </Grid>
            </Grid><br/><br/>
            <div>
                <Paper className={classes.paddingPaper}>
                    <Typography variant="h6" component="h6"> Lampiran </Typography>
                    <Typography component="p"> Pribadi : Lampirkan Fotocopy KTP dan NPWP ( Jika Memiliki NPWP ) </Typography>
                    <Typography component="p"> Perusahaan : Lampirkan Fotocopy TDP, SIUP dan NPWP Perusahaan Dan KTP Penangung Jawab </Typography>
                </Paper>
                </div>
            </React.Fragment>
        );
    }

}
FranchiseOwnerDetail.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FranchiseOwnerDetail);