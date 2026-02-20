fetch('https://jsonplaceholder.typicode.com/users/')
  .then(r => r.json())
  .then(users => {

    // 1. FILTER
    const evenUsers = users.filter(user => user.id % 2 === 0);

    // 2. MAP
    const cleanUsers = evenUsers.map(
      ({ id, name, address: { city } }) => ({ id, name, city })
    );

    // 3. SPREAD
    const guestUser = { id: 0, name: 'Guest User', city: '—' };
    const withGuest = [guestUser, ...cleanUsers];

    // 4. REDUCE
    const totalChars = withGuest.reduce(
      (acc, { name }) => acc + name.length,
      0
    );

    console.log('--- Processed Users ---');
    console.table(withGuest);

    console.log('--- Statistics ---');
    console.log(`Total characters in usernames: ${totalChars}`);
  });