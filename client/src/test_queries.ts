import { createTRPCProxyClient, httpLink } from '@trpc/client';
import { AppRouter } from '../../server/app';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpLink({
      url: "http://localhost:3000/trpc"
    })
  ]
});

export async function testSignup() {
  try {
    const user = await client.users.signup.mutate({ username: "user2", password: "pass123", email: "fsds@sd.com" });
    console.log('Signup successful:', user);
  } catch (error) {
    console.error('Signup error:', error);
  }
}

export async function testLogin() {
  try {
    console.log("Login");
    const user = await client.users.login.mutate({ username: "user2", password: "pass123" });
    console.log('Login successful:', user);
  } catch (error) {
    console.error('Login error:', error);
  }
}

export async function testProductSearch() {
  try {
    const products = await client.products.searchProduct.query({ searchTerm: "IPhOne" });
    console.log('Search results:', products);
  } catch (error) {
    console.error('Search error:', error);
  }
}
