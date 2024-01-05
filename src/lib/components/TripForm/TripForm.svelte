<script lang="ts">
	import { setCookie } from '$lib/cookie';

	import { activityStore, budgetStore, destinationStore } from '$lib/stores';
	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();
		const form = event.target as HTMLFormElement;

		const data = new FormData(form);

		const destination = String(data.get('destination') || 'London');
		const budget = String(data.get('budget') || '500');
		const type = String(data.get('activity') || 'sporty');

		console.log(destination, budget, type);

		setCookie('destination', destination);
		setCookie('budget', budget);
		setCookie('type', type);

		destinationStore.set(destination);
		budgetStore.set(budget);
		activityStore.set(type);
	};
</script>

<form on:submit={handleSubmit}>
	<div class="flex items-center mb-2">
		<label for="destination" class="w-32 mr-4">Destination</label>
		<input
			type="text"
			autocomplete="off"
			id="destination"
			placeholder="London"
			name="destination"
			class="flex-1 input input-bordered w-full"
		/>
	</div>
	<div class="flex items-center mb-2">
		<label for="budget" class="w-32 mr-4">Budget</label>
		<input
			type="number"
			autocomplete="off"
			id="budget"
			placeholder="500"
			name="budget"
			class="flex-1 input input-bordered w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
		/>
	</div>
	<div class="flex items-center mb-2 pt-2">
		<label for="budget" class="w-32 mr-4">Type</label>
		<div class="flex space-x-4">
			<label class="cursor-pointer">
				<input type="radio" name="activity" value="sporty" class="radio" checked />
				<span class="ml-2">Sporty</span>
			</label>

			<label class="cursor-pointer">
				<input type="radio" name="activity" value="adventurous" class="radio" />
				<span class="ml-2">Adventurous</span>
			</label>

			<label class="cursor-pointer">
				<input type="radio" name="activity" value="relaxing" class="radio" />
				<span class="ml-2">Relaxing</span>
			</label>
		</div>
	</div>
	<div class="mt-2 pt-2">
		<button type="submit" class="btn variant-filled w-1/2 ">
			<span
				><svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
					/>
				</svg>
			</span>
			<span>Store Trip Settings</span>
		</button>
	</div>
</form>
