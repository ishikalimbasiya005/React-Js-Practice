import react from "react";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

// Install MUI command and then Run the code Using "npm start"
// npm install @mui/material @emotion/react @emotion/styled

const Mui = () => {
  return (
    <>

{/* Serch mui framework  */}

     <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
    </Stack>
    </>
  );
};

export default Mui;