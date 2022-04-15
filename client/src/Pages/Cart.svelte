<script>
  import { cart } from "../Components/stores";

</script>

{#each $cart as item}
<p>
	{item.label}
</p>
{/each}