export function logged() {
    const token = localStorage.getItem('token');
    var isLogged = false;

    if(token != null) {
        isLogged = true;
    }

    return isLogged;
}