<script>
	import TripCookie from '$lib/components/TripCookie/TripCookie.svelte';
	import TripForm from '$lib/components/TripForm/TripForm.svelte';
	import { destinationStore } from '$lib/stores';

	const destination = destinationStore;
</script>

<div class="p-2">
	<div class="grid grid-cols-4 gap-2 items-stretch">
		<div class="col-span-2 h-full">
			<div class="card w-98 bg-base-300 shadow-xl h-full flex flex-col">
				<header class="card-header font-bold"><h1>Create your Trip</h1></header>
				<section class="p-4 flex-grow">
					<TripForm />
				</section>
				<footer class="card-footer">
					<p class="font-thin text-sm italic">
						* The trip advice you are getting is just an indication.
					</p>
				</footer>
			</div>
		</div>
		<div class="col-span-2 h-full">
			<div class="card w-98 bg-base-300 shadow-xl h-full flex flex-col">
				<section class="p-4 flex-grow">
					<TripCookie />
				</section>
				<footer class="card-footer">
					{#if $destination != ''}
						<p class="font-thin text-sm italic">* These values are fetched from the cookie</p>
					{/if}
				</footer>
			</div>
		</div>
	</div>
</div>
