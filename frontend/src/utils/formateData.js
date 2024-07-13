

export const formateDate = (date, config) => {

    const defultOption = { day: 'numeric', month: 'long', year: 'numeric' };
    const option = config ? config : defultOption;

    return new Date(date).toLocaleDateString("en-MA", option);
}