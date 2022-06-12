import { Button } from '@mantine/core';

const RequestCollabButton = () => {

	const requestCollab = () => {
        // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestTo: 'reid', requestFrom: 'reid', wlSpots:"7000" })
    };
    fetch('http://127.0.0.1:8000/api/collabRequests/', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            // this.setState({ postId: data.id })
        })
        .catch(error => {
            // this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
	}

	return (
		
        <div >
			<Button onClick={requestCollab}>Request Collab</Button>
		</div>
	);
};

export default RequestCollabButton;