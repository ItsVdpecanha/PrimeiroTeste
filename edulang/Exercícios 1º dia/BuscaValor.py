entrada= input("Digite os números separados por espaço: ")
lista= entrada.split()
lista = [int(n) for n in lista]

numero= int(input("Digite o número que deseja verificar: "))

if numero in lista:
    print("O número {numero} está na lista.")
    
else:
    print("Número não encontrado na lista.")


                   
                   
