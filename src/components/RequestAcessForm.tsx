import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useForm } from '@mantine/form';

function RequestAccessForm() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          required
          label="Twitter Handle"
          placeholder="hellopantha"
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Discord ID"
          placeholder="hellopantha"
          {...form.getInputProps('email')}
        />
        <TextInput
          required
          label="Solana Wallet Public Key"
          placeholder="hellopantha56789098765"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I might be a robot, no promises"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group position="right" mt="md">
          <Button type="submit" variant="outline">Request Access</Button>
        </Group>
      </form>
    </Box>
  );
}
export default RequestAccessForm;