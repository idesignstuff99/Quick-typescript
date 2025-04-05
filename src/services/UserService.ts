
import { User } from "./User";
const baseUrl = 'https://randomuser.me/api';

function toUser(json: any): User | null {
    if (json) {
        let user = json.results[0];
        return {
            id: user.login.uuid,
            lastName: user.name.last,
            firstName: user.name.first,
            email: user.email,
            photo: user.picture.thumbnail,
            followers: [],
            socialMedia: [],
            
        };
    }
    return null;
}

export async function get(): Promise<User | null> {
    let url = `${ baseUrl }`;
    console.log(`Requesting random user from ${ url}...`);
    const response = await fetch(url);
    if (response.status === 200) {
        const json = await response.json();
        console.log(json);
        return json;
    }
    return null;
}