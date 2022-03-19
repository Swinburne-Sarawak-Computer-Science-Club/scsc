import Nav from '../components/Nav'
import Js from '../components/Js'
import Head from "next/head";

const committees = () => {
  return (
		<body>
			<Head>
				<title>Committees</title>
				<meta
					name="description"
					content="All about SCSC founders, previous committee, the Jedi Council until now"
				/>
				<meta
					name="keywords"
					content="committee, scsc committee, the jedi council, the founder"
				/>
				<meta name="author" content="Hovah Yii" />
			</Head>

			<Js />

			<div className="container-fluid">
				<div className="row">
					<Nav />

					<main class="col-md markdown-body">
						<h2>
							<a href="/committees/2018/">2018</a>
						</h2>
						<h2>
							<a href="/committees/2019/">2019</a>
						</h2>
						<h2>
							<a href="/committees/2020/">2020</a>
						</h2>
						<h2>
							<a href="/committees/2021/">2021</a>
						</h2>
						<h2>
							<a href="/committees/2022/">2022</a>
						</h2>
					</main>
				</div>
			</div>
		</body>
	)
}

export default committees