const allRadios = document.querySelectorAll(".btn");

export const uncheckRadios = () => allRadios.forEach(radio => radio.checked = false);
export const disableRadios = true_false => allRadios.forEach(radio => radio.disabled = true_false);