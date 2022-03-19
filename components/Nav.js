import Link from 'next/link'
import Head from "next/head";
import {signOut, useSession} from "next-auth/react"
import {useRouter} from "next/dist/client/router"

const Nav = () => {

	  const { data: session } = useSession();
  const router = useRouter();

  console.log("session", session);
  return (
		<aside className="col-md">
			<Head>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta charset="UTF-8"></meta>
			</Head>
			<header>
				<h1 data-id="this-is-cs50">
					<a href="/">This is SCSC</a>
				</h1>

				<p>
					<Link href="https://www.swinburne.edu.my/">
						Swinburne University of Technology Sarawak Campus
					</Link>
					<br />
					Fall {new Date().getFullYear()}{" "}
				</p>
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
				<hr />

				<ul>
					<li data-marker="*">
						<a href="/about-scsc/">About SCSC</a>
					</li>
					<li data-marker="*">
						<a href="/upcoming-events/">Upcoming Events</a>
					</li>
					<li data-marker="*">
						<a href="/norms/">Norms</a>
					</li>
					<li data-marker="*">
						<a href="/staffs/">Staffs</a>
					</li>
					<li data-marker="*">
						<a href="/committees/">Committees</a>
					</li>
				</ul>

				<hr />

				<ul className="small">
					<li data-marker="*">
						<a href="/young-innovators-challenge/">
							Young Innovators Challenge
						</a>
					</li>
					<li data-marker="*">
						<a href="/be-a-yic-mentor/">YIC Mentor</a>
					</li>
					<li data-marker="*">
						<a href="https://forms.gle/9KmgnV841GiwhbPT9" target="_blank">
							Join SCSC
						</a>
					</li>
				</ul>

				<hr />

				<ul className="small">
					<h4>Follow us</h4>
					<a
						href="https://www.facebook.com/swinburnecompsci"
						target="_blank"
						className="p-1  object-contain		"
					>
						<i className="fab fa-facebook fa-2x	 	"></i>
					</a>
					<a
						href="https://www.instagram.com/swinburnecompsci/"
						target="_blank"
						className="p-1 	"
					>
						<i className="fab fa-instagram fa-2x "></i>
					</a>
					<a
						href="https://github.com/Swinburne-Sarawak-Computer-Science-Club"
						target="_blank"
						className="p-1 "
					>
						<i className="fab fa-github fa-2x "></i>
					</a>
					&nbsp;
					<a href="https://discord.gg/AHM8qyCybV" target="_blank">
						<i className="fab fa-discord fa-2x bg-transparent"></i>
					</a>
				</ul>

				<hr />

				<p>
					With <a href="/thanks">thanks</a> to SCSC's alumni and friends
				</p>

				{session ? (
					<p>
						<a href="/admin/welcome-to-dashboard">Dashbord</a>
					</p>
				) : (
					<p>
						
					</p>
				)}

				<p>
					{session ? (
						<button onClick={() => signOut()}> ↪ Log out</button>
					) : (
						<button
							onClick={() => {
								router.push("/api/auth/signin")
							}}
						>
							🔑 Sign in
						</button>
					)}
				</p>
			</nav>

			<footer></footer>
		</aside>
	)
}

export default Nav