const ProductReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_GUITARRAS":
            return {
                ...globalState,
                products: action.payload
            }
        
        case "OBTENER_GUITARRA":
            return {
                ...globalState,
                currentProduct: action.payload
            }

        default:
            return globalState;
    }
}

export default ProductReducer;