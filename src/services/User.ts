export type SocialMedia = {
    type: string,
    value: string
};

export type User = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    photo: string,
    socialMedia: Array<SocialMedia>,
    followers: Array<SocialMedia>
};

