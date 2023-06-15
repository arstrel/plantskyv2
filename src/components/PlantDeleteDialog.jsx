import Button from '@mui/material/Button';
import { DataStore } from 'aws-amplify';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Plant } from 'models';
import { useState } from 'react';

export default function PlantDeleteDialog({
  plant,
  isOpened,
  onClose,
  setCurrentPlant,
}) {
  const [deleteStatus, setDeleteStatus] = useState({
    success: false,
    text: '',
    show: false,
  });

  const onDeleteClick = async () => {
    try {
      const modelToDelete = await DataStore.query(Plant, plant.id);
      await DataStore.delete(modelToDelete);

      setDeleteStatus({
        success: true,
        text: 'Plant deleted successfully',
        show: true,
      });

      setTimeout(() => setCurrentPlant({}), 1500);
    } catch (e) {
      setDeleteStatus({
        success: false,
        text: 'Something went wrong',
        show: true,
      });
    }
    setTimeout(onClose, 1000);
  };

  return (
    <div>
      <Dialog
        open={isOpened}
        onClose={onClose}
        aria-labelledby="delete-plant-title"
        aria-describedby="delete-plant-text"
      >
        {deleteStatus.show ? (
          <DialogTitle
            id="delete-plant-title"
            sx={{ color: deleteStatus.success ? 'success.main' : 'error.main' }}
          >
            {deleteStatus.text}
          </DialogTitle>
        ) : (
          <DialogTitle id="delete-plant-title" sx={{ color: 'error.main' }}>
            Delete {plant.name}
          </DialogTitle>
        )}
        <DialogContent>
          <DialogContentText id="delete-plant-text">
            Forever remove this plant from your list?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={onDeleteClick} sx={{ color: 'error.main' }}>
            Delete plant
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
