<template>
    <h1 style="margin-left: 1.5rem; margin-top: 1rem;">Products Management</h1>

    <h2 style="text-align: center; margin-bottom: 1rem;">New Product</h2>
    <form class="product-form">
        <div class="product-form__item">
            <input type="text" v-model="productFormData.name" placeholder="Name">
        </div>
        <div class="product-form__item">
            <textarea v-model="productFormData.description" placeholder="Description"></textarea>
        </div>
        <div class="product-form__item">
            <input type="text" v-model="productFormData.cost" min="1" placeholder="Cost">
        </div>
        <div class="product-form__item">
            <input type="text" v-model="productFormData.inventory" placeholder="Inventory">
        </div>
        <div class="product-form__item">
            <input type="text" v-model="productFormData.imageUrl" placeholder="Image URL">
        </div>

        <button @click.prevent="createProduct" class="product-form__item product-form__button">
            Create
        </button>
    </form>

    <h2>Product List</h2>
    <ul>
        <li v-for="(product, i) in products">{{ product }}</li>
    </ul>
</template>

<script setup lang="ts">
import axios from 'axios';

const config = useRuntimeConfig()

const axiosClient = axios.create({
    baseURL: config.public.backendMicroservice,
});

type Product = {
    name: string;
    description: string;
    cost?: number;
    inventory?: number;
    imageUrl: string;
}

const products = ref<Product[]>([]);

onMounted(async() => {
    try {
        const productList = await axiosClient.get('/products')
        products.value = productList.data?.products ?? [];
    } catch (err) {
        console.log(err)
    }
})

const productFormData = ref<Product>({
    name: '',
    cost: undefined,
    description: '',
    inventory: undefined,
    imageUrl: ''
});

const cleanProductForm = (): void => {
    productFormData.value = {
        name: '',
        cost: undefined,
        description: '',
        inventory: undefined,
        imageUrl: ''
    };
}

const validateProductInput = (product: Product): { ok: boolean, msg: string } => {
    console.log('Validating URL')
    const urlRegex: RegExp = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    if (!urlRegex.test(product.imageUrl)) 
        return { 
            ok: false,
            msg: 'Validation failed: "imageURL" does Not match an internet URL pattern'
        };
    
    console.log('Validating numeric values')
    if (!product.cost || !product.inventory || !(product.cost >= 1) || !(product.inventory >= 1))
        return { 
            ok: false,
            msg: 'Validation failed: Either "cost" or "inventory" are not positive numbers'
        };
    
    console.log('Validating empty fields')
    if (
        product.name.length <= 0 || !product.cost || product.description.length <= 0
        || !product.inventory || product.imageUrl.length <= 0
    )
        return {
            ok: false,
            msg: 'Validation failed: Check that none of the product fields are empty'
        }

    return { ok: true, msg: '' }
}

const createProduct = (): void => {
    const validation: { ok: boolean, msg: string } = validateProductInput(productFormData.value)

    if (!validation.ok) {
        alert(validation.msg)
        return
    }

    axiosClient.post(`/products`, productFormData.value)
        .then((res) => {
            console.log({res})
            console.log('product created', Object.values(productFormData.value))
            products.value.push(productFormData.value)
            cleanProductForm()
            alert('Product created!')
        })
        .catch((err) => {
            console.log(err)
            alert('Couldn\'t create the product, please check your internet connection or contact support')
        })
}
</script>

<style scoped lang="scss">
.product-form {
    width: 200px;
    margin: auto;

    &__item {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        
        input {
            padding: 0.5rem;
        }

        .upload {
            padding: 0;
        }

        textarea {
            padding: 0.5rem;
            width: 300px;
            height: 100px;
        }
    }

    &__button {
        padding: revert;
    }
}
</style>