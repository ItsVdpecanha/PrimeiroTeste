def contar_pares(lista):
    pares = [n for n in lista if n % 2 == 0]
    return len(pares), pares

lista = [2, 7, 5, 10, 22]
quantidade, numeros_pares = contar_pares(lista)

if quantidade > 0:
    print(f"Quantidade de números pares: {quantidade}")
    print("Números pares da lista:", numeros_pares)
else:
    print("Não há números pares na lista.")

    