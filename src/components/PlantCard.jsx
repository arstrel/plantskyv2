import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { DataStore } from 'aws-amplify';
import Grid from '@mui/material/Grid';
import { Plant } from 'models';
import PlantCardHeader from 'components/PlantCardHeader';
import PlantDetailsDialog from 'components/PlantDetailsDialog';
import Typography from '@mui/material/Typography';
import add from 'date-fns/add';
import isEmpty from 'lodash/isEmpty';
import { useState } from 'react';

export default function PlantCard({ plant }) {
  const [currentPlant, setCurrentPlant] = useState(plant);
  const [isDetailsDialogOpened, setIsDetailsDialogOpened] = useState(false);

  const onDetailsDialogOpen = () => {
    setIsDetailsDialogOpened(true);
  };
  const onDetailsDialogClose = () => {
    setIsDetailsDialogOpened(false);
  };

  const onWaterClick = async (id) => {
    const original = await DataStore.query(Plant, id);
    const updated = await DataStore.save(
      Plant.copyOf(original, (updated) => {
        const now = new Date().toISOString();
        updated.lastWatered = now;
        updated.nextWater = add(new Date(now), {
          days: updated.waterIntervalDays,
        }).toISOString();
      })
    );

    setCurrentPlant(updated);
  };

  if (isEmpty(currentPlant)) {
    return null;
  }

  return (
    <>
      <Grid item xs sx={{ display: 'flex' }} justifyContent="center">
        <Card
          elevation={2}
          sx={{
            width: 345,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
          }}
        >
          <PlantCardHeader
            plant={currentPlant}
            setCurrentPlant={setCurrentPlant}
          />
          <CardMedia
            component="img"
            height="220"
            image={currentPlant.imageURL}
            alt={currentPlant.name}
            sx={{ objectFit: 'contain', cursor: 'pointer' }}
            onClick={onDetailsDialogOpen}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              onClick={onDetailsDialogOpen}
              sx={{ cursor: 'pointer' }}
            >
              {currentPlant.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Can be found in <i>{currentPlant.location}</i>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To be watered every{' '}
              <strong>{currentPlant.waterIntervalDays}</strong> days
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onWaterClick(currentPlant.id)}>
              Water Now
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <PlantDetailsDialog
        plant={plant}
        isOpened={isDetailsDialogOpened}
        onClose={onDetailsDialogClose}
      />
    </>
  );
}
