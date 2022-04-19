<script>
  import { cart } from "../Components/stores";
  import Item from "../Components/Item.svelte";

  $: $cart, calcTotalPrice();

  let totalPrice;

  const calcTotalPrice = () => {
    totalPrice = 0;
    $cart.forEach((cartItem) => {
      totalPrice += Number(cartItem.price);
    });
  };
</script>

<div class="items-container">
  {#each $cart as item}
    <Item
      addButton={false}
      id={item.id}
      label={item.label}
      price={item.price}
      imageUrl={item.imageUrl}
      {item}
    />
  {/each}
</div>

<div class="items-container">
  <div>total price: ${totalPrice}</div>
</div>

<style>
  .items-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 20px;
    background-color: #d6d6d6;
    border-radius: 20px;
    width: 50%;
    margin: auto;
    margin-top: 50px;
  }
</style>
