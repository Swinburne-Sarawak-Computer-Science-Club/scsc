
import Navbar from './components/Navbar'
import Head from 'next/head'
import Js from '../../components/Js'

const Dashboard = () => {

    return (
			<body>
				<Head>
					<title>Welcome to Admin Dashboard</title>
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
							<h1>Dashboard</h1>
							<p>
								The only way to learn a new programming language is by writing
								programs in it.
							</p>

							<h1>Words of Encouragement </h1>
							<p>
								Hi, I am Hovah. <br />
								Basically this dashboard is just a amatuer product. <br />
                                I am lazy to code extra features and I hope that you guys can continue the works.
							</p>

							<h2>You could improve this website by:</h2>
							<ul>
								<li> adding on user Authetication</li>
								<li> improve UI and mobile responsiveness</li>
								<li> create a forum</li>
								<li> anything you like you can just add it</li>
							</ul>
						</main>
					</div>
				</div>
			</body>
		)
}

export default Dashboard;