import Nav from '../components/Nav'
import Js from '../components/Js'
import Head from "next/head";

const credits = () => {
  return (

    <body>
      
      <Head>
      <title>Credits</title>
      <meta name="description" content="Thanks our alumni and friends for creating and sponsoring this website" />
      <meta name="keywords" content="Web developer, founder of SCSC, sponsor of SCSC" />
      <meta name="author" content="Hovah Yii"/>
      </Head>


      <Js />


    <div className="container-fluid">

    <div className="row">
      
      <Nav />

   
    <main class="col-md markdown-body">

                <h1 id="thanks">Thanks</h1>

                <p>Our thanks to SCSC’s committees and friends in industry and beyond, including:</p>

              <ul>
                    <li data-marker="*"><a href="https://github.com/hovahyii">Hovah Yii</a>, created and sponsored the SCSC website</li>
                    <li data-marker="*"><a href="https://github.com/Laikokwui">Lai Kok Wei</a>, maintained and updated the SCSC website</li>
                    <li data-marker="*"><a href="https://www.facebook.com/aylwinsim.chunwei">Alywin Sim</a>, contributed idea for the SCSC website</li>
                    <li data-marker="*"><a href="https://www.facebook.com/markloveuguysnJesus">Mark Goh</a>, helped with the SCSC website</li>
                    <li data-marker="*"><a href="https://www.facebook.com/dinith.walgama">Dinith</a>, requested the SCSC website</li>

                </ul>
                

    </main>

</div>

</div>
</body>

  )
}

export default credits