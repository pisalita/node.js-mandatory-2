<script>
  import { cart } from "../Components/stores";
  import { id } from "../Components/stores";
  import { toasts } from "svelte-toasts";
  export let addButton = true;
  export let label = "";
  export let imageUrl = "";
  export let price = 0;
  export let item = null;

  const addItem = () => {
    $cart = [
      ...$cart,
      {
        id: $id,
        label: label,
        imageUrl: imageUrl,
        price: price,
      },
    ];
    toasts.success("Item added to cart");
    $id++;
    console.log($cart);
  };

  const removeItem = () => {
    $cart = $cart.filter((cartItem) => {
      return item.id !== cartItem.id;
    });
    toasts.error("Item removed from cart");
  };
</script>

<div class="item-container">
  <p class="label">{label}</p>
  <img src={imageUrl} alt="Image" />
  <p class="description">Details</p>
  <div>
    {"$" + price}
    {#if addButton}
      <span class="add" on:click={addItem}>Add</span>
    {:else}
      <span class="remove" on:click={removeItem}>Remove</span>
    {/if}
  </div>
</div>

<style>
  .item-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 150px;
    margin: 10px;
    background-color: white;
  }
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .label {
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .description {
    margin-top: -30px;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 5px;
    padding: 0px 5px 0px 5px;
  }
  .item-container div {
    margin-bottom: 10px;
  }
  .item-container div .add {
    margin-left: 30px;
    background-color: green;
    border-radius: 10px;
    padding: 0px 8px 0px 8px;
  }
  .item-container div .remove {
    margin-left: 10px;
    background-color: red;
    border-radius: 10px;
    padding: 0px 8px 0px 8px;
  }
  span {
    cursor: pointer;
    color: white;
  }
</style>
