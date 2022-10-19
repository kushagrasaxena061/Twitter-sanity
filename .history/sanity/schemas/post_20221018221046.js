export default {
  name: 'tweet',
  title: 'Tweet',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Tect in Tweet',
      type: 'string',
    },
    {
      name: 'blockTweet',
      title: 'Block Tweet',
      description:"ADMIN Controls: Toggle if Tweet is deemed inappropriate",
      type: 'boolean',
    },
    {
      name: 'usename',
      title: 'Username',
      type: 'string',
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Tweet image',
      type: 'string',
    },
  ],
}