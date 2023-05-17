interface Eel {
  hello_world: () => null;
  get_greeting: (name: string) => () => null;
}

interface CustomWindow extends Window {
  eel: Eel;
}

export const eel = (window as unknown as CustomWindow).eel;
