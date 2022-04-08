<script>
	import {fly, fade } from 'svelte/transition';	
	let hasError = false;
	let isSuccessVisible = false;
	let submitted = false;
	
	const errMessage = "All the fields are mandatory";		
	
	function handleSubmit(e) {
		isSuccessVisible = true;

		setTimeout(function(){
			isSuccessVisible = false;
		}, 4000);
	}
</script>

{#if hasError == true}
		<p class="error-alert">{errMessage}</p>
{:else}
	{#if isSuccessVisible}	
		<p class="error-alert" transition:fade={{duration:150}}>Data updated successfully</p>
	{/if}
{/if}

<div class="container">
	<form id="surveyForm" class="mt-4" class:submitted on:submit|preventDefault={handleSubmit}>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="First name" required>
		</div>

		<div class="form-group">
			<input type="text" class="form-control" placeholder="Last name" required>
		</div> 

		<button class="btn btn-full" on:click={() => submitted = true}>Continue</button>
	</form>
</div>

<link href="https://gist.githubusercontent.com/Ajax30/08899d40e16069cd517b9756dc900acc/raw/04e4f9997245df079fa8500690d1878311115b20/global.css" rel="stylesheet" crossorigin="anonymous">

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	h2 {
		margin-top: 0;
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
	
	.error-alert {
		border: 1px solid #c00 !important;
		padding: 6px;
		text-align: center;
		color: #c00;
		border-radius: 3px;
	}
</style>