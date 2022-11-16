import { rest } from "msw";

const baseURL = "https://drf-api-pp5.herokuapp.com/"

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(
            ctx.json({
            "pk": 1,
            "username": "Antonio",
            "email": "",
            "first_name": "",
            "last_name": "",
            "profile_id": 1,
            "profile_image": "https://res.cloudinary.com/dvzlcfpp8/image/upload/v1/media/images/railcard_profile_pic_zoxxh9"
            })
            )
    }),

    rest.post(`${baseURL}dj-rest-auth/logout`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];