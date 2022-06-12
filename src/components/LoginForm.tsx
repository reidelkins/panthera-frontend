import { TextInput, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAuth } from '../utils/Auth';

function LoginForm() {
  const form = useForm({
    initialValues: {
      Username: '',
    },
  });
  const [user, setUser] = useState('')
  const auth = useAuth()
  // const navigate = useNavigate()

  const router = useRouter();

  const handleSubmit = async (values) => {
    // Stop the form from submitting and refreshing the page.
    // event.preventDefault()

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(values)

    // API endpoint where we send form data.
    const endpoint = '/api/form'

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    }

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options)

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json()
    auth.login(values.Username)
    alert(`Is this your username: ${result.data}`)
    router.push('/')

  }

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
      <TextInput
          required
          label="Username"
          placeholder="hellopantha"
          onChange={(e) => console.log(e.target.value)}
          {...form.getInputProps('Username')}
        />
        <Button type="submit" variant="outline">Submit</Button>
      </form>
      
    </Box>
  );
}
export default LoginForm;