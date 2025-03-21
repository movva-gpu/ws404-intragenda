import { db } from '$lib/db';
import { redirect } from '@sveltejs/kit';

export async function GET({ params }) {
    const { id } = params;
    await db.execute(`DELETE FROM formations WHERE id = ?`, [id]);

    redirect(307, '/admin/formations');
}