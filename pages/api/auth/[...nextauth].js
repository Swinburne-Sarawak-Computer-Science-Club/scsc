import NextAuth from "next-auth"
import CredentialProvider from "next-auth/providers/credentials"

export default NextAuth({
	providers: [
		CredentialProvider({
			name: "credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "johndoe",
				},
				password: {label: "Password", type: "password"},
			},
			authorize: (credentials) => {
				// database look up
				if (
					credentials.username === "admin" &&
					credentials.password === "admin"
				) {
					return {
						id: 1,
						name: "Admin",
						email: "admin@scsc.com",
					}
				}

				// login failed
				return null
			},
		}),
	],
	callbacks: {
		jwt: ({token, user}) => {
			// first time jwt callback is run, user object is available
			if (user) {
				token.id = user.id
			}

			return token
		},
		session: ({session, token}) => {
			if (token) {
				session.id = token.id
			}

			return session
		},
	},
	secret: process.env.SECRET,
	jwt: {
		secret: process.env.SECRET,
		encryption: true,
	},
	pages: {
		
	},
})
