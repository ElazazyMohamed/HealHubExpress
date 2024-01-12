// clearing token after resetPassword and logout
export const clearToken = (res) => {
    res.clearCookie('jwt');
};
