import { useContext } from "react";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context";

const Card = (props) => {
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail();
        context.setProductToShow(productDetail);
    }

    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData]);
        context.openCheckoutSideMenu();
        context.closeProductDetail();
    }

    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0;

        if(isInCart){
            return(
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-2"
                >
                    <div>
                        <CheckIcon className="h-4 w-4 text-white" />    
                    </div>
                </div>
            )
        }else{
            return(
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-2"
                    onClick={(event) => {addProductsToCart(event, props.data)}}
                >
                    <div>
                        <PlusIcon className="h-4 w-4" />    
                    </div>
                </div>
            )
        }
        
    }

    return (
        <div
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(props.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.5">{props.data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={props.data.images} alt={props.data.title}></img>
                {renderIcon(props.data.id)}
            </figure>
            <p className="flex justify-between">
            <span className="text-md font-light truncate mr-2">{props.data.title}</span>
            <span className="text-lg font-medium">${props.data.price}</span>
            </p>
            
        </div>
    )
}

export default Card;