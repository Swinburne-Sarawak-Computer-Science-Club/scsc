import {signOut, useSession} from "next-auth/react"
import {useRouter} from "next/dist/client/router"

export default function Navbar() {
	  const {data: session} = useSession()
		const router = useRouter()

		console.log("session", session)

	return (

			<aside className="col-md">
				<header>
					<h2 data-id="this-is-cs50">
						<a href="/admin/welcome-to-dashboard">Welcome, Admin</a>
					</h2>
				</header>

				<button
					aria-controls="nav"
					aria-expanded="false"
					className="btn btn-sm collapsed d-md-none"
					data-target="aside > nav"
					data-toggle="collapse"
				>
					Menu
				</button>

				<nav className="collapse d-md-block">
					<ul>
						<li class="active">
							<a href="/admin/welcome-to-dashboard/">Dashboard</a>
						</li>
						<li>
							<a href="/admin/event/">Event</a>
						</li>
						<li>
							<a href="/admin/contact/">Contact</a>
						</li>
						<li>
							{session && <>
								<button onClick={() => signOut()}>Log out</button> 
								</>
							}
						</li>
					</ul>
				</nav>

				<footer></footer>
			</aside>
	
	)
}
