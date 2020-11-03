#/usr/bin/env python3.8
#/usr/bin/env python3.8
#Programa que crea y cambia una contraseña automaticamente.

class Usuario:
    def __init__(self, correo, contraseña):
        self.correo = correo
        self.__contraseña = contraseña
    
    @property #Podemos llamar solo como usuario1.contraseña, sin las rayas bajas
    def contraseña(self):
        return self.__contraseña

    @contraseña.setter
    def contraseña(self, change):
        '''Se encarga de cambiar la contraseña
        change es un objeto, que tiene un bool (autorized) con la autenticidad del cambio
        change.minimum es un bool que confirma si la contraseña es lo suficientemente grande (dificil)
        change.new_password es... la nueva contraseña
        '''
        #password = change.new_password
        if change.autorized and change.minimum:
            self.__contraseña = change.new_password
        else: 
            raise ValueError('Error, minimum requirments not met')
        del change


class Password_change_request:
    def __init__(self, password, id, source_id_app=True):
        #Para simplificar las cosas vamos a decir que siempre es seguro el cambio de contraseña
        #Y el id es 1, solo para hacernos la vida mas facil
        self.id = id
        self.new_password = password
        self.minimum = self.check_minimum()
        self.autorized = self.check_autorization(self.id, source_id_app)

    def check_minimum(self):
        return True
    
    def change_password(self):
        accounts[self.id].contraseña = self
    
    def check_autorization(self, id, source):
        if id in accounts_id and source:
            return True
        else:
            self.suspicious_alarm()
            return False

    def suspicious_alarm(self):
        pass


if __name__ == "__main__":
    accounts_id = range(0, 15)
    accounts = [Usuario('sa_valens@hotmail.com', 'perrito-tablero-tijeras-123')]
    new_password = 'perro-mesa-regla-321'
    pass_change_request = Password_change_request(new_password, 0)
    pass_change_request.change_password()
    print(accounts[0].contraseña)