<script>
  import { user } from "../Components/stores";
  import { toasts }  from "svelte-toasts";
  import { navigate } from "svelte-navigator";
	let submitted = false;
  let username = "";
  let password = "";
	
	async function handleSubmit(e) {

		let res = await fetch('http://localhost:3000/auth/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      })
    })
    const data = await res.json();
    if(res.ok){
      user.set(data);
      toasts.success("logged in");
      navigate("/");
    }
	}
</script>

<div class="container">
	<form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<input bind:value={username} type="text" class="form-control" placeholder="Username" required>
		</div>

		<div class="form-group">
			<input bind:value={password} type="text" class="form-control" placeholder="Password" required>
		</div> 

		<button class="btn btn-full" on:click={() => submitted = true}>Login</button>
	</form>
</div>

<style>
	.container {
    min-height: calc(100vh - 61px);
    display: flex;
    align-items: center;
    justify-content: center;
		max-width: 1200px;
		margin: 0 auto;
	}	
	.form-group > *,
	.btn-full {
		width: 100%;
	}
	
	.form-control,
	.btn-full {
		border-radius: 3px;
	}

	.submitted input:invalid {
		border: 1px solid #c00;
	}

	.submitted input:focus:invalid {
		outline: 1px solid #c00;
	}
</style>