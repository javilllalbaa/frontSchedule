import productsReducer, {
    loadProduct
} from "./../products"
import axios from 'axios';

const response = {
    "id": 10,
    "name": "Cita con especialista de pediatría control",
    "description": "Cita con especialista de pediatría control",
    "duration_minutes": 20,
    "color_hex_code": "#FFEE03"
}

jest.mock('axios', () => {
    return {
        get: jest.fn().mockReturnValue(response)
    }
});

const data_item = {
    data:  {
        "id": 10,
        "name": "Cita con especialista de pediatría control",
        "description": "Cita con especialista de pediatría control",
        "duration_minutes": 20,
        "color_hex_code": "#FFEE03"
    } 
}

describe('products reducer', () => {

    const initialState = {
        data: {
            productList: [],
            isFetchingProductList: false,
            selectedProduct: false,
            product: [],
            isFetchingProduct: false
        }
    };

    it('should handle initial state', () => {
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    describe('reducers loadProduct', () => {

        it('sets fetching true when loadProduct is pending', () => {
            const action = { type: loadProduct.pending.type };
            const state = productsReducer(initialState, action);
            expect(state.data.isFetchingProduct).toEqual(true);
            expect(state.data.selectedProduct).toEqual(true);
        });

        it('sets the words when loadProduct is fulfilled', async() => {
            const action = { type: loadProduct.fulfilled.type, payload: data_item };
            const state = productsReducer(initialState, action);
            expect(state.data.product).toEqual(data_item.data);
            expect(state.data.isFetchingProductList).toEqual(false);
            expect(state.data.isFetchingProduct).toEqual(false);
        });

        it('sets fetching false when loadProduct is rejected', () => {
            const action = { type: loadProduct.rejected.type, error: { message: 'error' } };
            const state = productsReducer(initialState, action);
            expect(state.data.isFetchingProduct).toEqual(false);
            expect(state.data.selectedProduct).toEqual(false);
        });

        it('Should receive the product detail from loadProduct', async () => {
            const dispatch = jest.fn();
            const result = await loadProduct()(dispatch);
            expect(result.type).toBe('loadProduct/rejected');
        });

    });

});
