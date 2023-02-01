import { useSelector } from 'react-redux';

export const auth = () => useSelector((state) => state.auth);
