import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  {
    field: 'fullName', headerName: 'Full name', sortable: false, width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export const DataTable = () => {

  const onMobCh = e => console.log(e.target.value)
  const onEmCh = e => console.log(e.target.value)

  const onDel = () => { setOpen(true) }

  const [isOpen, setOpen] = useState(false)

  const onClkYes = () => { setOpen(false)  }
  const onClkNo = () => { setOpen(false) }

  const onDlgCls = () => {}

  return (
    <div style={{ width: '100%', height: '100vh', marginTop: '2em' }}>
      <div className={'demo'}>
        <TextField label="Mobile" variant="outlined" onChange={onMobCh} />
        <TextField label="Email" variant="outlined" onChange={onEmCh} />
        <Button variant="outlined" onClick={onDel}>Delete</Button>
      </div>

      <Dialog
        open={isOpen}
        onClose={onDlgCls}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">
          Delete
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you relly want to delete the customer ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClkNo}>No</Button>
          <Button onClick={onClkYes} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}


