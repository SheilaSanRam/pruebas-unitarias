/* .. implica que está saliendo a la carpeta anterior */
import { suma } from '../js/suma';


test('suma 1 + 2 es igual a 3', () => {
  /* Espero que al sumar 1 y 2 sea 3 */
  expect(suma(1, 2)).toBe(3);
});