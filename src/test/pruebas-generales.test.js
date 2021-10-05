
describe('Probando Jest', () =>{
    test('Prueba de objetos iguales',()=>{
        const datos1={
            nombre:'Sheila',
            edad:29
        };

        const datos2={
            nombre:'Sheyla',
            edad:29
        };

        expect(datos1).toEqual(datos2);
    })
});

/* Esta prueba trata de mostrar una prueba fallida */