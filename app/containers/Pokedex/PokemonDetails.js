import * as React from 'react';

import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  Grid,
  LinearProgress,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

import LoadingIndicator from '../../components/LoadingIndicator';
import PokemonHeader from 'components/PokemonHeader';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: '#ffffff',
    borderRadius: '5px',
    border: '1px solid #666',
    background: 'rgb(115,115,115)',
    background: 'linear-gradient(0deg, rgba(115,115,115,1) 11%, rgba(0,0,0,1) 100%)',
  },

}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(0,0,0, 0.4)',
  padding: theme.spacing(1),
  textAlign: 'center',
  border: '1px solid #666',
  borderRadius: '20px',
  color: '#ffffff',
}));

const StatsBar = styled(LinearProgress)(({ theme }) => ({
  display: 'flex',
  height: 10,
  borderRadius: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: '#3D7DCA',
  },
}));

const XP = styled(LinearProgress)(({ theme }) => ({
  display: 'flex',
  height: 5,
  borderRadius: 5,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    backgroundColor: '#70FE0c',
  },
}));

function PokemonDetails({ open, onClose, name, pokemon, loading }) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const stats = pokemon.stats || [];
  const types = pokemon.types || [];
  const abilities = pokemon.abilities || [];

  return (
    <div>
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullScreen={fullScreen}
      >
        <DialogContent>
          {loading ? (
            <LoadingIndicator />
          ) : (
            <Grid container spacing={2} >
              <Grid item xs={12} md={6}>
                <PokemonHeader />
                <Typography variant="h4">
                  • {name} •
                </Typography>
                <div style={{ margin: '10px', }}>
                  <Typography variant="body2">
                    {pokemon.base_experience}XP
                  </Typography>
                  <XP variant="determinate" value={pokemon.base_experience / 3} />
                </div>
                <Item style={{ margin: '20px auto', }}>
                  <Grid container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="body2">
                        {`${Math.floor(pokemon.height * 0.328084)}' ${Math.round((pokemon.height * 0.328084 - Math.floor(pokemon.height * 0.328084)) * 12)}"`} M
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="body2"
                        style={{
                          borderLeft: '1px solid #666',
                          borderRight: '1px solid #666',
                        }}
                      >
                        {types.map((type) => type.type.name.toUpperCase()).join('  ')}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body2">
                        {(pokemon.weight * 0.2204623).toFixed(2)} LBS
                      </Typography>
                    </Grid>
                  </Grid>
                </Item>
                <Typography variant="body2">
                  ABILITIES
                </Typography>
                <Item>
                  {abilities.map((ability) => ability.ability.name).join(' | ')}
                </Item>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                  style={{
                    margin: '20px 0 20px 0',
                    padding: '40px 15px 40px 15px',
                    borderRadius: '20px',
                    backgroundColor: 'rgba(0,0,0, 0.4)',
                  }}
                >
                  <Box
                    style={{
                      marginTop: 20,
                    }}>
                    <Grid container spacing={1}>
                      {stats.map((stat) => (
                        <Grid item xs={12} key={stat.stat.name}>
                          <Typography
                            variant="body2"
                            style={{
                              textAlign: 'start',
                            }}>
                            {stat.stat.name.toUpperCase()} {stat.base_stat}
                          </Typography>
                          <StatsBar variant="determinate" value={stat.base_stat / 3} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          )}
          <Button
            autoFocus
            onClick={onClose}
            style={{ color: '#ffffff' }}>
            Back to Pokedex
          </Button>
        </DialogContent>
      </BootstrapDialog>
    </div >
  );
}

export default PokemonDetails;