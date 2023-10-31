import {
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import CenteredSection from './CenteredSection';
import PokemonDetails from './PokemonDetails';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  pokemonCard: {
    color: '#ffffff',
    padding: '5px',
    borderRadius: '40px',
    background: 'rgb(0,0,0)',
    background: 'linear-gradient(0deg, rgba(0,0,0,1) 11%, rgba(115,115,115,1) 100%)',
    transition: 'background-color 0.3s',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    '&:hover': {
      border: '1px solid #cccccc',
    },
  },
});

function PokemonList({ id, name, getPokemon, pokemon }) {

  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setLoading(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, [pokemon]);

  return (
    <div>
      <CenteredSection>
        <CardActionArea
          className={classes.pokemonCard}
          onClick={() => {
            handleClickOpen();
            setLoading(true);
            getPokemon(id);
            console.log(pokemon);
          }}
        >
          <CardContent>
            <Typography variant="body1">
              #{id.toString().padStart(3, '0')}
            </Typography>
            <Typography variant="h5">
              • {name} •
            </Typography>
          </CardContent>
        </CardActionArea>
      </CenteredSection>
      <PokemonDetails
        open={open}
        onClose={handleClose}
        name={name}
        pokemon={pokemon}
        loading={loading}
      />
    </div>
  );
};

export default PokemonList;
