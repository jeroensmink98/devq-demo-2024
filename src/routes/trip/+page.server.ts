import { comments } from '$lib/server/comments';
import { CheckComment, GenerateTripAdvice } from '$lib/server/openai';
import type { Actions, PageServerLoad } from '../$types';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ request, cookies }) => {
	const destination = cookies.get('destination') || 'london';
	const activity = cookies.get('activity') || 'sporty';
	const budgetStore = cookies.get('budget') || '500';

	// Here we call the Open AI API
	const advice = await GenerateTripAdvice(destination, activity, budgetStore);
	// const advice =
	// 	"Here are some sporty activities to do in London under a budget of 500 euros: 1. Visit the Lee Valley White Water Centre and experience white water rafting. Estimated cost: 40 euros per person. 2. Visit the Snow Centre and go skiing or snowboarding. Estimated cost: 49 euros per person. 3. Explore the London Olympic Park by foot or bike. Estimated cost: free. 4. Play tennis at one of the many public courts available in London. Estimated cost: from 8 euros per hour. 5. Take a bike tour around the city. Estimated cost: from 20 euros per person. 6. Go indoor rock climbing at one of the many climbing centers in London. Estimated cost: from 15 euros per person. 7. Visit the London Aquatics Centre and swim in the Olympic-sized pool. Estimated cost: 5.50 euros per swim. 8. Run with London's Parkrun community at one of the many free weekly 5km runs held across the city. Estimated cost: free. Please note that prices may vary depending on factors such as dates, location, and group size.";
	return {
		props: {
			destination,
			activity,
			budgetStore,
			advice,
			comments
		}
	};
};

export const actions: Actions = {
	comment: async ({ request }) => {
		const data = await request.formData();
		const comment = String(data.get('comment') || '');

		if (comment.length < 2) {
			return fail(400, { msg: 'comment too short' });
		}

		if (!(await CheckComment(comment as string))) {
			return fail(400, { msg: 'comment not allowed' });
		}
		return {
			props: {
				comment: comment,
				msg: 'this comment is allowed'
			}
		};
	}
};
