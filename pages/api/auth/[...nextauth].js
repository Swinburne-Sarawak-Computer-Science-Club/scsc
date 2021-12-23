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
			async authorize(credentials) {
				// database look up
				if (
					credentials.username === process.env.USERNAME &&
					credentials.password === process.env.PASSWORD
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
		async jwt ({token, user})  {
			// first time jwt callback is run, user object is available
			if (user) {
				token.id = user.id
			}

			return token
		},
		async session ({session, token})  {
			if (token) {
				session.id = token.id
			}

			return session
		},
		async redirect(url, baseUrl) {
			return baseUrl
		},
	},
	secret: process.env.SECRET,
	jwt: {
		secret: process.env.SECRET,
		encryption: true,
	},
	pages: {
		signIn: "/admin/welcome-to-dashboard",
	},
})
