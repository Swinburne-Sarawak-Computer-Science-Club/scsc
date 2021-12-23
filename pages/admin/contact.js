
import Navbar from './components/Navbar'
import Js from "../../components/Js"
import Head from "next/head"


const Contact = () => {

    return (
       <body>
				<Head>
					<title>Admin Dashboard | Contact</title>
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
				
          
     
                <h1>Contact me</h1>
                <p>If you have any question, feel free to contact me at <a href="mailto:hovahyii@gmail.com">hovahyii@gmail.com</a>.</p>
              
        
						</main>
					</div>
				</div>
			</body>
  
 
    )
}

export default Contact;