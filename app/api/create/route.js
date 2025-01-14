

import { StreamChat } from 'stream-chat';
import { clerkClient } from '@clerk/nextjs/server';

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;

const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .replace(/\b(\w)/g, (match) => match.toUpperCase());
};

export async function POST(request) {
  // Initialize a Server Client
  const serverClient = StreamChat.getInstance(api_key, api_secret);

  // Retrieve user data from the request
  const user = await request.json();

  // Create User Token
  const token = serverClient.createToken(user.data.id);
  console.log('A new user has been created', token);

  // Initialize Clerk client
  const client = await clerkClient();

  // Update user metadata with the token
  await client.users.updateUserMetadata(user.data.id, {
    publicMetadata: {
      token: token,
    },
  });

  // Define predefined slugs
  const slugs = ['Beatbox', 'instrument', 'singing', 'prod'];

  // Create channels for each slug
  for (const slug of slugs) {
    const channel = serverClient.channel('messaging', slug, {
      image: 'https://getstream.io/random_png/?name=react',
      name: toTitleCase(slug.replace(/-/g, ' ')) + ' Discussion',
      created_by_id: user.data.id,
    });
    await channel.create();
    channel.addMembers([user.data.id]);
  }

  return Response.json({ message: 'User created and channels set up successfully' });
}
