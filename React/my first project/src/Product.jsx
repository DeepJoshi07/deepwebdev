import "./Product.css";
function Product({title,price=10000}){
        let style ={backgroundColor: price > 30000?"lightblue":"pink"}
//      if(price > 16000){
//         return <div className="product">
//                 <h3>{title}</h3>
//                 <p>the poducts price is : {price}$</p>
//                 <p>Discount of 5%</p>
//         </div>;
//      } else{
//         return <div className="product">
//                 <h3>{title}</h3>
//                 <p>the poducts price is : {price}$</p>
               
//         </div>;
//      } 
        return <div className="product" style={style}>
                        <h3>{title}</h3>
                        <p>the poducts price is : {price}$</p>
                        {price > 10000 && <p>discount 5%</p>}
                </div>;
        
}
export default Product;



// {features.map((feature)=><li>{feature}</li>)}