<script lang="ts">
	import { destinationStore, activityStore, budgetStore } from '$lib/stores';

	const destination = destinationStore;
	const budget = budgetStore;
	const activity = activityStore;

	async function clearCookies() {
		document.cookie = 'destination=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		document.cookie = 'budget=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
		document.cookie = 'type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

		// reset values in store
		destinationStore.set('');
		activityStore.set('');
		budgetStore.set('');
		window.location.reload();
	}
</script>

<div>
	{#if $destination == ''}
		<div role="alert">
			<div class="bg-orange-500 text-white font-bold rounded-t px-4 py-2">Warning</div>
			<div
				class="border border-t-0 border-red-400 rounded-b bg-orange-100 px-4 py-3 text-orange-700"
			>
				<p>Cookies have not been set</p>
			</div>
		</div>
	{:else}
		<div class="flex bg-slate-800 p-1 rounded-md">
			<span class="w-32 text-left mr-2">Destination:</span>
			<span class="font-mono text-green-500 pl-4 w-20">{$destination}</span>
		</div>

		<div class="flex bg-slate-800 p-1 mt-1 rounded-md">
			<span class="w-32 text-left mr-2">Budget:</span>
			<span class="font-mono text-green-500 pl-4 w-20">{$budget}</span>
		</div>

		<div class="flex bg-slate-800 p-1 mt-1 rounded-md">
			<span class="w-32 text-left mr-2">Activity:</span>
			<span class="font-mono text-green-500 pl-4 w-20">{$activity}</span>
		</div>


		<div class="pt-2">
			<a href="/trip">
				<button type="submit" class="btn variant-filled w-1/2">
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
					<span>Generate Trip</span>
				</button>
			</a>
		</div>
		<div class="pt-4">
			<button type="button" class="btn variant-filled w-1/4" on:click={clearCookies}>
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
							d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
						/>
					</svg>
				</span>
				<span>Reset Cookie</span>
			</button>
		</div>
	{/if}
</div>
