<script>
  export let label = "";
  export let imageUrl = "";
  export let price = "";

  const addItem = () => {
    //add item to store for later use
  }

</script>

<div class="item-container">
  <p class="label">{label}</p>
  <img src="{imageUrl}" alt="Image">
  <p class="description">Details</p>
  <div>{price}<span on:click={addItem}>Add</span></div>
</div>

<style>
  .item-container{
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    width: 150px;
    margin: 10px;
    background-color: white;
  }
  img{
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  .label{
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .description{
    margin-top: -30px;
    margin-bottom: 30px;
    background-color: white;
    border-radius: 5px;
    padding: 0px 5px 0px 5px;
  }
  .item-container div{
    margin-bottom: 10px;
  }
  .item-container div span{
    margin-left: 30px;
    background-color: green;
    border-radius: 10px;
    padding: 0px 8px 0px 8px;
  }
</style>