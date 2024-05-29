import { testSignup, testLogin, testProductSearch } from './test_queries';

async function main() {
  console.log("Start");

  await testSignup();
  
  await testLogin();

  await testProductSearch();

  console.log("End");
}

main();
