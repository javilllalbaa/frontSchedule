import {
  createAsyncThunk,
  createSlice
} from '@reduxjs/toolkit';
import Axios from 'axios';
import apiConfig from '../config/api';

export const loadProduct = createAsyncThunk('loadProduct', async (paginado, thunkAPI) => {
  let response = await Axios.get(`${apiConfig.baseUrl}/api/schedule?pagina=${paginado.pagina}&tamanio=${paginado.tamanio}`)
  return response;
})

export const loadCreateSchedule = createAsyncThunk('loadCreateSchedule', async (schedule, thunkAPI) => {
  let response = await Axios.post(`${apiConfig.baseUrl}/api/schedule`, schedule);
  if(response.status == 201){
    let response = await Axios.get(`${apiConfig.baseUrl}/api/schedule?pagina=0&tamanio=5`);
    alert("Cita creada...")
    return response;
  }
})

export const loadDeleteSchedule = createAsyncThunk('loadDeleteSchedule', async (data, thunkAPI) => {
  let response = await Axios.delete(`${apiConfig.baseUrl}/api/schedule/${data.schedule}`);
  if(response.status == 204){
    alert("Cita Eliminada...")
    return data.data;
  }
})

let productsSlice = createSlice({
  name: 'products',
  initialState: {
    data: {
      productList: [],
      isFetchingProductList: false,
      selectedProduct: false,
      product: [],
      isFetchingProduct: false
    }
  },
  extraReducers: {
    [loadProduct.pending]: (state, action) => {
      state.data = {
        isFetchingProduct: true,
        selectedProduct: true
      }
    },
    [loadProduct.fulfilled]: (state, action) => {
      state.data = {
        isFetchingProductList: false,
        selectedProduct: true,
        product: action.payload.data,
        isFetchingProduct: false
      }
    },
    [loadProduct.rejected]: (state, action) => {
      state.data = {
        isFetchingProduct: false,
        selectedProduct: false,
        product: {}
      }
    },
    [loadCreateSchedule.pending]: (state, action) => {
      state.data = {
        isFetchingProduct: true,
        selectedProduct: true
      }
    },
    [loadCreateSchedule.fulfilled]: (state, action) => {
      state.data = {
        isFetchingProductList: false,
        selectedProduct: true,
        product: action.payload.data,
        isFetchingProduct: false
      }
    },
    [loadCreateSchedule.rejected]: (state, action) => {
      state.data = {
        isFetchingProduct: false,
        selectedProduct: false,
        product: {}
      }
    },
    [loadDeleteSchedule.pending]: (state, action) => {
      state.data = {
        isFetchingProduct: true,
        selectedProduct: true
      }
    },
    [loadDeleteSchedule.fulfilled]: (state, action) => {
      state.data = {
        isFetchingProductList: false,
        selectedProduct: true,
        product: action.payload,
        isFetchingProduct: false
      }
    },
    [loadDeleteSchedule.rejected]: (state, action) => {
      state.data = {
        isFetchingProduct: false,
        selectedProduct: false,
        product: {}
      }
    }
  }
});

export const selectData = (state) => state.products.data;

export default productsSlice.reducer;