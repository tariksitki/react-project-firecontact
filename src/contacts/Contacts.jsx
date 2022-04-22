

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  rows,
  Paper
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


const Contacts = ({editHandler}) => {
 
  return (
    // burada 3 tane sart olusturacagiz.
    // 1: bilgiler gelmedi loading
    // 2: bilgiler geldi ama ici bos
    // 3: bilgiler geldi ici bos degil normal
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Delete</TableCell>
              <TableCell align="right">Edit</TableCell>
            </TableRow>
          </TableHead>        
         
          <TableBody>
           {/* Bilgiler gelmediği durumda Loading yazısı görünsün */}
          
            <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
              <TableCell colSpan={5} align="center">Loading</TableCell>             
            </TableRow>
         
          
        
              <TableRow >
                  <TableCell textAlign="center"> </TableCell>
                  <TableCell textAlign="center"></TableCell>
                  <TableCell textAlign="center"></TableCell> 
                  <TableCell textAlign="center" ></TableCell> 
                  
                  <TableCell textAlign="center"></TableCell> 
             </TableRow> 
            
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;