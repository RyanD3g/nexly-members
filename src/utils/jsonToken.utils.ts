import * as jwt from 'jsonwebtoken';

export const generateToken = (params = {}) => {
    return jwt.sign(params, "djkfhkjgbsjkçdgbw4iuegfupreghp48973y4tn4kejptbg34ip", {
        expiresIn:"30d",
    });
};
