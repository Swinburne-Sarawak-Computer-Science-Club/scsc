
import { Button, Form, Loader } from 'semantic-ui-react';
import Navbar from './components/Navbar'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Js from "../../components/Js"

import Head from "next/head"

const Event = ({ events }) => {

    return (
			<body>
				<Head>
					<title>Admin Dashboard | All Events</title>
					<meta
						name="description"
						content="SCSC was founded in April 2018 by Aylwin Sim and Hovah Yii. The club later was passed to Dr. Mark Tee Kit Tsun by the end of 2018. Since then, SCSC has been collaborating with IEEE, Robotics clubs to organise activities..."
					/>
					<meta
						name="keywords"
						content="SCSC, About SCSC, Swinburne Computer Science Club, SCSC Sarawak, Swinburne CompSci Club, History, what we provide, we provide you"
					/>
					<meta name="author" content="Hovah Yii" />
				</Head>

				<Js />

				<div className="container-fluid">
					<div className="row">
						<Navbar />
						<main className="col-md markdown-body">
							<h1>All Events:</h1>

							<Button>
								<a href="./create-event/">Add Event</a>
							</Button>

							<table className="table">
								<tr>
									<th>Title</th>
									<th>Date</th>
									<th>Time</th>
									<th>Venue</th>
									<th>Description</th>
									<th>Registation link</th>
									<th></th>
									<th></th>
								</tr>
								{events.map((event) => {
									return (
										<tr key={event._id}>
											<td>{event.title}</td>
											<td>{event.date}</td>
											<td>{event.time}</td>
											<td>{event.venue}</td>
											<td>{event.description}</td>
											<td>{event.link}</td>
											<th>
												<Link href={`/admin/event/${event._id}`}>
													<Button primary>View</Button>
												</Link>
											</th>
											<th>
												<Link href={`/admin/event/${event._id}/edit`}>
													<Button primary>Edit</Button>
												</Link>
											</th>
										</tr>
									)
								})}
							</table>
						</main>
					</div>
				</div>
			</body>
		)
}

Event.getInitialProps = async () => {
    const res = await fetch('https://swinburne-sarawak-compsci-club.herokuapp.com/api/events');
    const { data } = await res.json();
  
    return { events: data }
  } 

export default Event;