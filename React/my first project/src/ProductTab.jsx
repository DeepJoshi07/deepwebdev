import Product from "./Product.jsx";

function ProductTab(){
  // let arr =[<li>"hi-tech"</li>,<li>"fast"</li>,<li>"durable"</li>];
  // let obj ={a:"hi-tech",b:"fast",c:"durable"};
    return<>
            <Product title="laptop" price={150000} />
            <Product title="phone" price={15000} />
            <Product title="pen" price={150}/>
          </>
}
export default ProductTab;