import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import apiRequest from "./apiRequest";
import Page from "./Page";

export function Home(){
  
  //ვაკითხავთ ჩვენს api ფუნქციას, შესაბამის ენდპოინტზე
  const {data} = useQuery("product", () => apiRequest("GET", "products"))
 

    return(
      <Page>
        <div className="container-fluid tm-container-content tm-mt-60">
          <div className="row mb-4">
            <h2 className="col-6 tm-text-primary">RECENTLY ADDED</h2>
          </div>

          <div className="row tm-mb-90 tm-gallery">

{/* ჯერ იპოვეთ ხოლმე ერთი ელემენტი როგორაა განსაზღვრული და შემდეგ ეგ ნაწილი გადაიტანეთ მეპში დინამიურად
რომ შეიცვალოს კონტენტი */}
          {
//იმისთვის რომ არ დაბრუნდეს ერორო დატას ჩატვირთვამდე გავაკეთეთ ამრტივი ოპერატორი, რომელიც ან dataს დამეპავს ან ცარიელ მასივს
            (data || []).map(item => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5" key={item.id}>
              <figure className="effect-ming tm-video-item">

{/* შეგიძლიათ მიაკითხოთ item.images [0] განსხვავებული ფოტოებისთვის */}
                <img src={"https://i.dummyjson.com/data/products/1/1.jpg"} alt="Image" className="img-fluid" />
                <figcaption className="d-flex align-items-center justify-content-center">
                  <h2>Buy Now</h2>

{/* აუცილებელია ლინკ მნიშვნელობაც იცვლებოდეს აიდის მიხედვით */}
                  <Link to={"/product/"+ item.id}href="photo-detail.html">Buy Now</Link>
                </figcaption>
              </figure>
              <div className="d-flex justify-content-between tm-text-gray">

  {/* სურვილის მიხედვით შეგიძლიათ წამოიღოთ მონაცემები itemებიდან */}
                <span className="tm-text-gray-light">{item.title}</span>
                <span>{item.price  + ".00 $"}</span>
              </div>
            </div>
            ))
          }
          </div>
        </div>
      </Page>
    
    )
}