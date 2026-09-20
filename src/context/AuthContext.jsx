import {
  createContext,
  useContext,
  useState
} from 'react';

const AuthContext = createContext(null);

function getStoredUser() {
  const storedUser = localStorage.getItem('demo-user');

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    localStorage.removeItem('demo-user');
    return null;
  }
}

export function AuthProvider({ children }) {

  const [user, setUser] = useState(getStoredUser);

  async function login(email, password, remember = false) {

    await new Promise(resolve => {
      setTimeout(resolve, 900);
    });

    if (!email || !password) {
      throw new Error(
        'Correo y contraseña son obligatorios.'
      );
    }

    if (password.length < 6) {
      throw new Error(
        'La contraseña debe contener al menos 6 caracteres.'
      );
    }

    const loggedUser = {
      id: crypto.randomUUID(),
      name: email.split('@')[0],
      email
    };

    setUser(loggedUser);

    if (remember) {

      localStorage.setItem(
        'demo-user',
        JSON.stringify(loggedUser)
      );

    } else {

      localStorage.removeItem('demo-user');

    }

    return loggedUser;
  }

  function logout() {

    setUser(null);

    localStorage.removeItem('demo-user');
  }

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        isAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {

  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      'useAuth debe utilizarse dentro de AuthProvider'
    );
  }

  return context;
}