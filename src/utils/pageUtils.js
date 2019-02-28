import {MaxItemPerPage} from '../config';

export const limitUpperPage = (page) => {
    if (page > 0)
        return MaxItemPerPage * (page - 1);
    else return 0
};

export const limitLowerPage = (page) => {
    if (page > 0)
        return MaxItemPerPage * page;
    else return MaxItemPerPage
};