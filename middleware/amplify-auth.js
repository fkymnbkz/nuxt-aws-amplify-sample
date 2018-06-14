import { Auth } from 'aws-amplify'

export default async ({ redirect }) => {
  let signed_in = false
  await Auth.currentUserInfo()
    .then(data => signed_in = Boolean(data))
    .catch(err => console.log(err))
    .then(() => signed_in || redirect('/signin'))
}
