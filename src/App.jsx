
import { MenuItem, TextField, Grid, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    course: '',
    dob: '',
    gender: ''
  })

  const [error, setError] = useState({})

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value,
    })
  }

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Registration completed Successfully 
      Name: ${formData.name}
      Address: ${formData.address}
      Mobile: ${formData.mobile}
      Email: ${formData.email}
      Course: ${formData.course}
      DOB: ${formData.dob}
      Gender: ${formData.gender}`);
    }
  }

  // handle form reset
  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      course: '',
      dob: '',
      gender: ''
    })
    setError({});
  }

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const addressRegex = /^[A-Za-z0-9\s,.-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Added email validation

    if (!formData.name || !nameRegex.test(formData.name)) {
      tempErrors.name = 'Name should only contain letters and spaces';
    }

    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      tempErrors.mobile = 'Mobile number must contain exactly 10 digits';
    }

    if (!formData.address || !addressRegex.test(formData.address)) {
      tempErrors.address = 'Address can only contain letters, numbers, and common punctuation';
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
    }

    setError(tempErrors);

    // Return true if no errors
    return Object.keys(tempErrors).length === 0;
  };

  return (
    <>
      <div className='container' style={{ display: 'flex', paddingTop: '0px' }}>
        <div className='form' style={{ border: 'solid ' }}>
          <h1 style={{ textAlign: 'center', marginTop: '10px', fontSize: '40px' }}>Student Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginTop: '30px', marginLeft: '10px' }} className='mb-5'>
              <TextField error={!!error.name} helperText={error.name} name="name" value={formData.name} onChange={handleChange} label="Name" variant="outlined" style={{ width: '500px' }} />
            </div>
            <div style={{ marginTop: '30px', marginLeft: '10px' }} className='mb-5'>
              <TextField error={!!error.address} helperText={error.address} name="address" value={formData.address} onChange={handleChange} label="Address" variant="outlined" style={{ width: '500px' }} />
            </div>
            <div style={{ marginTop: '30px', marginLeft: '10px' }} className='mb-5'>
              <TextField error={!!error.mobile} helperText={error.mobile} name="mobile" value={formData.mobile} onChange={handleChange} label="Mobile" variant="outlined" style={{ width: '500px' }} />
            </div>
            <div style={{ marginTop: '30px', marginLeft: '10px' }} className='mb-5'>
              <TextField error={!!error.email} helperText={error.email} name="email" value={formData.email} onChange={handleChange} type='email' label="Email" variant="outlined" style={{ width: '500px' }} />
            </div>
            <div style={{ marginTop: '30px', marginLeft: '10px' }} className='mb-5'>
              <TextField name="course" value={formData.course} onChange={handleChange} select label="Course" variant="outlined" style={{ width: '500px' }}>
                <MenuItem value="biology">Biology</MenuItem>
                <MenuItem value="computer science">Computer Science</MenuItem>
                <MenuItem value="commerce">Commerce</MenuItem>
                <MenuItem value="humanities">Humanities</MenuItem>
              </TextField>
            </div>

            <div className='d-flex'>
              <div style={{ marginTop: '30px', marginLeft: '10px' }} className='mb-5'>
                <TextField name="dob" value={formData.dob} onChange={handleChange} label="Date of Birth" variant="outlined" type='date' style={{ width: '220px' }} InputLabelProps={{ shrink: true }} />
              </div>

              {/* Gender Field - Radio Button */}
              <Grid item xs={12}>
                <FormControl component="fieldset">
                  <FormLabel component="legend"></FormLabel>
                  <RadioGroup
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel style={{ marginTop: '40px', marginLeft: '20px' }} value="male" control={<Radio />} label="Male" />
                    <FormControlLabel style={{ marginTop: '40px' }} value="female" control={<Radio />} label="Female" />
                    <FormControlLabel style={{ marginTop: '40px' }} value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

            </div>

            <Stack direction="row" spacing={2}>
              <Button type='submit' variant="contained" className='bg-dark' style={{ width: '40%', height: '60px', marginLeft: '30px', marginTop: '15px', backgroundColor: '#065044', borderRadius: '15px' }}>Register</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: '40%', height: '60px', marginLeft: '30px', marginTop: '15px', backgroundColor: '#065044', color: 'white', borderRadius: '15px' }}>RESET</Button>
            </Stack>

          </form>
        </div>
      </div>
    </>
  )
}

export default App;