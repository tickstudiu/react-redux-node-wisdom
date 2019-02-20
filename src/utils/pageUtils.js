export const limitUpperPage = (page) => {
    if (page > 0) return 16*(page - 1);
    else return 0
};

export const limitLowerPage = (page) => {
    if (page > 0) return 16*page;
    else return 16
};