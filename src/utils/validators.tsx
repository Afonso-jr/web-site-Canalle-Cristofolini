export const nameValidator = (value: string) => {
    if (!value) return "Nome é obrigatório";
    
    const regex = /^[A-Za-zÀ-ÿ\s]+$/;
    
    if (!regex.test(value)) {
      return "Nome não pode conter números";
    }
    
    return null;
};

export const emailValidator = (value: string) => {
    if (!value) return "Email é obrigatório";

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!regex.test(value)) {
        return "Email inválido";
    }

    return null;
};















export const passwordValidator = (value: string) => {
if (!value) return "Senha é obrigatória";

if (value.length < 6) {
return "Senha deve ter no mínimo 6 caracteres";
}

return null;
};

export const numberValidator = (value: string) => {
if (!value) return "Campo obrigatório";

if (isNaN(Number(value))) {
return "Deve ser um número válido";
}

return null;
};