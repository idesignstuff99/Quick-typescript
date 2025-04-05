import { User } from "../services/User";


export default function Profile(user: User): HTMLElement {
    const template = document.createElement('template');
    template.innerHTML = `
    <div>
        ${ user.lastName }, ${user.firstName }
    </div>
    `;
    const el = template.content.firstElementChild as HTMLElement;
    el.dataset.user = JSON.stringify(user);


    return el;
}