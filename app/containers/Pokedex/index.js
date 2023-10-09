/**
 *
 * Pokedex
 *
 */

import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Dialog,
  Grid,
  Paper,
  Typography
} from '@material-ui/core';
import React, { memo, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { makeStyles, styled } from '@material-ui/core/styles';

import CenteredSection from './CenteredSection';
import { Helmet } from 'react-helmet';
import PokemonHeader from 'components/PokemonHeader';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getPokemonAction } from './actions';
import makeSelectPokemon from './selectors';
import reducer from './reducer';
import saga from './saga';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

const useStyles = makeStyles({
  BottomBtn: {
    padding: '15px',
    marginTop: '20px',
    textAlign: 'center',
    width: '100%',
    color: '#ffffff',
    backgroundColor: '#E73825',
  },
  PokemonCard: {
    padding: '5px',
    backgroundColor: '#ededed',
  },
  DialogAppBar: {
    padding: '10px',
    position: 'sticky',
  },
});

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));

export function Pokedex() {
  useInjectReducer({ key: 'pokedex', reducer });
  useInjectSaga({ key: 'pokedex', saga });

  const { 
    pokemon,
  } = useSelector(stateSelector);

  const {
    getPokemon,
  } = usePokedexDispatch();

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Helmet>
        <title>Pokedex</title>
        <meta name="description" content="Description of Pokedex" />
      </Helmet>

      <CenteredSection>
          <Grid container spacig={2}>
            {}
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea 
                className={classes.PokemonCard}
                onClick={handleClickOpen}
                >
                  <CardContent>
                    <Typography variant="h6">
                      #00
                    </Typography>
                  </CardContent>
                  <CardMedia
                  component="img"
                  height="200"
                  image=" "
                  alt="pokemon_name"
                  />
                  <CardContent>
                    type-icon
                    <Typography variant="h5">
                      Pokemon_Name
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Button 
            className={classes.BottomBtn}
            >
              Load More
            </Button>
          </Grid>
        </CenteredSection>

        <Dialog 
        fullScreen
        open={open}
        onClose={handleClose}>
          <AppBar className={classes.DialogAppBar}>
            <Container>
              <PokemonHeader />
            </Container>
          </AppBar>
          <Container>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Item>
                    <Typography>Pokemon_Name | #00</Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Item>
                    <Typography>Pokemon_Img</Typography>
                  </Item>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Item>
                    <Typography>Pokemon_Type/Description</Typography>
                  </Item>
                  <Grid container>
                    <Grid item xs={6}>
                      <Item>
                        <Typography>weight</Typography>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <Typography>height</Typography>
                      </Item>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                  <Item>
                    <Typography>Pokemon_Stats</Typography>
                  </Item>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Item>
                    <Typography>Pokemon_Evolution</Typography>
                  </Item>
                </Grid>
              </Grid>
              <Button 
              className={classes.BottomBtn}
              onClick={handleClose}>
                Back to Pokedex
              </Button>
            </Box>
          </Container>
        </Dialog>
    </div>
  );
}

Pokedex.propTypes = {};

const stateSelector = createStructuredSelector({
  pokemon: makeSelectPokemon(),
});

const usePokedexDispatch =() => {
  const dispatch = useDispatch();

  return {
    getPokemon: () => {
      dispatch(getPokemonAction());
    },
  };
};

export default memo(Pokedex);
