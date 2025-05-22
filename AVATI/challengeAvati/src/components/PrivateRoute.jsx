import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, auth }) => {
  if (!auth) {
    // Se não autenticado, redireciona para login
    return <Navigate to="/login" replace />;
  }
  // Se autenticado, renderiza os filhos normalmente
  return children;
};

export default PrivateRoute;
