import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import chatify from "../assets/chatify.svg";
import bitOfCode from "../assets/bitOfCode.svg";
import editor from "../assets/editor.svg";
function BasicExample() {
  return (
    <div className='flex justify-around py-[20px]'>
 <Card style={{ width: '18rem', height:'25rem'}} className="border-2 border-black px-2 py-2" >
      <Card.Img variant="top" src={chatify} />
      <Card.Body>
        <Card.Title className='font-bold'>BASIC PLAN</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="bg-blue-700 text-white border-md my-10 mx-[55px] rounded-sm px-2">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', height:'25rem'}} className="border-2 border-black px-2 py-2" >
      <Card.Img variant="top" src={bitOfCode} />
      <Card.Body>
        <Card.Title className='font-bold'>POPULAR PLAN</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="bg-blue-700 text-white border-md my-10 mx-[55px] rounded-sm px-2">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', height:'25rem'}} className="border-2 border-black px-2 py-2" >
      <Card.Img variant="top" src={editor}/>
      <Card.Body>
        <Card.Title className="font-bold">SMART PLAN</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" className="bg-blue-700 text-white border-md my-10 mx-[55px] rounded-sm px-2">Go somewhere</Button>  
      </Card.Body>
    </Card>
    </div>
   
  );
}

export default BasicExample;