import './style.css'

import { get } from './services/UserService.ts';
import Profile from './components/Profile.ts';

let user = await get();

console.log(user?.id);
console.log(user?.lastName);
console.log(user?.firstName);

if (user != null) {
const app = document.querySelector<HTMLDivElement>('#app');
const profile = Profile(user);
app?.append(profile);
}
