import fetch from 'isomorphic-unfetch';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Loader } from 'semantic-ui-react';
import Navbar from './../../components/Navbar'


const Event = ({ event }) => {
    const [isDeleting, setIsDeleting] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (isDeleting) {
            deleteEvent();
        }
    }, [isDeleting])



    const deleteEvent = async () => {
        const eventId = router.query.id;
        try {
            const deleted = await fetch(`https://swinburne-sarawak-compsci-club.herokuapp.com/api/events/${eventId}`, {
                method: "Delete"
            });

            router.push("/admin/event");
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async () => {
        setIsDeleting(true);
        close();
    }

    return (
          <body>
			

				<div className="container-fluid">
					<div className="row">
						<Navbar />
						<main className="col-md markdown-body">
		  <h1>Event Details:</h1>
            {isDeleting
                ? <Loader active /> :
                <>
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.venue}</p>
                    <p>{event.description}</p>
                    <p>{event.link}</p>
                    <Button color='red' onClick={handleDelete}>Delete</Button>
                </>
            }
						</main>
					</div>
				</div>
			</body>
       
         
    )
}

Event.getInitialProps = async ({ query: { id } }) => {
    const res = await fetch(`https://swinburne-sarawak-compsci-club.herokuapp.com/api/events/${id}`);
    const { data } = await res.json();

    return { event: data }
}

export default Event;