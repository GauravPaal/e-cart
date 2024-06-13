import React from 'react'
import { ShopingHeaderComponent } from './ShopingHeaderComponent'
import { ShopingCardComponent } from './ShopingCardComponent'
import { ShoppingFooterComponent } from './ShoppingFooterComponent'
import { ShoppingCategoriesComponent } from './ShoppingCategoriesComponent'

export default function ShopingMainComponent() {
  
  
  return (
    <div>
      <header>
        <ShopingHeaderComponent/>
      </header>
     <main>
      <section className='row mt-4 '>
        <nav className='col-3'>
        <ShoppingCategoriesComponent/>
        </nav>
        <div className='col-9'>
        <ShopingCardComponent/>
        </div>  
      </section>
      <footer>
        <ShoppingFooterComponent/>
      </footer>
      </main></div>
  )
}
