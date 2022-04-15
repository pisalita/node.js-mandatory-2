<script>
  import { toasts }  from "svelte-toasts";
  import { navigate } from "svelte-navigator";
	let submitted = false;
  let email = "";
  let subject = "";
  let message = "";
	
	async function handleSubmit(e) {

		let res = await fetch('http://localhost:3000/contact', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        email,
        subject,
        message,
      })
    })
    
    if(res.ok){
        toasts.success("Email sent!");
      } 
	}
</script>

<div class="container">
	<form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>
		
    <div class="form-group">
			<input bind:value={email} type="text" class="form-control" placeholder="Email" required>
		</div>

		<div class="form-group">
			<input bind:value={subject} type="text" class="form-control" placeholder="subject" required>
		</div> 

    <div class="form-group">
			<input bind:value={message} type="text" class="form-control" placeholder="message" required>
		</div> 

		<button class="btn btn-full" on:click={() => submitted = true}>Send email</button>
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