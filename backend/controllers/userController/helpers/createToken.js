import jwt from 'jsonwebtoken';

// Creating token after forgotPassword and login
export const createToken = (data) => {
    const Token = () => {
        const maxAge = 3 * 24 * 60 * 60;
        return jwt.sign(data, 'supersecret', {
            expiresIn: maxAge
        });
    }
    return Token();
};
