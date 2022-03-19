import Nav from '../../components/Nav'
import Js from '../../components/Js'
import Link from 'next/link'
import Head from "next/head";

const oneEight = () => {
  return (

    <body>

    <Head>
      <title>2018</title>
 
      <meta name="description" content="All about the SCSC committees 22018019" />
      <meta name="keywords" content="scsc committees, committee 2018" />
      <meta name="author" content="Hovah Yii"/>
      </Head>

      <Js />
    <div className="container-fluid">

    <div className="row">
      
      <Nav />

   
    <main className="col-md markdown-body">

    <h1>Committees 2018</h1>
                <p>They started the club and passed down the legacy</p>
               
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Position</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Aylwin Sim </td>
                                <td>President (Founder)</td>
                            </tr>
                            <tr>
                                <td>Chong Yong Quan</td>
                                <td>Vice President</td>
                            </tr>
                            <tr>
                                <td>Mark Goh Soon Boon</td>
                                <td>Secretary</td>
                            </tr>
                            <tr>
                                <td>Wilson To</td>
                                <td>Vice Secretary</td>
                            </tr>
                            <tr>
                                <td>Talha Shahood Hashmi</td>
                                <td>Treasurer</td>
                            </tr>
                            <tr>
                                <td>Jehovah Yii Zui Hon</td>
                                <td>Vice Treasurer (Co-Founder)</td>
                            </tr>
                            <tr>
                                <td>Raymond Sii Li Sheng</td>
                                <td>Committee</td>
                            </tr>
                        </tbody>
                    </table>
    </main>

</div>

</div>
</body>

  )
}

export default oneEight