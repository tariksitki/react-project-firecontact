import {
  Grid,
  FormControl,
  InputLabel,
  TextField,
  InputAdornment,
  MenuItem,
  Button,
  Stack,
  Select,
  Box,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";

const FormComponent = ({info, setInfo, handleFormSubmit}) => {
    console.log()

    const handleChange = (e) => {
        e.preventDefault();
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        setInfo({...info, [name] : value });
    };
  return (
    <Grid
      textAlign="center"
      verticalAlign="middle"
      direction="column"
      style={{ width: "300" }}
    >
      <p className="contact-header">
        <div>
          <a
            href="https://github.com/clarusway"
            className="design"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code>{"<Clarusway/>"}</code>
          </a>
        </div>
        <span className="design header">design</span>
      </p>
      <h2 className="contact-header">Add Contact</h2>

      <Box style={{ backgroundColor: "white", padding: "1rem" }}>
        <form onSubmit={handleFormSubmit} >
          <Stack spacing={3} direction="column">
            <TextField
              variant="outlined"
              name="username"
              placeholder="Name"
              value={info.username}
              // buradali value input un baslangic valuesu. onChange ile degisiklik oldugunda bu degisecektir.
              onChange = {handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              name="phoneNumber"
              placeholder="Phone Number"
              value={info.phoneNumber}
              onChange = {handleChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneEnabledIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel style={{ paddingLeft: "1.1rem" }}>Gender</InputLabel>
              <Select label="Gender" name="gender" variant="outlined" value={info.gender} onChange = {handleChange}  >
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
                {/* MenuItem lari map ile de yapabilirdik */}
              </Select>
            </FormControl>

            <Button variant="contained" type="submit" value="Submit" >
              ADD
            </Button>
          </Stack>
        </form>
      </Box>
    </Grid>
  );
};

export default FormComponent;
