import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'
import ProductCard from './index'

const meta: Meta = {
    title: 'Molecules/ProductCard',
    component: ProductCard,
  }

export default meta


const Template: Story<any> = (args) => {
    return (
      <div>
        <ProductCard {...args} />
      </div>
    )
  }

export const ProductCardTemplate = Template.bind({})

ProductCardTemplate.args = {
  product: {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    source: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  }
}
  