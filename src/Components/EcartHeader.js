import {useEffect,useState} from 'react';
import { CardComponent } from './CardComponent';

export function EcartHeader() {

const[category,setCategory]=useState([]);
const[products,setProduct]= useState([]);
const[cart,setCartItems]= useState([]);
const[itemsCount,setItemsCount]= useState(0);

function  getCartCount() {
    setItemsCount(cart.length);
    
}

function LoadCategories() {
    fetch('https://fakestoreapi.com/products/categories')
    .then(response=>response.json())
    .then(data=>{
        data.unshift("all");
        setCategory(data);
    })   
}
useEffect(()=>{
    LoadCategories()
    LoadProduct('https://fakestoreapi.com/products')
},[cart.length])


function LoadProduct(url) {
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        setProduct(data);
    })
}

function handleCategories(e) {
   if(e.target.value==='all'){
    LoadProduct('https://fakestoreapi.com/products')
   }
       else{ LoadProduct(`https://fakestoreapi.com/products/category/${e.target.value}`)}
    }
  
    
   function handleAddtoCart(e) {
    fetch(`https://fakestoreapi.com/products/${e.target.id}`)
    .then(response=>response.json())
    .then(data=>
        {cart.push(data);
        getCartCount();
})
   
    
   } 


    return(
    <div className="container-fluid">
        <header className='d-flex justify-content-between p-2 bg-dark text-white '>
       <div><h1 className='ps-4'>E-cart</h1></div>
       <div className='pe-4'><h5><span className='bi bi-cart4 me-2'></span>Cart</h5></div>
       </header>
       <section className='row mt-2'>
       <nav className='col-2'>
        <div>
            <label> Select a Categories</label>
           <div>
           <select className='form-select'   onChange={handleCategories}>
               
                 { category.map(category=>
                    <option key={category} >{category}</option>
                 )}

            </select>
           </div>
        </div>
        </nav>
       <main className='col-7 d-flex flex-wrap overflow-auto' style={{height:'500px'}}>
        {
            products.map(product=>
                <div key={product.id} className='card m-2 p-2 w-25'style={{width:'200px'}}>
             <img src={product.image} className='card-img-top' height={'200px'}  alt='product_images'/>
              <div className='card-header' style={{height:'160px'}}>
                 <p>{product.tilte}</p>  
              </div>
              <div className='card-body'>
              <dl>
                  <dt>Price  :  {product.price}</dt>
                  <dt>Rating :  <span className='bi bi-star-fill'>  {product.rating.rate}</span> 
                      <span>  [{product.rating.count}]</span>
                  </dt>
                  
              </dl>
              </div>
              <div className='card-footer'>
              <button  id={product.id} onClick={handleAddtoCart} className='btn btn-danger w-100'><span className='bi bi-cart4'></span> Add to Cart</button>
              </div>
             
              </div>
   
    
        )}
         
        
        </main>
        <aside className='col-3'>
       
            <button className='btn btn-warning w-100'><span className='bi bi-cart3'> </span>[{itemsCount}] Your Cart Items</button>
       
       <table className='table table-hover'>
        <thead>
            <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Preview</th>
            </tr>
        </thead>
        <tbody>
            {
                cart.map(items=>
                <tr key={items.id}>
                    <td>{items.title}</td>
                    <td>{items.price}</td>
                    <td>
                        <img src={items.image} alt='product_image' width='50px' height='50px'/>
                    </td>
                    <td><button className='btn btn-danger'><span className='bi bi-trash'></span>
                        </button></td>

                    </tr>)
                }
        </tbody>

       </table>
        </aside>
       </section>
    </div>
    )
}