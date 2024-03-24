import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { ShoppingCartContext } from "../../Context";
import './styles.css';


const ProductDetail = () => {
    const context = useContext(ShoppingCartContext)

    return (
        <aside
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium'>Detail</h2>
                <div className='text-xl font-medium'>
                    <XMarkIcon
                        className="h-6 w-6 cursor-pointer"
                        onClick={() => context.closeProductDetail()}
                    />
                </div>
            </div>
            <figure className='px-6'>
                <img className='w-full h-full rounded-lg' src={context.productToShow.images} alt={context.productToShow.title}></img>
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-1'>${context.productToShow.price}</span>
                <span className='font-medium text-xl mb-1'>{context.productToShow.title}</span>
                <span className='font-light text-md'>{context.productToShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;