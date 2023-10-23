import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import UsersList from './UserList';


export default function Users() {
    const [user, setUser] = React.useState({
        name: "",
        surname: "",
        city: "",
        email: "",
        age: ""
    });

    const { name, surname, city, email, age } = user;

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8080/users/addUser", user);
            // Optionally, you can reset the form after a successful submission:
            setUser({
                name: "",
                surname: "",
                city: "",
                email: "",
                age: ""
            });
        } catch (error) {
            console.error("Error submitting the form:", error);
            // Handle error (e.g., display an error message)
        }
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <Box
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="name"
                    name="name"
                    type="text"
                    label="Name"
                    variant="filled"
                    value={name}
                    onChange={onChange}
                />
                <TextField
                    id="surname"
                    name="surname"
                    label="Surname"
                    variant="filled"
                    value={surname}
                    onChange={onChange}
                />
                <TextField
                    id="city"
                    name="city"
                    label="City"
                    variant="filled"
                    value={city}
                    onChange={onChange}
                />
                <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="filled"
                    value={email}
                    onChange={onChange}
                />
                <TextField
                    id="age"
                    name="age"
                    label="Age"
                    variant="filled"
                    value={age}
                    onChange={onChange}
                />
                <Button variant="outlined" type="submit">Submit</Button>
            </Box>
          
            <UsersList/>
        </form>
    );
}
