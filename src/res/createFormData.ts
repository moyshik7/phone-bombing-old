
/**
 * Takes an js object and turns it into formdata for fetching
 * @param {object} obj an js object {key: value, ........}
 * @returns FormData
 */
export const CreateFormDataFromObject = (obj) => {
    let formData = new FormData();
    for ( let key in obj ) {
        formData.append(key, obj[key]);
    }
    return(formData);
}