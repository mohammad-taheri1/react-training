import React from 'react';
import TourCard from "./components/TourCard";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const App = () => {
    return (
        <Container>
            <Grid container spacing={5}>
                 <TourCard />
                 <TourCard />
                 <TourCard />
                 <TourCard />
                 <TourCard />
                 <TourCard />
                 <TourCard />
                 <TourCard />
            </Grid>
        </Container>
    );
};

export default App;