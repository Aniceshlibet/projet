import Carousel from 'react-bootstrap/Carousel';

const Home=()=>{
    return(
        <div>
           <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tayara.tn/mediaGateway/resize-image?img=45/45b6b40e-d220-4d9d-8be6-bced14b832a7&w=1000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tayara.tn/mediaGateway/resize-image?img=9d/9df1d305-03ad-4b9f-8280-521253daa04a&w=1000"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tayara.tn/mediaGateway/resize-image?img=5d/5d55ac6d-2b1c-4b3d-83e9-2aed0879e67d&w=1000"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default Home