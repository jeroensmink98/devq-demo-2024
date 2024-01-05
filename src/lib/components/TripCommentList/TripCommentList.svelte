<script lang="ts">
	import TripComment from '../TripComment/TripComment.svelte';

	export let comments: string[];
</script>

<div>
	<ul class="list">
		{#each comments as comment}
            <hr>
			<li class="p-4">
				<TripComment {comment} />
			</li>
		{/each}
	</ul>
</div>

