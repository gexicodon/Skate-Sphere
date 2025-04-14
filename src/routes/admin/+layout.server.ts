import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '../maps/$types';
import { auth } from '$lib/scripts/firebase';

export const load: PageLoad = async () => {

  const user = await new Promise((resolve) => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    });
  });


  if (user) {
    throw redirect(303, '/login');
  }

  return {};
}