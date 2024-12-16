// Тип для працівника
export type Employee = {
  personnr: string;   // Ідентифікаційний номер працівника
  namn: string;      // Ім'я працівника
  epost: string;     // Електронна пошта
  mobil: string;     // Номер телефону
  avdelning: string; // Відділ
  status: 'Active' | 'Inactive' | 'Deactivate'; // Стан працівника
  actions?: Actions; // Опціональні дії
};

// Тип для можливих дій
export type Actions = {
  edit: boolean;     // Можливість редагування
  delete: boolean;   // Можливість видалення
};
