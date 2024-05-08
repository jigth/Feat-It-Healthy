<template>
    <h1 style="margin-left: 1.5rem; margin-top: 1rem;">Products Management</h1>

    <h2 style="text-align: center; margin-bottom: 1rem;">New Product</h2>
    <form class="product-form">
        <div class="product-form__item">
            <input type="text" v-model="productFormData.name" placeholder="name">
        </div>
        <div class="product-form__item">
            <textarea v-model="productFormData.description" style="width: 300px; height: 100px;" placeholder="description"></textarea>
        </div>
        <div class="product-form__item">
            <input type="text" v-model="productFormData.cost" min="1" placeholder="cost">
        </div>
        <div class="product-form__item">
            <input type="text" v-model="productFormData.inventory" placeholder="inventory">
        </div>
        <div class="product-form__item">
            <input type="file" placeholder="image url" class="upload">
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
type Product = {
    name: string;
    description: string;
    cost?: number;
    inventory?: number;
    imageUrl: string;
}

const products = ref<Product[]>([
    {
        name: "Chicken",
        description: "Full pasture raised chicken weighting between 1kg and 2.5kg",
        cost: 500,
        inventory: 12+1,
        imageUrl: "https://d2d8wwwkmhfcva.cloudfront.net/800x/filters:fill(FFF,true):format(jpg)/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5dd910bd-17df-4c2c-91a6-1ee0f8652d56.png"
    },
    {
        name: "Almonds",
        description: "Delicious fresh premium Almonds harvested in the North",
        cost: 1000,
        inventory: 288,
        imageUrl: "https://images.immediate.co.uk/production/volatile/sites/30/2021/02/almonds-9e25ce7.jpg?quality=90&resize=556,505"
    },
]);

const productFormData = ref<Product>({
    name: '',
    cost: undefined,
    description: '',
    inventory: undefined,
    imageUrl: ''
});

const cleanProductForm = () => {
    productFormData.value = {
        name: '',
        cost: undefined,
        description: '',
        inventory: undefined,
        imageUrl: ''
    };
}
const createProduct = () => {
    console.log('product created', Object.values(productFormData.value));
    cleanProductForm()
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
        }
    }

    &__button {
        padding: revert;
    }
}
</style>