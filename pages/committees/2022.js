import Nav from "../../components/Nav"
import Js from "../../components/Js"
import Head from "next/head"

const twoOne = () => {
	return (
		<body>
			<Head>
				<title>2022</title>
				<meta name="description" content="All about the SCSC committees 2022" />
				<meta name="keywords" content="scsc committees, committee 2022" />
				<meta name="author" content="Hovah Yii" />
			</Head>

			<Js />

			<div className="container-fluid">
				<div className="row">
					<Nav />

					<main className="col-md markdown-body">
						<h1>Committees 2022</h1>

						<table className="table table-striped">
							<thead>
								<tr>
									<th>Name</th>
									<th>Position</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Elvis Wong Kiung Kiat</td>
									<td>President</td>
								</tr>
								<tr>
									<td>Timmy Chin Fong Sheng</td>
									<td>Vice President</td>
								</tr>
								<tr>
									<td>John Chung Zu An</td>
									<td>Secretary</td>
								</tr>

								<tr>
									<td>Ng Jing Ping</td>
									<td>Vice Secretary</td>
								</tr>

								<tr>
									<td>Cheryl Tan Shen Wey</td>
									<td>Treasurer</td>
								</tr>

								<tr>
									<td>Voon Boon Yuan</td>
									<td>Vice Treasurer</td>
								</tr>
							</tbody>
						</table>
					</main>
				</div>
			</div>
		</body>
	)
}

export default twoOne
