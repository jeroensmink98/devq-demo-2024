// Export an async function that sets a cookie and returns a response

export async function setCookie(name: string, value: string): Promise<Response> {
	document.cookie = `${name}=${encodeURIComponent(value)}; path=/`;
	return new Response(JSON.stringify({ ok: true }));
}

export async function deleteCookie(name: string): Promise<Response> {
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    return new Response(JSON.stringify({ ok: true }));
}
