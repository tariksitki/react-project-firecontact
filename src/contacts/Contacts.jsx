

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

import { CallUser, deleteUser } from "../utils/functions";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';



const Contacts = ({handleEdit}) => {
  const {isLoading, contactList} = CallUser();

  // Cok önemli: CallUser bir component olarak 2 tane state return ediyor. Burada o component a ait state leri bu sekilde aliyoruz.

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

           {isLoading ? (
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
                    <TableCell colSpan={5} align="center">Loading</TableCell>             
              </TableRow>
           ) : (
             // bilgiler geldi ama ici bos
            contactList?.length === 0  ? (
              <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>            
                  <TableCell colSpan={5} align="center">No Information</TableCell>             
              </TableRow>
            ) : ( 
              // bilgiler normal geldi
              // burasi zaten {} icerisi o nedenle map icin tekrar {} acmadik
              contactList?.map((item, index) => {
                return (
                  <TableRow key = {index} >
                      <TableCell textalign="center">{item.username?.toUpperCase()}</TableCell>
                      <TableCell textalign="center">{item.phoneNumber}</TableCell>
                      <TableCell textalign="center">{item.gender}</TableCell> 
                      <TableCell textalign="center"> <DeleteIcon onClick = {() => deleteUser(item.id)}/> </TableCell> 
                      <TableCell textalign="center"> <EditIcon onClick = {() => handleEdit(item.id, item.username, item.phoneNumber, item.gender)} /> </TableCell> 
                  </TableRow>
                )
              })
              )
           )}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Contacts;