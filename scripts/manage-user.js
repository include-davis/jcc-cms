// Creates a new CMS admin user, or resets the password of an existing one.
//
// Usage:
//   node scripts/manage-user.js <email> <password>
//
// This exists because the CMS's own /register page only works once, when
// the users collection is empty (see @include/hearth's register page) —
// after that, there's no in-app way to add or reset an account. This
// script does the same thing register.tsx does under the hood: hash the
// password with bcrypt and write it to the users collection. Never write
// a plaintext password directly into MongoDB — login always compares
// against this hash, so a plaintext value will never match.

require('dotenv').config();
const bcrypt = require('bcryptjs');
const { MongoClient } = require('mongodb');

async function main() {
  const [, , email, password] = process.argv;
  if (!email || !password) {
    console.error('Usage: node scripts/manage-user.js <email> <password>');
    process.exit(1);
  }

  const client = new MongoClient(process.env.MONGO_CONNECTION_STRING);
  try {
    await client.connect();
    const users = client.db().collection('users');
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await users.updateOne(
      { email },
      { $set: { email, password: hashedPassword } },
      { upsert: true }
    );
    console.log(
      result.upsertedCount > 0
        ? `Created new user: ${email}`
        : `Updated password for existing user: ${email}`
    );
  } finally {
    await client.close();
  }
}

main().catch((e) => {
  console.error('Failed:', e.message);
  process.exit(1);
});
