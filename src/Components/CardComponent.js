export function CardComponent(product) {
    
    return(<>
    
    
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
             
             
              </div>
   
    
    </>)
}
